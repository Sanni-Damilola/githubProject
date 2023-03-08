import React from 'react'
import { useRoutes } from 'react-router-dom'
import HomePage from './HomePage'

const AllRoutes = () => {

    const element = useRoutes([
        {
            path: "/",
            element: <HomePage />
        }
    ])

  return element
}

export default AllRoutes
