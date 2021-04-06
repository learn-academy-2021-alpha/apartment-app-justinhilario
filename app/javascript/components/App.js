import React from "react"
import PropTypes from "prop-types"
import ApartmentIndex from './pages/ApartmentIndex.js'
import ApartmentShow from './pages/ApartmentIndex.js'
import mockApartments from './MockApartments.js'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      apartments: mockApartments
    }
  }

  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    return (
      <Router>
        <React.Fragment>
           { logged_in &&
             <div>
               <a href={sign_out_route }>Sign Out</a>
             </div>
           }
           { !logged_in &&
             <div>
              <a href={ sign_in_route }>Sign In</a>
            </div>
            }
        </React.Fragment>
      </Router>
      
    )
  }
}


export default App
