import React from 'react'

function noresult(e) {
  return (
    <div className='noresult'>
        <div className='contentRe'>
           <div className='img'><img src={`${import.meta.env.VITE_API_BASE_URL}/images/6195680.png`} alt="" /></div>
           <div className='res'>
            <b>Sorry, No results "{e.res}"</b>
           </div>
        </div>
    </div>
  )
}

export default noresult
