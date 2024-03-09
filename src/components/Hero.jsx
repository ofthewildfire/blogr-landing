import React from 'react'

export const Hero = () => {
  return (
    <header className="main-header">
      <h1 className="header-title">A modern publishing platform</h1>
      <p className="header-sub">  Grow your audience and build your online brand</p>
      <div className="header--links">
        <ul className="links--container">
          <li className="links-item"><a href="#" className="links-anchor">Start for Free</a></li>
          <li className="links-item"><a href="#" className="links-anchor">Learn More</a></li>
        </ul>
      </div>
    </header>
  )
}
