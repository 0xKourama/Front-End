<template>
  <div>
      <button @click="$emit('change-operator','+')">
        Addition 
        <br>
        +
      </button>
      <button @click="$emit('change-operator','-')">
        Substraction
        <br>
        -
      </button>
      <button @click="$emit('change-operator','/')">
        Division
        <br> 
        /
      </button>
      <button @click="$emit('change-operator','*')">
        Multiplication
        <br> 
        *
      </button>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>