<template>
  <div class="LoginPage">
    <div class="left-section">
      <div class="logo-container">
        <img class="logo" src="../assets/git.png" alt="Gittax Logo"/>
        <p class="logo-text">Gittax</p>
      </div>
    </div>
    <div class="right-section">
      <h2>Login</h2>
      <form @submit.prevent="handleLogin" class="login-form">
        <p class="signup-message">
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
        <div class="form-group">
          <label for="email">Email address</label>
          <input
            type="email"
            id="email"
            v-model="email"
            required
          />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            required
          />
        </div>
        <p class="forgot-password">
          <a href="/forgot-password">Forgot Password?</a>
        </p>
        <button @click="navigateToSecondPage" class="login-button">Log in</button>
      </form>
      <div class="google-login-container">
        <button @click="handleGoogleLogin" class="google-login">
          <img class="google-img" src="../assets/google.png" alt="google" />
          Log in with Google
        </button>
      </div>
      <p class="back-home">
        ← <a href="/">Back to Home Page</a>
      </p>
    
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: '',
     
    };
  },
  methods: {
    navigateToSecondPage(){
      this.$router.push({ name:'SecondPage'});
    },
    handleLogin() {
      
      console.log('Email:', this.email);
      console.log('Password:', this.password);
    },
    handleGoogleLogin() {
      
      console.log('Login with Google');
    }
    
  }
};
</script>

<style scoped>
.LoginPage {
  display: flex;
  height: 100vh;
}

.left-section {
  flex: 1;
  background-color: #757472; 
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; 
}

.logo-container {
  text-align: center;
}

.logo {
  max-width: 20%;
  height: auto;
  display: block; 
  margin: 0 auto
}

.logo-text {
    margin-top: 0.5em; 
  color: white;
  font-size: 1.5em;
  font-family: Arial, Helvetica, sans-serif;
}

.right-section {
  flex: 1;
  background-color: white; 
  padding: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h2 {
  font-family: Arial, Helvetica, sans-serif;
  color:black;
}

.login-form {
  max-width: 300px;
  width: 100%;
}

.form-group {
  margin-bottom: 1em;
  font-family: Arial, Helvetica, sans-serif;
}

label {
  display: block;
  margin-bottom: 0.5em;
}

input {
  width: 100%;
  padding: 0.5em;
  box-sizing: border-box;
}

button {
  width: 100%;
  padding: 0.5em;
  margin-top: 1em;
  background-color: #d1be11; 
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #e9e07d; 
}

.google-login {
  width: 100%;
  padding: 0.5em;
  margin-top: 1em;
  background-color: #f8f5f5; 
  color: rgb(122, 121, 121);
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.google-login:hover {
  background-color: #b0b0b0; 
}

.signup-message a,
.forgot-password a,
.back-home a {
  color: #afb0b2;
  text-decoration: none;
}

.signup-message a:hover,
.forgot-password a:hover,
.back-home a:hover {
  text-decoration: underline;
}
</style>













 

    

     


  






 

 
 
















 

    

     