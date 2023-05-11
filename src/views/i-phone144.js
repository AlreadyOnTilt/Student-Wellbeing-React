import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './i-phone144.css'

const IPhone144 = (props) => {
  return (
    <div className="-phone144-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="-phone144-i-phone144">
        <img
          alt="Rectangle6423"
          src="/playground_assets/rectangle6423-t0tv-900h.png"
          className="-phone144-rectangle6"
        />
        <span className="-phone144-text">
          <span>Mental Health Advice</span>
        </span>
        <img
          alt="Rectangle31300"
          src="/playground_assets/rectangle31300-cnp-300h.png"
          className="-phone144-rectangle3"
        />
        <span className="-phone144-text02">
          <span>
            If you are worried about your mental health there are a number of
            free organisations you can call/email that will help you.  If you
            think you are in serious trouble please call Samaritans on the
            number below or 999.
          </span>
        </span>
        <span className="-phone144-text04">
          <span>Student Advice Email: studentadvice@hull.ac.uk</span>
        </span>
        <span className="-phone144-text06">
          <span>
            <span>Samaritans Phone number:</span>
            <br></br>
            <span>00000000000</span>
          </span>
        </span>
        <button className="-phone144-button button">Help</button>
        <Link to="/" className="-phone144-navlink button">
          Back
        </Link>
      </div>
      <a
        href="https://www.samaritans.org/"
        target="_blank"
        rel="noreferrer noopener"
        className="-phone144-link button"
      >
        Samaritans Website
      </a>
      <img
        alt="image"
        src="https://images.unsplash.com/photo-1558021211-6d1403321394?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE3fHxTdHVkZW50fGVufDB8fHx8MTY4Mzc4MzEyNXww&amp;ixlib=rb-4.0.3&amp;h=500"
        className="-phone144-image"
      />
    </div>
  )
}

export default IPhone144
