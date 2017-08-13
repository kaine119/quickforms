<template>
  <div>
    <h1>{{ title }}</h1>
    <router-link to="respond" append v-show="fields.length !== 0">Respond</router-link>
    <p v-show="fields.length === 0">Loading...</p>
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
import COUNTER from './fields/Counter';
import LIST_NAMES from './fields/NameList';

export default {
  components: {
    COUNTER,
    LIST_NAMES,
  },
  mounted() {
    // get forms for first mounted
    // won't be run on subsequent navigations
    this.$store.dispatch('getFormById', { id: this.id });
    // eslint-disable-next-line
    console.log(`Now looking at form #${this.id}`);
  },
  beforeRouteUpdate(to, from, next) {
    // will only be run on subsequent navigations
    this.id = to.params.id;
    this.$store.dispatch('getFormById', { id: this.id });
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
      title: 'getFormTitle',
    }),
  },
};
</script>

<style scoped>
  div {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  h1 {
    margin-bottom: 0
  }
  h6 {
    margin-top: 0;
  }


  @media screen and (max-width: 425px) {
    div {
      width: 80%;
      align-items: left;
      text-align: left;
      margin-left: 1em;
    }
  }

</style>
