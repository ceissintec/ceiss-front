import React, { Component } from 'react';
import posed from 'react-pose';
import * as Sentry from '@sentry/browser';

import CeissAPI from '../api/CeissApi';
import axios from 'axios';
import { handleLightningValidation } from '../utils/Validate';

import {
  NotificationWrapper,
  ButtonWrapper,
  Label,
} from '../styles/StyledComponents';

import ErrorNotification from '../components/ErrorNotification';

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

export default class LightningTalks extends Component {
  state = {
    fields: {
      first_name: '',
      last_name: '',
      title: '',
      description: '',
      email: '',
    },
    errors: null,
    hovered: false,
  };

  // handleChange takes the event target name and value, assigns them
  //to the corresponding state property, and sets the new state.
  handleChange = e => {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({ fields });
  };

  handleSubmit = async e => {
    e.preventDefault();
    //ES6 Destructuring!
    const [errors, isFormOk] = handleLightningValidation(this.state);
    this.setState({ errors });
    if (isFormOk) {
      //Make API call to the CEISS Backend
      try {
        const response = await fetch(
          'http://104.248.1.88:8000/api/lightingtalks/submission/',
          {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, cors, *same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json',
              // "Content-Type": "application/x-www-form-urlencoded",
            },
            redirect: 'follow', // manual, *follow, error
            referrer: 'no-referrer', // no-referrer, *client
            body: JSON.stringify(this.state.fields), // body data type must match "Content-Type" header
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
                  <Label>Name</Label>
                  <input
                    className="input"
                    type="text"
                    name="first_name"
                    placeholder="Juan"
                    onChange={this.handleChange}
                    value={this.state.name}
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <Label>Last Name</Label>
                  <input
                    className="input"
                    type="text"
                    name="last_name"
                    placeholder="Perez"
                    onChange={this.handleChange}
                    value={this.state.lastName}
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <Label>Titulo de tu Lightning Talk</Label>
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
                <Label>De que se trata tu Lightning Talk?</Label>
                <input
                  className="input"
                  name="description"
                  placeholder="Como asar un platano maduro con JS."
                  onChange={this.handleChange}
                  value={this.state.topic}
                />
              </div>
              <div className="control">
                <Label>Email</Label>
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
              <NotificationWrapper>
                <ErrorNotification errors={this.state.errors} />
              </NotificationWrapper>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
