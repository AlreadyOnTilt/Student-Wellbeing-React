import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './i-phone141.css'

const IPhone141 = (props) => {
  return (
    <div className="-phone141-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="-phone141-i-phone141">
        <img
          alt="Rectangle117"
          src="/playground_assets/rectangle117-dn1-900h.png"
          className="-phone141-rectangle1"
        />
        <img
          alt="Ellipse119"
          src="/playground_assets/ellipse119-kiss-400w.png"
          className="-phone141-ellipse1"
        />
        <span className="-phone141-text">
          <span>Student Wellbeing</span>
        </span>
        <Link to="/i-phone143" className="-phone141-button button">
          Book A Meeting
        </Link>
      </div>
      <Link to="/i-phone142" className="-phone141-navlink button">
        View Your Progress
      </Link>
      <Link to="/i-phone144" className="-phone141-navlink1 button">
        Mental Health Advice
      </Link>
    </div>
  )
}

export default IPhone141
