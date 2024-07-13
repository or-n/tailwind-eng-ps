"use client"
import { useEffect, useState, useRef } from "react"

export const useUsdcQuotes = ({
  token_ids
}: {
  token_ids: string[]
}) => {
  const [prices, set_prices] = useState<number[]>([])
  const hasFetched = useRef(false)

  useEffect(() => {
    const fetch_usd_prices = async () => {
      const response = await fetch(
        `/api/price?ids=${token_ids.join(",")}`
      )
      const data = await response.json()
      set_prices(data.prices)
    }
    if (!hasFetched.current) {
      fetch_usd_prices()
      hasFetched.current = true
    }
  }, [token_ids])

  return prices
}
