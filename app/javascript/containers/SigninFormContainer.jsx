import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import Input from '../components/shared/Input'
import Button from '../components/shared/Button'
import SigninForm from '../components/shared/Form'


class Signin extends Component {
  render(){
    return(
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-8 offset-md-2">
          <h1 className="text-center form-header-style mt-5 pt-2 pb-3">Sign In</h1>
          <SigninForm onSubmit={this.handleSubmit}>
            <Input
              title="Email"
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              placeholder="Your email address"
              autoFocus={true}
              state={this.state}
            />
            <Input
              title="Password"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              placeholder="Your password"
              autoFocus={false}
              state={this.state}
            />
            <Button>Sign In</Button>
          </SigninForm>
          </div>
        </div>
      </div>
    )
  }
}

export default Signin
