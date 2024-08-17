'use client'

import { useNetwork } from '@/context/TokenContext'
import { network, setNetwork } from '@/helper'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Header = () => {
  const { network, setNetwork }: any = useNetwork()

  return (
    <nav className='h-16 w-full flex items-center justify-between px-16 pt-20'>
      <Link href='/' className='text-4xl font-bold '>
        Solana{' '}
        <span className='text-tertiary font-bold text-4xl'>Explorer</span>
      </Link>

      <div>
        <button
          className={`${
            network === 'devnet' && 'bg-tertiary text-primary'
          } text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center `}
          type='button'
          onClick={() => setNetwork('devnet')}
        >
          devnet
        </button>
        <button
          className={`${
            network === 'mainnet-beta' && 'bg-tertiary text-primary'
          } text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center `}
          type='button'
          onClick={() => setNetwork('mainnet-beta')}
        >
          mainnet-beta
        </button>
      </div>
    </nav>
  )
}

export default Header
