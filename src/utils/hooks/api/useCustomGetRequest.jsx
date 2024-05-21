import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const useCustomGetRequest = (url, body) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const getRequests = async () => {
        setLoading(true)
        try {
            const res = axios.get(`https://rac-backend.onrender.com/api/${url}`, body)
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
