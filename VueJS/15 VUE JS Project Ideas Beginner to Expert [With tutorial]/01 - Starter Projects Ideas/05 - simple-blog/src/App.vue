<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "App",
  
};
</script>

<style>
body {
  font-family: "Lato", sans-serif;
  margin: 0;
}
.container {
  padding: 0 30px;
  max-width: 1024px;
  margin: auto;

  display: flex;
  flex-wrap: wrap;
}
.text-center {
  text-align: center;
}

</style>
