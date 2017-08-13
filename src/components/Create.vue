<template>
  <span>
    <button>Add new list field</button>
    <button>Add new yes/no field</button>
  </span>
</template>

<script>
  import { RESET_FOR_CREATING } from '@/store/mutationTypes';

  export default {
    name: 'create',
    mounted() {
      this.$store.commit(RESET_FOR_CREATING);
      // eslint-disable-next-line
      console.log("resetting store"); console.log(this.$store);
    },
  };
</script>
