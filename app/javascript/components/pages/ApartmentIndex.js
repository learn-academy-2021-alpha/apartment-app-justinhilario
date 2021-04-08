import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Card,CardBody, CardTitle, CardSubtitle, CardText, CardLink, Row, Col, Container} from 'reactstrap'


class ApartmentIndex extends Component {
    render () {
        return (
            <>
                <h2> Homes for sale </h2>
                  { this.props.apartments.map((apartment) => {
                    console.log(apartment)
                    return (
                    <Container fluid>
                        <Row xs="2">
                            <Col md="4">
                                <Card key= { apartment.id }>
                                    <CardBody>
                                    <CardTitle tag="h5">{ apartment.name} </CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">{ apartment.bedrooms } Bed {apartment.bathrooms } Bath</CardSubtitle>
                                    </CardBody>
                                    <img width="100%" src= {apartment.image} alt="home hero image" />
                                    <CardBody>
                                        <CardText> 
                                            { apartment.address } 
                                            <br></br>
                                            {apartment.sqft} Square Feet
                                            <br></br>
                                            ${apartment.price} per Month
                                            </CardText>
                                        <NavLink to={ `/apartmentshow/${apartment.id}` }>More Info</NavLink>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                    )
                  })}
            </>
        )
    }
}

export default ApartmentIndex