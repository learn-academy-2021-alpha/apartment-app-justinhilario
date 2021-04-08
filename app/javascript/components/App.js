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
import Header from './components/Header'
import ApartmentNew from './pages/ApartmentNew'
import ApartmentUpdate from './pages/ApartmentUpdate'
import ManageProperties from './pages/ManageProperties'



// setting state to be the mock apartments we created
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      apartments: mockApartments
    }
  }

  createNewApartment = (apartment) => {
        console.log(apartment)
  }

  updateApartment = (apartment, id) => {
    console.log(apartment, id)
  }

  deleteProperty = (id) => {
    console.log(id)
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
    console.log("logged_in:", logged_in)
    console.log("current user:", current_user)
    return (
      <Router>
        <Header 
          logged_in={ logged_in }
          sign_in_route={ sign_in_route }
          sign_out_route={ sign_out_route }
        />
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
           { logged_in &&
            <Route
              path="/manageproperties"
              render={ (props) => {
                let myProperties = this.state.apartments.filter(
                  apartment => apartment.user_id === current_user.id )
                return (
                  <ManageProperties
                    myProperties={ myProperties }
                    deleteProperty={ this.deleteProperty }
                  />
                )
              }}
            />
          }
          { logged_in && 
              <Route
              path="/apartmentnew"
              render={ (props) =>
                <ApartmentNew
                  createNewApartment={ this.createNewApartment }
                />
              }
            />  
          }
          { logged_in && 
              <Route
                path="/apartmentupdate/:id"
                render={ (props) => {
                  let id = parseInt(props.match.params.id)
                  let updateApt = this.state.apartments.find( 
                    updateApt => updateApt.id === id)
                  return(
                    <ApartmentUpdate
                      updateApartment={ this.updateApartment }
                      apartment = { updateApt }
                    />
                  )
                }}
              />  
          }
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
