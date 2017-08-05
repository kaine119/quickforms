<template>
  <div>
    <h1>Looking at form {{ id }}</h1>
    <router-link to="/2342/preview">Go to form #232</router-link>
          <component
              v-for="field in fields"
              :is="field.type"
              :key="fields.indexOf(field)"
              :field="field"
              :responding='false'></component>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
// import * as mutationTypes from '../store/mutationTypes';
import COUNTER from './fields/Counter';
import LIST_NAMES from './fields/NameList';

export default {
  components: {
    COUNTER,
    LIST_NAMES,
  },
  mounted() {
    // eslint-disable-next-line
    console.log(`Now looking at form #${this.id}`);
  },
  beforeRouteUpdate(to, from, next) {
    this.id = to.params.id;
    next();
  },
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  computed: {
    ...mapGetters({
      fields: 'getAllFields',
    }),
  },
};
</script>

<style scoped>
  div {
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    display: flex;
    -ms-align-items: center;
    align-items: center;
    /*justify-content: center;*/
    -webkit-flex-direction: column;
    -moz-flex-direction: column;
    -ms-flex-direction: column;
    -o-flex-direction: column;
    flex-direction: column;
  }

</style>
