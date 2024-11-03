import React from 'react'

export default function Button({title}) {
  return (
    <button className='button'>
        <div className="button_text">{title}</div>
    </button>
  )
}
