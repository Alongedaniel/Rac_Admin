import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useAuth } from '../../contexts/userContext/UserContext'

const useCustomGetRequest = (url) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const { bearerToken } = useAuth()

    const getRequests = async () => {
        const config = {
          method: "GET",
          url: `https://rac-backend.onrender.com/api/${url}`,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${bearerToken}`,
          },
          maxBodyLength: Infinity,
        };
        setLoading(true)
        try {
            const res = axios(config)
            setData(res.data)
            setError('')
            setLoading(false)
        } catch (e) {
            setError(e.message)
            setData(null)
            setLoading(false)
        }
    }

    useEffect(() => {
        getRequests()
    }, [url])

  return {data, error, loading}
}

export default useCustomGetRequest
