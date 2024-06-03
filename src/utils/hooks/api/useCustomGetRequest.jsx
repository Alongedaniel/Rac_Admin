import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useAuth } from '../../contexts/userContext/UserContext'
import axiosInstance from './axiosInstance'
import { CronJob } from "cron";

const useCustomGetRequest = (url) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const { bearerToken } = useAuth()
      const job = new CronJob(
        "1 * * * * *",
        function () {
          const res = axiosInstance.get(url);
        },
        true
      );
      job.start();

    const getRequests = async () => {
        // const config = {
        //   // method: "GET",
        //   url: `https://rac-backend.onrender.com/api/${url}`,
        //   headers: {
        //     "Content-Type": "application/json",
        //     Authorization: `Bearer ${bearerToken}`,
        //   },
        //   maxBodyLength: Infinity,
        // };
        setLoading(true)
        try {
            const res = await axiosInstance.get(url)
            console.log(res.data)
            setData(res.data)
            setError('')
            setLoading(false)
        } catch (e) {
            setError(e.message)
            setData([])
            setLoading(false)
        }
    }

    useEffect(() => {
        getRequests()
    }, [])

  return { data, error, loading, setError };
}

export default useCustomGetRequest
