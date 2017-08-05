<template>
  <div>
    <h3>{{ field.title }}</h3>
    <transition-group name="slide">
      <p v-for="item in field.val" key="field.val.indexOf(item)">
        └─ {{ item }}
      </p>
      <p v-if="responding" key='b'>
        └─ <span v-if="!submitted">
              <input type="text" v-model="response" @keyup.enter="submit">
              <button @click="submit">+</button>
           </span>
           <span v-if="submitted">{{ response }}</span>
      </p>
    </transition-group>
  </div>
</template>

<script>
import { ADD_NAME_TO_LIST_NAMES } from '../../store/mutationTypes';

export default {
  name: 'LIST_NAMES',
  props: ['field', 'responding'],
  data: () => ({ response: '', submitted: false }),
  methods: {
    submit() {
      this.$store.commit(ADD_NAME_TO_LIST_NAMES, { field: this.field, name: this.response });
      this.submitted = true;
    },
  },
};
</script>

<style scoped>
div {
  display: block;
  line-height: 0.5;
  text-align: left;
  /*width: 20em;*/
}
input {
  width: 60%;
}
.slide-enter, .slide-leave {
  /*transform: translate(60px, 15px);*/
  opacity: 0;
}
.slide-enter-active, .slide-leave-active {
  transition: all 0.2s ease-out;
}

.slide-move {
  transition: all 0.1s ease-out;
}
</style>
