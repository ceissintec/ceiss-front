import React, { Component } from 'react';

export default class LightningTalks extends Component {
  state = {
    fields: {},
    errors: null,
  };

  handleValidation() {
    let { fields } = this.state;
    let formIsValid = true;
    let errors = {};
    //Name validation
    if (!fields['name']) {
      formIsValid = false;
      errors['name'] = 'Cannot be empty';
    }

    if (typeof fields['name'] !== 'undefined') {
      if (!fields['name'].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors['name'] = 'Only letters!';
      }
    }
    //lastName validation
    if (!fields['lastName']) {
      formIsValid = false;
      errors['lastName'] = 'Cannot be empty';
    }

    if (typeof fields['lastName'] !== 'undefined') {
      if (!fields['lastName'].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors['lastName'] = 'Only letters!';
      }
    }
    //Email
    if (!fields['email']) {
      formIsValid = false;
      errors['email'] = 'Cannot be empty';
    }

    if (typeof fields['email'] !== 'undefined') {
      let lastAtPos = fields['email'].lastIndexOf('@');
      let lastDotPos = fields['email'].lastIndexOf('.');

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          fields['email'].indexOf('@@') === -1 &&
          lastDotPos > 2 &&
          fields['email'].length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors['email'] = 'Email is not valid';
      }
    }

    this.setState({ errors });
    return formIsValid;
  }

  renderErrors() {
    let { errors } = this.state;
    let errorObjectIsEmpty = true;
    for (var prop in errors) {
      if (errors.hasOwnProperty(prop)) errorObjectIsEmpty = false;
    }
    if (!errors || errorObjectIsEmpty) return null;
    //TODO: map over all errors and get JSX element
    return (
      <div className="notification is-danger">
        <div>Check your form please.</div>
      </div>
    );
  }

  // handleChange takes the event target name and value, assigns them to the corresponding state property, and sets the new state.
  handleChange = e => {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({ fields });
  };

  handleSubmit = e => {
    e.preventDefault();
    const isFormOk = this.handleValidation();
    if (isFormOk) {
      //TODO: Hacer API Call
    }
  };

  render() {
    return (
      <div className="container is-fluid is-centered">
        <div className="level">
          <div className="level-item">
            <div className="columns">
              <form onSubmit={this.handleSubmit} className="lightning-form">
                <div className="column">
                  <div>
                    <label className="input-label label is-size-3">
                      Name
                      <input
                        className="input"
                        type="text"
                        name="name"
                        placeholder="John"
                        onChange={this.handleChange}
                        value={this.state.name}
                      />
                    </label>
                  </div>
                  <div>
                    <label className="input-label label is-size-3">
                      Last Name
                      <input
                        className="input"
                        type="text"
                        name="lastName"
                        placeholder="Doe"
                        onChange={this.handleChange}
                        value={this.state.lastName}
                      />
                    </label>
                  </div>
                  <div>
                    <label className="input-label label is-size-3">
                      De que es tu Lightning Talk?
                      <input
                        className="input"
                        type="text"
                        name="topic"
                        placeholder="PlatanoJS"
                        onChange={this.handleChange}
                        value={this.state.topic}
                      />
                    </label>
                  </div>
                  <div>
                    <label className="input-label label is-size-3">
                      Email
                      <input
                        className="input"
                        type="text"
                        name="email"
                        placeholder="timApple@gmail.com"
                        onChange={this.handleChange}
                        value={this.state.email}
                      />
                    </label>
                  </div>
                  <input
                    type="submit"
                    value="Submit"
                    className="is-success is-rounded button"
                  />
                  {this.renderErrors()}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
