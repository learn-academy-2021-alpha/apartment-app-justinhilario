import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Card,CardBody, CardTitle, CardSubtitle, CardText, Row, Col, Container} from 'reactstrap'


class ApartmentIndex extends Component {
    render () {
        return (
            <>
                <h2> Real Estate & Homes For Sale </h2>
                <Container fluid>
                    <Row xs="2">
                        { this.props.apartments.map((apartment) => {
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
                                            { apartment.street }, { apartment.city }, {apartment.state } { apartment.zip }
                                            <br></br>
                                            {apartment.sqft} Square Feet
                                            <br></br>
                                            ${apartment.listprice}
                                            </CardText>
                                        <NavLink to={ `/apartmentshow/${apartment.id}` }>More Info</NavLink>
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

export default ApartmentIndex