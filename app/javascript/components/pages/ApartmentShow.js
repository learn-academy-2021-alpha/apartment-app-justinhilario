import React, { Component } from 'react'
import { NavLink,
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption } from 'react-router-dom'

class ApartmentShow extends Component {

    render () {
        const apartment = this.props.apartment
        console.log(apartment)
        return (
            <>
                <h3>{ apartment.street }</h3>
            
              
            </>
        )
    }
}

export default ApartmentShow