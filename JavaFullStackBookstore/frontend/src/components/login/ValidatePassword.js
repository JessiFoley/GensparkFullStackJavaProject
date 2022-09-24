const validPassword = (() => {

    const passwordForValidation = document.getElementById("password").value
    const repeatPasswordForValidation = document.getElementById("repeatPassword").value

    const hasLowercase = /[a-z]+/.test(passwordForValidation)
    const hasUppercase = /[A-Z]+/.test(passwordForValidation)
    const hasDigit = /[0-9]+/.test(passwordForValidation)
    
    if(passwordForValidation === repeatPasswordForValidation && hasLowercase && hasUppercase && hasDigit){
      return true;
    }else if (passwordForValidation !== repeatPasswordForValidation) {
      alert("Passwords must match")
    }else if (!hasLowercase){
      alert("Must contain a lowercase letter")
    }else if (!hasUppercase){
      alert("Must contain an Uppercase letter")
    }else {
      alert("Must contain a number")
    }
    return false;
  })
  export default validPassword