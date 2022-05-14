<template>
  <div id="app">
    <router-link class="link" :to="{ path: '/' }">Home</router-link>
    <router-link class="link" :to="{ path: '/portfolio' }"
      >Portfolio</router-link
    >
    <router-view />
    <h1>{{ contact }}</h1>
    <h2></h2>
    <img :src="contactpic" />
    <h4>{{ phone }}</h4>
    <h4>{{ email }}</h4>
  </div>
</template>

<script>
import contactpic from "../assets/contact.png";
export default {
  data() {
    return {
      contactpic: contactpic,
      contact: "My Contact",
      phone: "Phone: 098-586-0820",
      email: "Email: si.wannapat_st@tni.ac.th",
    };
  },
};
</script>