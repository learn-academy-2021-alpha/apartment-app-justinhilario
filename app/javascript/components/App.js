import React from "react"
import PropTypes from "prop-types"
import ApartmentIndex from './pages/ApartmentIndex.js'
import ApartmentShow from './pages/ApartmentShow.js'
import mockApartments from './mockApartments.js'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Home from './pages/Home'

// setting state to be the mock apartments we created
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      apartments: mockApartments
    }
  }

  //Router wraps route funct
  //Switch manages what page displayed

  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    console.log(mockApartments)
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/apartmentindex" render={ () => <ApartmentIndex apartments={ this.state.apartments } /> } />
          <Route
            exact path="/apartmentshow/:id"
            render={ (props) => {
              let id = parseInt(props.match.params.id)
              let apt = this.state.apartments.find( 
                apt => apt.id === id)
              return (
                <ApartmentShow
                    apartment={ apt }
                />
              ) 
            }}
          />
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
        </Switch>
      </Router>
      
    )
  }
}


export default App
