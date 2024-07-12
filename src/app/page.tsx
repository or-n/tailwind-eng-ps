"use client";
import { useUsdcQuotes } from "@/lib/hooks";

export default function PriceFeed() {
  const prices = useUsdcQuotes({
    token_ids: [
      ...OTHER_TOKEN_IDS,
      ...COSMOS_TOKEN_IDS
    ]
  });
  return (
    <div className="h-full w-full flex flex-col px-4">
      <div className="py-4">
        <h1 className="text-lg">Cosmos Tokens Blep</h1>
        <div>
          {prices.slice(COSMOS_TOKEN_IDS.length).map((price, index) => (
            <div
              key={index}
              className="flex gap-2 text-white">
              <div className="text-yellow-500">{COSMOS_TOKEN_IDS[index]}</div>
              <div>{price}</div>
            </div>
          )
          )}
        </div>
      </div>
      <div>
      <h1 className="text-lg">
        Other Tokens
      </h1>
      {prices.slice(0, OTHER_TOKEN_IDS.length).map((price, index) => (
        <div
          key={index}
          className="flex gap-2 text-white">
          <div className="text-purple-500">{OTHER_TOKEN_IDS[index]}</div>
          <div>{price}</div>
        </div>))}
        </div>
    </div>
  );
}

const OTHER_TOKEN_IDS = [
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
