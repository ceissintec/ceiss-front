//Checks if an object is empty
export const isObjEmpty = obj => {
  let objEmpty = true;
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) objEmpty = false;
  }
  return objEmpty;
};

//Handles lightning form validation
export const handleValidation = state => {
  let { fields } = state;
  let formIsValid = true;
  let errors = {};
  //Name validation
  if (!fields['name']) {
    formIsValid = false;
    errors['name'] = 'Your name cannot be empty!';
  }

  if (typeof fields['name'] !== 'undefined') {
    if (!fields['name'].match(/^[a-zA-Z]+$/)) {
      formIsValid = false;
      errors['name'] = 'Only letters on your first name!';
    }
  }
  //lastName validation
  if (!fields['lastName']) {
    formIsValid = false;
    errors['lastName'] = 'Your last name cannot be empty!';
  }

  if (typeof fields['lastName'] !== 'undefined') {
    if (!fields['lastName'].match(/^[a-zA-Z]+$/)) {
      formIsValid = false;
      errors['lastName'] = 'Only letters on your last name!';
    }
  }
  //title validation
  if (!fields['title']) {
    formIsValid = false;
    errors['title'] = 'The title cannot be empty!';
  }
  //topic validation
  if (!fields['topic']) {
    formIsValid = false;
    errors['toic'] = 'The topic cannot be empty!';
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
