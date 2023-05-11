import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './i-phone143.css'

const IPhone143 = (props) => {
  return (
    <div className="-phone143-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="-phone143-i-phone143">
        <img
          alt="Rectangle7524"
          src="/playground_assets/rectangle7524-igq5-900h.png"
          className="-phone143-rectangle7"
        />
        <div className="-phone143-input">
          <span className="-phone143-text">
            <span>Date and Time</span>
          </span>
          <input
            type="text"
            placeholder="E.g DD/MM     HH:MM"
            className="input -phone143-input1"
          />
        </div>
        <div className="-phone143-input2">
          <span className="-phone143-text2">
            <span>Personal Supervisor Name</span>
          </span>
          <input
            type="text"
            placeholder="E.g. John Doe"
            className="input -phone143-textinput"
          />
        </div>
        <div className="-phone143-input3">
          <span className="-phone143-text4">
            Brief Description of the subject..
          </span>
          <input
            type="text"
            placeholder="Type Description...."
            className="input -phone143-textinput1"
          />
          <button className="-phone143-button button">Submit</button>
        </div>
        <span className="-phone143-text5">
          <span>Booking a Meeting</span>
        </span>
      </div>
      <button className="-phone143-button1 button">Help</button>
      <Link to="/" className="-phone143-navlink button">
        Back
      </Link>
    </div>
  )
}

export default IPhone143
