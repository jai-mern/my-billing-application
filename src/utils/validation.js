// validation.js

const validation = {
    validateEmail(email) {
      // Implement email validation logic here
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    },
  
    validatePassword(password) {
      // Implement password validation logic here
      return password.length >= 8;
    },
  
    // Add more validation functions as needed
  };
  
  export default validation;
  