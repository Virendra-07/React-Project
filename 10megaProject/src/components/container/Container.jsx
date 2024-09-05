import React from 'react'

export default function Container({children}) {
    // here pass a object as a children
  return (
    <div className='w-full max-w-7xl mx-auto px-4'>
      {children}</div>
  )
}
