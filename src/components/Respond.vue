<template>
    <div v-if="!submitted" key="a" id="form-container">
      <h1 v-show="fields.length !== 0">Responding to "{{ title }}"</h1>
      <p v-show="fields.length === 0">Loading...</p>
      <component
          v-for="field in fields"
          :is="field.type"
          :key="fields.indexOf(field)"
          :field="field"
          :responding='true'></component>
      <button v-show="fields.length !== 0" @click="submitForm">Submit</button>
    </div>
    <div v-else key="b">
      <h1>Submitting your response...</h1>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

const COUNTER = () => import('./fields/Counter');
const LIST_NAMES = () => import('./fields/NameList');

export default {
  components: {
    COUNTER,
    LIST_NAMES,
  },
  mounted() {
    this.$store.dispatch('getFormById', { id: this.id });
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
      submitted: false,
    };
  },
  computed: {
    ...mapGetters({
      fields: 'getAllFields',
      getResponse: 'getResponse',
      title: 'getFormTitle',
    }),
  },
  methods: {
    submitForm() {
      this.submitted = true;
      this.$store.dispatch('respondToForm', { id: this.id, response: this.getResponse })
      .then(() => {
        this.$router.push(`/${this.id}`);
      });
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
  button {
    margin-bottom: 5em;
  }
  @media screen and (max-width: 425px) {
    div {
      width: 80%;
      align-items: left;
      text-align: left;
      margin-left: 1em;
    }
  }
  button {
    margin-top: 1em;
  }
</style>
