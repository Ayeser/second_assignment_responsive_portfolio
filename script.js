document.addEventListener("DOMContentLoaded", function() {
    fields.firstName = document.getElementById('firstName');
    fields.lastName = document.getElementById('lastName');
    fields.email = document.getElementById('inputEmail');
    fields.message = document.getElementById('messageMatt');
   })

   function isNotEmpty(value) {
    if (value == null || typeof value == 'undefined' ) return false;
    return (value.length > 0);
   }

   function isNumber(num) {
    return (num.length > 0) && !isNaN(num);
   }

   function isEmail(email) {
       let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:
        [a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}
            [a-zA-Z0-9])?)*$/;
        return regex.test(String(email).toLowerCase());
   }

   function fieldValidation(field, validationFunction) {
    if (field == null) return false;
   
    let isFieldValid = validationFunction(field.value)
    if (!isFieldValid) {
    field.className = 'placeholderRed';
    } else {
    field.className = '';
    }
   
    return isFieldValid;
   }

   function isValid() {
    var valid = true;
    
    valid &= fieldValidation(fields.firstName, isNotEmpty);
    valid &= fieldValidation(fields.lastName, isNotEmpty);
    valid &= fieldValidation(fields.email, isEmail);
    valid &= fieldValidation(fields.message, isNotEmpty);
  
    return valid;
   }

   class User {
    constructor(firstName, lastName, gender, address, country, email, newsletter, question) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.message = message;
    }
   }

  function sendContact() {
      if (isValid()) {
          let usr = new User(firstName.value, lastName.value, email.value);

          alert('&{usr.firstName} thanks for submitting.')

      } else {
          alert("There was an error")
      }
  }
