import React from 'react'
import Context from './Context'

export default function Provider({ store, children }) {
  console.warn('θΏζ― Envy/react-redux π')

  return <Context.Provider value={{ store }}>{children}</Context.Provider>
}