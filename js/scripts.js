function onSignUp(event) {
    event.preventDefault();
    const name = document.querySelector('input[name="name"]');
    const email = document.querySelector('input[name="email"]');
    const password = document.querySelector('input[name="password"]');
    const address = document.querySelector('textarea[name="address"]');
  
    const userObject = {
      name: name.value,
      email: email.value,
      password: password.value,
      address: address.value,
    };
  
    /**
     * Eg: jyothi@gmail.com
     * key: user_jyothi@gmail.com
     * value: userObject
     */
    localStorage.setItem("user_" + email.value, JSON.stringify(userObject));
  
    sessionStorage.setItem("user", JSON.stringify(userObject));
  
    window.location.href = "/index.html";
  }
  
  function onSignIn(event) {
    event.preventDefault();
  
    const email = document.querySelector('input[name="email"]');
    const password = document.querySelector('input[name="password"]');
  
    const userKey = "user_" + email.value;
  
    const userObjectStr = localStorage.getItem(userKey);
  
    if (userObjectStr) {
      const userObject = JSON.parse(userObjectStr);
      // check for matching password
      if (userObject.password === password.value) {
        /**
         * key: user
         * value: userObject
         */
        sessionStorage.setItem("user", JSON.stringify(userObject));
        // Send to home page
        window.location.href = "/index.html";
      } else {
        alert("Password invalid!");
      }
    } else {
      alert("User not found, please signup.");
    }
  }
  
  function doLogout(event) {
    event.preventDefault();
    sessionStorage.removeItem("user");
    window.location.href = "/signin.html";
  }