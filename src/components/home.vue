<template>
  <div id="app">
    <h1>{{ Title }}</h1>
    <img style="img" src="../assets/f_img.jpg" />
    <h3>{{ click }}</h3>
    <router-link to="/portfolio"><img :src="Profile" /></router-link>
    <router-link to="/contact"><img :src="contact" /></router-link>
    <router-view />
  </div>
</template>

<script>
import Profile from "../assets/Profile.png";
import contact from "../assets/contact.png";

export default {
  data() {
    return {
      Title: "My Portfolio",
      click: "Click icon to go!!!",
      Profile: Profile,
      contact: contact,
    };
  },
};
</script>

<style scoped>
</style>