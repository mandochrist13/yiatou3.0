import React from 'react'

export default function ButtonCta({children, variant, ...props}) {
  const baseClasses = "px-2 w-full h-12 text-white shadow font-medium rounded-md";
  const variantClasses = variant === 'green' ? 'bg-green-600 hover:bg-green-700' : 'bg-main-button hover:bg-main-button-hover';

  return (
    <button {...props} className={`${baseClasses} ${variantClasses} ${props.className || ''}`}>
      {children}
    </button>
  )
}
