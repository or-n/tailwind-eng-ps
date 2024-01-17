"use client";
import { useUsdcQuotes } from "@/lib/hooks";

export default function PriceFeed() {
  const prices = useUsdcQuotes({
    token_ids: [
      ...ETH_TOKEN_IDS,
      ...COSMOS_TOKEN_IDS
    ]
  });
  return (
    <div>
      <h1>Price Feed</h1>
      {prices.map((price, index) => (
        <div
          key={index}
          className="flex gap-2 text-white">
          <div>{ETH_TOKEN_IDS[index]}</div>
          <div>{price}</div>
        </div>
      )
      )}
    </div>
  );
}

const ETH_TOKEN_IDS = [
  "usd-coin",
  "ethereum",
  "bitcoin",
  "binancecoin",
  "ripple",
  "cardano",
  "tether",
  "polkadot",
  "uniswap",
  "litecoin",
  "chainlink",
  "bitcoin-cash",
  "stellar",
  "dogecoin",
]

const COSMOS_TOKEN_IDS = [
  "cosmos",
  "terra-luna",
  "kava",
  "akash-network",
  "iris-network",
  "band-protocol",
  "crypto-com-chain",
  "fetch-ai",
  "injective-protocol",
  "sentinel",
  "oasis-network",
  "regen",
  "likecoin",
  "emoney",
  "bitsong",
  "starname",
  "cybervein",
  "persistence",
  "osmosis",
  "sifchain",
];
