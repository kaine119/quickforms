<template>
  <div id="main">
    <h3><router-link to="/create">Create a form</router-link></h3>
    <br><br>
    <input type="text" v-model="formID" placeholder="Form ID">
    <h3><router-link :to="formLink">Find a form by ID</router-link></h3>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({ formID: '' }),
  computed: {
    formLink() {
      return `/${this.formID}`;
    },
  },
};
</script>

<style scoped>

</style>
