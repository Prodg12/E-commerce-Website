import React from 'react'

const StyledSection = ({children, className=""}) => {
  return (
    <div className={`px-32 py-10 w-full h-full ${className} xl:px-20 lg:px-16 md:px-12 sm:px-10 xs:px-8`}>
      {children}
    </div>
  )
}

export default StyledSection