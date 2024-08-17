'use client'

import { createContext, useContext, useState } from 'react'

const networkContext = createContext()

export const NetworkProvider = ({ children }) => {
  const [network, setNetwork] = useState('mainnet-beta')
  return (
    <networkContext.Provider value={{ network, setNetwork }}>
      {children}
    </networkContext.Provider>
  )
}

export const useNetwork = () => {
  return useContext(networkContext)
}
