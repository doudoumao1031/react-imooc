import List from './pages/manage/List'
import { RouterProvider } from 'react-router-dom'
import routerConfig from './router'
import { ChangeEvent, useState } from 'react'
import 'antd/dist/reset.css'
import FormElementsDemo from './FormElementsDemo'
import FormikDemo from './test/FormikDemo'

function App() {
  return (
    <>
      {/* <RouterProvider router={routerConfig}></RouterProvider> */}
      {/* <FormElementsDemo /> */}
      <FormikDemo />
    </>
  )
}

export default App
