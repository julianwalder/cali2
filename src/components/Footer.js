import React from 'react'
import './Footer.css'

export default () => (
  <div>
    <h2 className="taCenter">
      Follow us{' '}
      <a href="https://instagram.com/thrivegoldcoast/">@thrivegoldcoast</a>
    </h2>
    <br />
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © {new Date().getFullYear()} Toate drepturile rezervate. {' '}
          <a href="https://aqua-bilbor.ro">Aqua Bilbor S.A.</a>.
        </span>
      </div>
    </footer>
  </div>
)
