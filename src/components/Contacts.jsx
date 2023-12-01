import React from 'react'

const Contacts = () => {
  return (
    <div id="contact">
        <h3>
            Posalji nam e-mail
        </h3>
        <div className="contact-input">
            <input type="email" placeholder="example@email.com" />
            <a href="#">Kontakt</a>
        </div>
    </div>
  )
}

export default Contacts