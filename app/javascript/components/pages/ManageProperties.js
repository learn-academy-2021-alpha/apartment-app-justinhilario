import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Card,CardBody, CardTitle, CardSubtitle, CardText, CardLink, Row, Col, Container} from 'reactstrap'

class ManageProperties extends Component {
    render () {
        return (
            <>
                <h2> My Property Management </h2>
                <Container fluid>
                    <Row xs="2">
                        { this.props.myProperties.map((apartment) => {
                            return (
                            <Col md="4">
                                <Card key= { apartment.id }>
                                    <CardBody>
                                    <CardTitle tag="h5">{ apartment.name} </CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">{ apartment.bedrooms } Bed {apartment.bathrooms } Bath</CardSubtitle>
                                    </CardBody>
                                    <img width="100%" src= {apartment.image} alt="home hero image" />
                                    <CardBody>
                                        <CardText> 
                                            { apartment.street }, { apartment.city }, {apartment.state }
                                            <br></br>
                                            {apartment.sqft} Square Feet
                                            <br></br>
                                            ${apartment.listprice}
                                            </CardText>
                                        <NavLink to={ `/apartmentshow/${apartment.id}` }>View Property</NavLink>
                                        <NavLink to={ `/apartmentupdate/${apartment.id}` }>Edit Property</NavLink>
                                        <Navlink to="/manageproperties">
                                            <Button onClick={ () => this.props.deleteApartment(apartment.id) }>
                                            Remove Listing
                                            </Button>
                                        </Navlink>
                                    </CardBody>
                                </Card>
                            </Col>
                            )   
                        })}
                    </Row>
                </Container>
            </>
        )
    }
}

export default ManageProperties