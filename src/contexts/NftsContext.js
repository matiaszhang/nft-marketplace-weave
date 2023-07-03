import React, { createContext, useContext } from 'react'
import { useState, useEffect } from 'react'
import data from '../data'

export const NftContext = createContext()

const NftContextProvider = ({ children }) => {
  console.log(data)

  return <NftContext.Provider value={{ data }}>{children}</NftContext.Provider>
}

export default NftContextProvider
