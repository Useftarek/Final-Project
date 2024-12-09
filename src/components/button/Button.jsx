import React from 'react'

export default function Button({title, goToShop}) {
  return (
    <button className='button'>
        <div className="button_text" onClick={goToShop}>{title}</div>
    </button>
  )
}
