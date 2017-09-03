<template>
  <div>
      <h3 class="title">{{ field.title }}</h3>
      <!-- <button class='submit' v-if="responding" @click="increment">{{ field.val }}</button> -->
      <!-- <span class="value">{{field.val}}</span> -->
      <div v-if="!responding">
        Yes: <span class="value" id="yes-value">{{ field.val.yes }}</span> No: <span class="value" id="no-value">{{ field.val.no }}</span>
      </div>
      <div v-if="responding" :class="response !== null || previewCreate ? 'disabled' : ''" class='submit'>
        <!-- the equality checks for true and false are to exclude cases where response === null. -->
        <button v-bind:class="response === true  ? 'green' : ''" @click="submit(true)">Yes</button>
        <button v-bind:class="response === false ? 'red' : ''"   @click="submit(false)">No</button>
      </div>
  </div>
</template>

<script>
import { RESPOND_COUNTER } from '../../store/mutationTypes';

export default {
  props: ['field', 'responding', 'previewCreate'],
  name: 'COUNTER',
  data() {
    return {
      // if user responds yes, response == true, else, response == false.
      // null just means user hasn't responded.
      response: null,
    };
  },
  methods: {
    submit(answer) {
      this.response = answer;
      this.$store.commit(RESPOND_COUNTER, { field: this.field, response: this.response });
    },
  },
};
</script>

<style scoped>
  button {
    display: inline-block;
  }
  .value {
    border: 1px solid black;
    padding: 3px;
  }
  .green {
    background-color: rgb(165, 255, 76);
  }
  .red {
    background-color: rgb(255, 175, 199)
  }
  .disabled {
    opacity: 0.6;
    pointer-events: none;
  }
  h3 {
    margin-bottom: 0.5em;
  }
</style>

