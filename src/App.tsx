import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'
import FormWrapper from './components/forms/formWrapper/FormWrapper'
import { Provider, useSelector } from 'react-redux'
import store from './redux/store'


function App() {


  return (
    <Provider store={store}>
      <Header />
      <FormWrapper />
    </Provider>
  )
}

export default App
