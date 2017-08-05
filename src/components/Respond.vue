<template>
  <div>
    <h1>Responding to form {{ $route.params.id }}</h1>
    <component v-for="field in fields" v-bind:is="field.type" v-bind:key="fields.indexOf(field)" v-bind:field="field"  :responding='true'></component>
    <button @click.prevent="submitForm">Submit form</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import COUNTER from './fields/Counter';
import LIST_NAMES from './fields/NameList';

export default {
  components: {
    COUNTER,
    LIST_NAMES,
  },
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  computed: {
    ...mapGetters({
      fields: 'getAllFields',
      getResponse: 'getResponse',
    }),
  },
  methods: {
    submitForm() {
      // eslint-disable-next-line
      console.log(this.getResponse);
    },
  },
};
</script>

<style scoped>
  div {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
</style>
