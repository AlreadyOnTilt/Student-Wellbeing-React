import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import IPhone144 from './views/i-phone144'
import IPhone142 from './views/i-phone142'
import IPhone141 from './views/i-phone141'
import IPhone143 from './views/i-phone143'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={IPhone144} exact path="/i-phone144" />
        <Route component={IPhone142} exact path="/i-phone142" />
        <Route component={IPhone141} exact path="/" />
        <Route component={IPhone143} exact path="/i-phone143" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
