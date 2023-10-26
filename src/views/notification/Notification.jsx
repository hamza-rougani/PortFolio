import React from 'react'

function Notification(e) {
  return (
    <div className={e.field.status?"notification true":"notification false"}>
        {e.field.status? <div id="icons"><img src={`${import.meta.env.VITE_API_BASE_URL}/images/v.png`} alt="" /></div>: <div id="icons"><img src={`${import.meta.env.VITE_API_BASE_URL}/images/bouton-supprimer.png`} alt="" /></div>}
        <span>{e.field.message}</span>
      </div>
  )
}

export default Notification
