import React from 'react'
import LogoFooter from './LogoFooter'
import './Footer.css'

export default () => (
  <div>
    <h2 className="taCenter fontmic">
      Urmărește-ne pe insta{' '}
      <a href="https://instagram.com/izvoarelecalimani/">@izvoarelecalimani</a>
    </h2>
    <br />
    <footer className="footer">
      <div className="container taCenter footernew">
        <span>
          <p>Aici putem scrie orice</p><br></br>
           <LogoFooter/><br></br>
           <h1>IZVOARELE CĂLIMANI</h1>
          © {new Date().getFullYear()} Toate drepturile rezervate. {' '}
          <a href="https://aqua-bilbor.ro">Aqua Bilbor S.A.</a>.
        </span>
      </div>
    </footer>
  </div>
)
