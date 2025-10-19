import React, { Suspense } from 'react'
import Router from './libs/Router.jsx'
import './App.css'

const App = () => {
  return (
    <Suspense fallback={"Loading"}>
      <Router/>
    </Suspense>
  )
}

export default App