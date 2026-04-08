import React from 'react'

type Props = React.HTMLAttributes<HTMLDivElement>

// Small wrapper component ensuring dir="auto" for mixed-direction text blocks
const DirText: React.FC<Props> = ({ children, className = '', ...rest }) => {
  return (
    <div dir="auto" className={className} {...rest}>
      {children}
    </div>
  )
}

export default DirText
