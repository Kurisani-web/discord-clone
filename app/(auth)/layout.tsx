import React from 'react'

const AuthLayout = ({ children} : { children: React.ReactNode}) => {
  return (
    <div className="bg-blue-500 h-screen">{
        children
    }</div>
  )
}

export default AuthLayout