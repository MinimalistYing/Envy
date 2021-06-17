import React from 'react'
import Context from './Context'

export default function Provider({ store, children }) {
  console.warn('这是 Envy/react-redux 😊')

  return <Context.Provider value={{ store }}>{children}</Context.Provider>
}