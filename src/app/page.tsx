"use client"
import { useUsdcQuotes } from "@/lib/hooks"
import { useState } from 'react'

export default function Main() {
  return (
    <div>
      <Navbar/>
      <div className="flex">
        <PriceFeed/>
        <Counter/>
      </div>
    </div>
  )
}

function Counter() {
  const [counter, setCounter] = useState<number>(0)
  const [history, setHistory] = useState<number[]>([])
  const [currentPage, setCurrentPage] = useState<number>(0);

  const handleIncrement = async () => {
    const response = await fetch('/api/increment-random', {
      method: 'POST',
    })
    if (response.ok) {
      const data = await response.json()
      setCounter(data.counter)
      setHistory(data.history)
    }
  }

  const itemsPerPage = 10
  const totalPages = Math.max(1, Math.ceil(history.length / itemsPerPage))
  const lastPage = totalPages - 1

  const displayHistory = history.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  )

  const goToFirstPage = () => setCurrentPage(0)
  const goToLastPage = () => setCurrentPage(totalPages - 1)

  return (
    <div className="p-4 space-y-4">
      <h1>Counter: {counter}</h1>
      <button
        onClick={handleIncrement}
        className="rounded-md bg-gray-800 hover:bg-gray-500 p-2"
      >
        Increment Random
      </button>
      <div>
        <h2>History:</h2>
        <ul>
          {displayHistory.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div className="space-x-2">
          <button
            onClick={goToFirstPage}
            disabled={currentPage === 0}
          >
            &laquo;
          </button>
          {Array.from({ length: totalPages }, (_, index) => index).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`rounded-md p-2 ${currentPage === page ? 'bg-pink-500' : 'bg-gray-700'}`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={goToLastPage}
            disabled={currentPage === lastPage}
          >
            &raquo;
          </button>
        </div>
      </div>
    </div>
  )
}

function Navbar() {
  return (
    <nav className="bg-black text-white py-5 border-b border-gray-800">
      <div className="max-w-full mx-auto px-4">
        <div className="flex items-center space-x-8">
          <img src="/logo.svg" alt="Logo" className="" />
          <div className="">
            <a href="#" className="hover:bg-gray-800 px-4 py-2 rounded-md font-medium relative group inline-flex">
              Mint
              <svg class="-mr-1 h-5 w-5 text-gray-300 transition-transform duration-200 delay-50 transform group-hover:rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
              </svg>
            </a>
            <a href="#" className="bg-pink-600 hover:bg-gray-800 px-4 py-2 rounded-md font-medium relative group inline-flex">
              Trade
              <svg class="-mr-1 h-5 w-5 text-gray-300 transition-transform duration-200 delay-50 transform group-hover:rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
              </svg>
            </a>
            <a href="#" className="hover:bg-gray-800 px-4 py-2 rounded-md font-medium relative group inline-flex">
              Chain
              <svg class="-mr-1 h-5 w-5 text-gray-300 transition-transform duration-200 delay-50 transform group-hover:rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
              </svg>
            </a>
            <a href="#" className="hover:bg-gray-800 px-4 py-2 rounded-md font-medium relative group inline-flex">
              Analytics
              <svg class="-mr-1 h-5 w-5 text-gray-300 transition-transform duration-200 delay-50 transform group-hover:rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
              </svg>
            </a>
            <a href="#" className="hover:bg-gray-800 px-4 py-2 rounded-md font-medium">Apps</a>
          </div>
          <div className="relative flex-grow">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg class="w-4 h-4 text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
            </div>
            <input
              type="search"
              placeholder="Search for a collection or profile..."
              className="w-full ps-10 px-4 py-1.5 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:border-gray-500"
            />
          </div>
          <div className="mx-auto flex max-w-screen-sm items-center justify-center">
            <div style={{ padding: '1px' }} className="w-full rounded-md bg-gradient-to-r from-yellow-100 via-green-300 via-cyan-300 to-blue-300">
              <h1 className="px-4 py-1.5 rounded-md flex h-full w-full items-center justify-center bg-black back">
                Get STARS
              </h1>
            </div>
          </div>
          <div className="relative flex items-center">
            <svg className="h-6 w-6"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />  <path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>
            <span className="absolute top-0 right-0 h-3 w-3 bg-pink-600 rounded-full"></span>
          </div>
          <a href="#" className="bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded-md font-medium">Connect Wallet</a>
        </div>
      </div>
    </nav>
  )
}

function PriceFeed() {
  const prices = useUsdcQuotes({
    token_ids: [
      ...OTHER_TOKEN_IDS,
      ...COSMOS_TOKEN_IDS
    ]
  })
  return (
    <div className="h-full flex flex-col px-4">
      <div className="py-4">
        <h1 className="text-lg">Cosmos Tokens</h1>
        <div>
          {prices.slice(OTHER_TOKEN_IDS.length).map((price, index) => (
            <div
              key={COSMOS_TOKEN_IDS[index]}
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
          key={OTHER_TOKEN_IDS[index]}
          className="flex gap-2 text-white">
          <div className="text-purple-500">{OTHER_TOKEN_IDS[index]}</div>
          <div>{price}</div>
        </div>))}
        </div>
    </div>
  )
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
]
