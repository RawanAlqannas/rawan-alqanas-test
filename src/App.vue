<template>
  <div id="app">
    <login-page />
    <second-page />
    <reports-page />
    <pop-page />
  </div>
</template>

<script>
import LoginPage from './components/LoginPage.vue';
import SecondPage from './components/SecondPage.vue';
import ReportsPage from './components/ReportsPage.vue';
import PopPage from './components/PopPage.vue';

export default {
  name: 'App',
  components: {
    LoginPage,
    SecondPage,
    ReportsPage,
    PopPage
  },
};
</script>



