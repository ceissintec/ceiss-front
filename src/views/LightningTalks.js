import React, { Component } from 'react';
import { handleValidation, isObjEmpty } from '../utils/HandleFormValidation';
import { NotificationWrapper, ButtonWrapper } from '../styles/StyledComponents';
import posed from 'react-pose';
import styled from 'styled-components';
import CeissAPI from '../api/CeissApi';
import * as Sentry from '@sentry/browser';
// Animated Components
const Button = posed.div({
  off: {
    opacity: 0.5,
    scale: 1,
  },
  on: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 500,
      delay: 100,
    },
  },
});

const Label = styled.div`
  font-family: 'Poppins';
  font-size: 2em;
  color: white;
  margin: 1em 1em 0 0.5em;
`;

export default class LightningTalks extends Component {
  state = {
    fields: {
      name: '',
      lastname: '',
      title: '',
      topic: '',
      email: '',
    },
    errors: null,
    hovered: false,
  };
  //renderErrorList takes the error object, and returns many divs with each error inlined.
  renderErrorList(errors) {
    return Object.entries(errors).map(([key, value]) => (
      <li key={key} className="lightning-error">
        {value}
      </li>
    ));
  }
  //renderErrors renders the whole list of errors.
  renderErrors() {
    let { errors } = this.state;
    const errorObjectIsEmpty = isObjEmpty(errors);
    if (!errors || errorObjectIsEmpty) {
      return null;
    }

    const errorList = this.renderErrorList(errors);
    return (
      <div className="lightning-notification notification is-danger animated bounce">
        <h5>Tienes varios errores:</h5>
        <ul>{errorList}</ul>
      </div>
    );
  }

  // handleChange takes the event target name and value, assigns them to the corresponding state property, and sets the new state.
  handleChange = e => {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({ fields });
  };

  handleSubmit = async e => {
    e.preventDefault();
    //ES6 Destructuring!
    const [errors, isFormOk] = handleValidation(this.state);
    this.setState({ errors });
    if (isFormOk) {
      //Make API call to the CEISS Backend
      try {
        console.log('API Call on state:', this.state);
        const response = await CeissAPI.post(
          'https://bitter-falcon-100.localtunnel.me/api/lightingtalks/submission/',
          {
            params: { query: this.state.fields },
          }
        );
        console.log(response);
      } catch (err) {
        if (process.env.NODE_ENV !== 'production') {
          return;
        }
        Sentry.captureException(err);
      }
    }
  };

  render() {
    return (
      <div className="ceiss-lightning">
        <div className="columns is-centered">
          <form onSubmit={this.handleSubmit} className="lightning-form">
            <div className="column">
              <div className="field">
                <div className="control">
                  <label className="input-label label">
                    <Label>Name</Label>
                  </label>
                  <input
                    className="input"
                    type="text"
                    name="name"
                    placeholder="Juan"
                    onChange={this.handleChange}
                    value={this.state.name}
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <label className="input-label label">
                    <Label>Last Name</Label>
                  </label>
                  <input
                    className="input"
                    type="text"
                    name="lastName"
                    placeholder="Perez"
                    onChange={this.handleChange}
                    value={this.state.lastName}
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <label className="input-label label">
                    <Label>Titulo de tu Lightning Talk</Label>
                  </label>
                  <input
                    className="input"
                    type="text"
                    name="title"
                    placeholder="PlatanoJS - The Good Stuff"
                    onChange={this.handleChange}
                    value={this.state.title}
                  />
                </div>
              </div>
              <div className="field">
                <label className="input-label label">
                  <Label>De que se trata tu Lightning Talk?</Label>
                </label>
                <input
                  className="input"
                  name="topic"
                  placeholder="Como asar un platano maduro con JS."
                  onChange={this.handleChange}
                  value={this.state.topic}
                />
              </div>
              <div className="control">
                <label className="input-label label">
                  <Label>Email</Label>
                </label>
                <input
                  className="input"
                  type="text"
                  name="email"
                  placeholder="juanPerez@gmail.com"
                  onChange={this.handleChange}
                  value={this.state.email}
                />
              </div>
              <ButtonWrapper>
                <Button
                  className="is-centered"
                  onMouseEnter={() => this.setState({ hovered: true })}
                  onMouseLeave={() => this.setState({ hovered: false })}
                  pose={this.state.hovered ? 'on' : 'off'}>
                  Quiero ser Speaker!
                </Button>
              </ButtonWrapper>
              <NotificationWrapper>{this.renderErrors()}</NotificationWrapper>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
