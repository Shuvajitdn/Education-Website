import React from "react"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>
            <h1>ACADEMIA</h1>
            <span>ONLINE EDUCATION & LEARNING</span>
          </div>

          <div className='social'>
          <a href="https://www.linkedin.com/in/shuvajit-debnath/" className='fab fa-linkedin icon' target="_blank"></a>
          <a href="https://github.com/Shuvajitdn" className='fab fa-github icon' target="_blank"></a>
            <a href="https://www.facebook.com/shuvajit.debnath.713?mibextid=ZbWKwL" className='fab fa-facebook-f icon' target="_blank"></a>
            <a href="https://www.instagram.com/shuvajit_debnath_/" className='fab fa-instagram icon' target="_blank"></a>
            <a href="https://x.com/Shuvajitdn" className='fab fa-twitter icon' target="_blank"></a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
