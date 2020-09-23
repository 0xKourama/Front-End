<template>
  <div id="app">
    <div id="nav">
      <h1>Math Quiz App</h1>
      <OperatorQuiz @on-back="clearOperator" v-if="operator" :operator="operator" />
      <OperatorSelector v-if="!operator" @change-operator="changeOperator"/>
    </div>
    <router-view />
  </div>
</template>

<script>  

import OperatorQuiz from './components/OperatorQuiz'
import OperatorSelector from './components/OperatorSelector.vue'

export default {
  name: "app",
  data() {
    return {
      operator: null
    }
  },
  methods: {
    changeOperator(operator) {
      this.operator = operator;
    },
    clearOperator() {
      this.operator = null;
    },
  },
  components: {
    OperatorSelector,
    OperatorQuiz
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
button {
  padding: 10px;
  width: 160px;
  height: 80px;
  margin-right: 10px;
  background-color: #10aed2;
  color: white;
  font-size: 24px;
  cursor: pointer;
  vertical-align: top;
  border: none;
}
</style>
