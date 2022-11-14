import React from 'react'

export default function Modal({setShowModal}) {
  return (
    <div className='modal-background'>
        <div className='modal'>
        <h2>This is a modal</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum esse nisi, laboriosam illum temporibus ipsam?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quo.</p>
            <button className="button close-button" onClick={() => setShowModal(false)}>close modal</button>
        </div>
    </div>
  )
}
