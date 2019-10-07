import React, { useState } from 'react';
import * as Sentry from '@sentry/browser';
// Form validation
import { handleLightningValidation } from '../utils/Validate';

// Components
import ErrorNotification from '../components/ErrorNotification';

// Styled Components
import NotificationWrapper from '../styles/components/NotificationWrapper';
import ButtonWrapper from '../styles/components/ButtonWrapper';
import Label from '../styles/components/Label';

export default function LightningTalks() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});

  function getFieldValues() {
    const fields = {
      fields: {
        first_name: firstName,
        last_name: lastName,
        title,
        description,
        email,
      },
    };
    return fields;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const fields = getFieldValues();
    const [formErrors, isFormOk] = handleLightningValidation(fields);
    setErrors(formErrors);
    if (isFormOk) {
      // Make API call to the CEISS Backend
      try {
        const response = await fetch(
          'http://104.248.1.88:8000/api/lightingtalks/submission/',
          {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
              'Content-Type': 'application/json',
            },
            redirect: 'follow',
            referrer: 'no-referrer',
            body: JSON.stringify(fields),
          },
        );
        console.log(response);
      } catch (err) {
        if (process.env.NODE_ENV !== 'production') {
          return;
        }
        Sentry.captureException(err);
      }
    } else {
      console.log(errors);
    }
  }

  return (
    <div className="ceiss-lightning">
      <div className="columns is-centered">
        <form onSubmit={handleSubmit} className="lightning-form">
          <div className="column">
            <div className="field">
              <div className="control">
                <Label>Name</Label>
                <input
                  className="input"
                  type="text"
                  name="first_name"
                  placeholder="Juan"
                  onChange={e => setFirstName(e.target.value)}
                  value={firstName}
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
                  onChange={e => setLastName(e.target.value)}
                  value={lastName}
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
                  onChange={e => setTitle(e.target.value)}
                  value={title}
                />
              </div>
            </div>
            <div className="field">
              <Label>De que se trata tu Lightning Talk?</Label>
              <input
                className="input"
                name="description"
                placeholder="Como asar un platano maduro con JS."
                onChange={e => setDescription(e.target.value)}
                value={description}
              />
            </div>
            <div className="control">
              <Label>Email</Label>
              <input
                className="input"
                type="text"
                name="email"
                placeholder="juanPerez@gmail.com"
                onChange={e => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <ButtonWrapper>Quiero ser Speaker!</ButtonWrapper>
            <NotificationWrapper>
              <ErrorNotification errors={errors} />
            </NotificationWrapper>
          </div>
        </form>
      </div>
    </div>
  );
}
