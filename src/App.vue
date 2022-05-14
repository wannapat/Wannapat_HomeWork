<template>
  <div id="app">
    <router-link to="{ path: '/' }"></router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  margin: 50px;
  text-align: center;
}
.link {
  display: inline-block;
  padding: 30px;
  text-decoration: none;
  color: inherit;
}
.router-link-exact-active {
  color: blue;
}
</style>
