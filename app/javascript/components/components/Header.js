import React, { Component } from 'react'
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  } from 'reactstrap';

class Header extends Component {
    render () {
        const {
            logged_in,
            current_user,
            new_user_route,
            sign_in_route,
            sign_out_route
          } = this.props
            return (
                <>
                    <Navbar color="light" light expand="md">
                        <NavbarBrand href="/">ZILLOW</NavbarBrand>
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <NavLink href="/apartmentindex">Buy</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/apartmentnew">Sell</NavLink>
                                </NavItem>
                                <NavItem className="ml-auto" navbar>
                                    <NavLink href="/manageproperties">Manage Properties</NavLink>
                                </NavItem>
                            </Nav>
                            { !logged_in &&
                                <NavItem>
                                    <a href={ sign_in_route }>Sign In</a>
                                </NavItem>
                            }
                            { logged_in &&
                                <NavItem>
                                    <a href={sign_out_route }>Sign Out</a>
                                </NavItem>
                            }
                    </Navbar>
                </>
            )
        }
}  

export default Header