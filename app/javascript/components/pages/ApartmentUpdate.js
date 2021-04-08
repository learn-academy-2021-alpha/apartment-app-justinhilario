import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class ApartmentUpdate extends Component{
    constructor(props){
        super(props)
        this.state = {
            form: {
                street: this.props.apartment.street,
                city: this.props.apartment.city,
                state: this.props.apartment.state,
                manager: this.props.apartment.manager,
                email: this.props.apartment.email,
                price: this.props.apartment.price,
                bedrooms: this.props.apartment.bedrooms,
                bathrooms: this.props.apartment.bathrooms,
                image: this.props.apartment.image,
                name: this.props.apartment.name,
                sqft: this.props.apartment.sqft,
                listprice:this.props.apartment.listprice,
                hoa:this.props.apartment.hoa,
                zip:this.props.apartment.zip
            },
            success: false
        }
    }
    handleChange = (e) => {
        let { form } = this.state
        form[e.target.name] = e.target.value
        this.setState({ form: form })
      }
    handleSubmit = () => {
        this.props.updateApartment(this.state.form, this.props.apartment.id)
        this.setState({ submitted: true })
      }
      render(){
        return(
          <>
            <h3>Manage your listing</h3>
            <div className="form-container">
              <div className="form">
                <Form>
                  <FormGroup>
                    <Label>Street</Label>
                    <Input
                      type="text"
                      name="street"
                      onChange={ this.handleChange }
                      value={ this.state.form.street }
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>City</Label>
                    <Input
                      type="text"
                      name="city"
                      onChange={ this.handleChange }
                      value={ this.state.form.city }
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>State</Label>
                    <Input
                      type="text"
                      name="state"
                      onChange={ this.handleChange }
                      value={ this.state.form.state }
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>ZIP</Label>
                    <Input
                      type="number"
                      name="zip"
                      onChange={ this.handleChange }
                      value={ this.state.form.zip }
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Bedrooms</Label>
                    <Input
                      type="number"
                      name="bedrooms"
                      onChange={ this.handleChange }
                      value={ this.state.form.bedrooms }
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Bathrooms</Label>
                    <Input
                      type="number"
                      name="bathrooms"
                      onChange={ this.handleChange }
                      value={ this.state.form.bathrooms }
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Square Feet</Label>
                    <Input
                      type="number"
                      name="sqft"
                      onChange={ this.handleChange }
                      value={ this.state.form.sqft}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>List Price</Label>
                    <Input
                      type="number"
                      name="listprice"
                      onChange={ this.handleChange }
                      value={ this.state.form.listprice }
                    />
                 </FormGroup>
                 <FormGroup>
                    <Label>Estimated Monthly Payment</Label>
                    <Input
                      type="number"
                      name="price"
                      onChange={ this.handleChange }
                      value={ this.state.form.price }
                    />
                 </FormGroup>
                 <FormGroup>
                    <Label>HOA</Label>
                    <Input
                      type="number"
                      name="hoa"
                      onChange={ this.handleChange }
                      value={ this.state.form.hoa}
                    />
                 </FormGroup>
                 <FormGroup>
                    <Label>Realtor</Label>
                    <Input
                      type="text"
                      name="manager"
                      onChange={ this.handleChange }
                      value={ this.state.form.manager }
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Realtor Email</Label>
                    <Input
                      type="text"
                      name="email"
                      onChange={ this.handleChange }
                      value={ this.state.form.email }
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Nickname</Label>
                    <Input
                      type="text"
                      name="name"
                      onChange={ this.handleChange }
                      value={ this.state.form.name }
                    />
                 </FormGroup>
                  <FormGroup>
                    <Label>Image URL</Label>
                    <Input
                      type="text"
                      name="image"
                      onChange={ this.handleChange }
                      value={ this.state.form.image}
                    />
                  </FormGroup>               
                  <Button
                    name="submit"
                    color="secondary"
                    onClick={ this.handleSubmit }
                  >
                  Update your listing
                  </Button>
                </Form>
              </div>
            </div>
            { this.state.success && <Redirect to="/apartmentindex" /> }
          </>
        )
    }
}

export default ApartmentUpdate