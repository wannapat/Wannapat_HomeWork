<template>
  <div id="app">
    <router-link class="link" :to="{ path: '/' }">Home</router-link>
    <router-link class="link" :to="{ path: '/contact' }">Contact</router-link>
    <router-view />
    <h1 style="text-align: center">{{ detail }}</h1>

    <h1></h1>
    <img width="15%" style="img" src="../assets/getstudentimage.jpg" />
    <p class="text-justify" style="margin: left">{{ name }}</p>
    <p class="text-justify">{{ age }}</p>
    <p class="text-justify">{{ education }}</p>
    <p class="text-justify">{{ skill }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      detail: "My Profile",
      name: "Name: Wannapat Sihachan",
      age: "Age: 21 years old",
      education:
        " Education: Thai-Nichi Institute of Technology - Computer Engineering ",
      skill: "Skill: C++,C,Python,SQL",
      styleObject: {
        fontSize: "18px",
      },
    };
  },
};
</script>