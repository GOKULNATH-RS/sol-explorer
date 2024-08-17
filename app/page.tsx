'use client'

import Results from '@/components/Results'
import { useNetwork } from '@/context/TokenContext'
import { getTokenInfo } from '@/helper'
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

export default function Home() {
  const [token, setToken] = useState('')
  const [results, setResults] = useState(false)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<any>(null)
  const { network } = useNetwork()

  const toastStyle = {
    style: {
      borderRadius: '10px',
      background: '#060f27',
      color: '#fff'
    },
    iconTheme: {
      primary: '#7FC7D9',
      secondary: '#333'
    }
  }

  const handleSearch = async () => {
    console.log('searching for token')
    setResults(true)
    setLoading(true)
    const res = await getTokenInfo(token, network)
    setLoading(false)
    console.log('res :', res)
    if (res.accInfo.result.value === null) {
      setResults(false)
      setLoading(false)
      return toast.error('Account not found', toastStyle)
    }

    setData(res)
  }

  return (
    <main className='min-h-screen flex flex-col items-center pb-10 px-28 mx-16 max-lg:mx-0 max-lg:px-12'>
      <Toaster />
      <div className='flex justify-center  p-16'>
        <div className=''>
          <input
            type='text'
            name='address'
            id='address'
            placeholder='Search for accounts'
            onChange={(e) => setToken(e.target.value)}
            className='w-[600px] h-12 rounded-lg p-2 px-4 m-2 my-6 bg-secondary bg-opacity-50 text-white placeholder:text-sm focus:outline-none border-[1px] border-opacity-15 hover:border-opacity-25 focus:border-opacity-45 border-tertiary'
          />
          <button
            onClick={handleSearch}
            className='bg-secondary h-12 p-2 px-4 rounded-lg bg-opacity-25 border-primary '
          >
            Search
          </button>
        </div>
      </div>
      {results &&
        (loading ? (
          <div className='flex items-center justify-center '>
            <div className='relative'>
              <div className='h-12 w-12 rounded-full border-t-4 border-b-4 border-tertiary'></div>
              <div className='absolute top-0 left-0 h-12 w-12 rounded-full border-t-4 border-b-4 border-blue-500 animate-spin'></div>
            </div>
          </div>
        ) : (
          <Results result={data} address={token} />
        ))}
    </main>
  )
}
