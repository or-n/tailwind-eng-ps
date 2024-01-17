"use client";
import { useEffect, useState } from "react";

export const useUsdcQuotes = ({
  token_ids
}: {
  token_ids: string[];
}) => {
  const [prices, set_prices] = useState<number[]>([]);

  useEffect(() => {
    const fetch_usd_prices = async () => {
      const response = await fetch(
        `/api/price?ids=${token_ids.join(",")}`
      );
      const data = await response.json();
      set_prices(data.prices);
    };

    fetch_usd_prices();
  }, [token_ids]);

  return prices; 
};
