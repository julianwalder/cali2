import React from 'react'
import LogoFooter from './LogoFooter'
import './Footer.css'

export default () => (
  <div>
    <div style= {{backgroundColor: 'white', height: '6rem',}}></div>
    <footer className="footer">
      <div className="container taCenter footernew">
        <span>
           <LogoFooter/><br></br>
           <p style= {{fontSize: '2em', fontWeight: '400', lineHeight: '60%'}}>IZVOARELE</p>
           <p style= {{fontSize: '3em', fontWeight: '600', lineHeight: '60%'}}>CĂLIMANI</p>
           <p style= {{fontSize: '1.2rem', maxWidth: '400px', margin: 'auto'}}>
            Timp de 10 ani, apa își face anevoios loc printre straturile rocilor vulcanice, 
            care o mineralizează ușor, o filtrează și o purifică în mod natural. 
            O îmbuteliem la sursă și o aducem în mijlocul orașului, 
            pentru ca tu să te simți mereu la înălțime: acasă, la sală sau pe drum.</p>
        </span>
      </div>
      <div style={{
        width: '100%', 
        position: 'absolute', 
        bottom:'0', 
        color: '#d8c69d',}} className="taCenter">
      © {new Date().getFullYear()} Toate drepturile rezervate. {' '}
          <a href="https://aqua-bilbor.ro">Aqua Bilbor S.A.</a>
      </div>
    </footer>
  </div>
)
