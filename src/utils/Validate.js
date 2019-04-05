// Checks if an object is empty
export const isObjEmpty = obj => {
  let objEmpty = true;
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) objEmpty = false;
  }
  return objEmpty;
};

// Checks if a form has invalid text (anything that is not alphanumeric)
export function handleInvalidForm(name, errName) {
  let formIsValid = true;
  let errors = {};

  if (typeof name !== 'undefined') {
    if (!name.match(/^[a-zA-Z]+$/)) {
      formIsValid = false;
      errors[`${errName}`] = `Only letters on the ${errName}form!`;
    }
  }
  return [errors, formIsValid];
}

// Checks if a form is empty
export function handleEmptyForm(name, errName) {
  let formIsValid = true;
  let errors = {};
  if (`${name}`) {
    formIsValid = false;
    errors[`${errName}`] = `The form field ${errName} cannot be empty!`;
  }
  return [errors, formIsValid];
}

//Handles lightning form validation
export const handleLightningValidation = ({ fields }) => {
  let formIsValid = true;
  let errors = {};
  //Name validation
  if (!fields['first_name']) {
    formIsValid = false;
    errors['first_name'] = 'Your name cannot be empty!';
  }

  if (typeof fields['first_name'] !== 'undefined') {
    if (!fields['first_name'].match(/^[a-zA-Z]+$/)) {
      formIsValid = false;
      errors['first_name'] = 'Only letters on your first name!';
    }
  }
  //lastName validation
  if (!fields['last_name']) {
    formIsValid = false;
    errors['last_name'] = 'Your last name cannot be empty!';
  }

  if (typeof fields['last_name'] !== 'undefined') {
    if (!fields['last_name'].match(/^[a-zA-Z]+$/)) {
      formIsValid = false;
      errors['last_name'] = 'Only letters on your last name!';
    }
  }
  //title validation
  if (!fields['title']) {
    formIsValid = false;
    errors['title'] = 'The title cannot be empty!';
  }
  //topic validation
  if (!fields['description']) {
    formIsValid = false;
    errors['description'] = 'The topic cannot be empty!';
  }
  //Email
  if (!fields['email']) {
    formIsValid = false;
    errors['email'] = 'The email cannot be empty';
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
  return [errors, formIsValid];
};
