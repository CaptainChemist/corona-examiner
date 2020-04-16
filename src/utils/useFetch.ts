import { useState, useEffect } from "react"
import {
  processOneCOVIDTimeSeries,
  processCOVIDAggregatedData,
} from "./processCOVIDData"

export const useFetchTimeSeries = (url: string, options: RequestInit) => {
  const [response, setResponse] = useState(null)
  const [loading, setLoading] = useState(true)

  async function fetchData() {
    const res = await fetch(url, options)

    const text = await res.text()

    setResponse(processOneCOVIDTimeSeries(text))
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])
  return [response, loading]
}

export const useFetchAggregatedData = (url: string, options: RequestInit) => {
  const [response, setResponse] = useState(null)
  const [loading, setLoading] = useState(true)

  async function fetchData() {
    const res = await fetch(url, options)

    const text = await res.text()
    setResponse(processCOVIDAggregatedData(text))
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])
  return [response, loading]
}
