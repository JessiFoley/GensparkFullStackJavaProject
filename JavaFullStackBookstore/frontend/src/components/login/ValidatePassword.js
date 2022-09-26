const validPassword = (() => {

    const passwordForValidation = document.getElementById("password").value
    const repeatPasswordForValidation = document.getElementById("repeatPassword").value

    const hasLowercase = /[a-z]+/.test(passwordForValidation)
    const hasUppercase = /[A-Z]+/.test(passwordForValidation)
    const hasDigit = /[0-9]+/.test(passwordForValidation)

    const errLabel = document.getElementById("errLabel")
    errLabel.style = "display:hidden;"
    errLabel.textContent = ""
    
    if(passwordForValidation === repeatPasswordForValidation && hasLowercase && hasUppercase && hasDigit){
      return true;
    }else if (passwordForValidation !== repeatPasswordForValidation) {
      errLabel.style = "display:inline; color:red; font-weight:normal;"
      errLabel.textContent = "Passwords must match!"
    }else if (!hasLowercase){
      errLabel.style = "display:inline; color:red; font-weight:normal;"
      errLabel.textContent = "Must contain a lowercase letter!"
    }else if (!hasUppercase){
      errLabel.style = "display:inline; color:red; font-weight:normal;"
      errLabel.textContent = "Must contain an uppercase letter!"
    }else {
      errLabel.style = "display:inline; color:red; font-weight:normal;"
      errLabel.textContent = "Must contain a number!"
    }
    return false;
  })
  export default validPassword