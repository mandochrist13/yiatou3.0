import React from 'react'
import TopBarLayout from '../../pages/layout/TopBarLayout'

export default function TopBarTitle({title}) {
  return (
    <TopBarLayout>
      <div className='w-full flex items-center  h-[40px] px-3'>
      <h2 className='text-lg font-medium'>{title}</h2>
      </div>
       
    </TopBarLayout>
  )
}
