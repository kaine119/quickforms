<template>
  <div v-if="!submitted">
    <input type="text" placeholder="Form title">
    <hr>
    <component
      v-for="field in fields"
      :is="field.type"
      :key="fields.indexOf(field)"
      :field="field"
      :responding="true"
      :previewCreate="true"></component>

    <div id="fieldButtons">
      <input type="text" placeholder="Field name" v-model="title">
      <span>
        <button @click="addField('ADD_LIST_OF_NAMES', title)">Add new list field</button>
        <button @click="addField('ADD_COUNTER', title)">Add new yes/no field</button>
      </span>
    </div>

    <div id="submit">
      <button @click="submit()">Create</button>
    </div>
  </div>
  <div v-else>
    <h3>Submitting your form...</h3>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import { RESET_FOR_CREATING } from '@/store/mutationTypes';

  const LIST_NAMES = () => import('@/components/fields/NameList');
  const COUNTER = () => import('@/components/fields/Counter');

  export default {
    name: 'create',
    mounted() {
      this.$store.commit(RESET_FOR_CREATING);
    },
    data: () => ({ title: '', submitted: false }),
    methods: {
      addField(field) {
        this.$store.commit(field, { title: this.title });
        this.title = '';
      },
      submit() {
        this.submitted = true;
        this.$store.dispatch('submitNewForm', {
          newForm: {
            title: this.title,
            fields: this.fields,
          },
        })
        .then((res) => {
          this.$router.push(`/${res.id}`);
        });
      },
    },
    components: {
      LIST_NAMES,
      COUNTER,
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
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  #fieldButtons {
    margin-top: 1em;
  }
  @media screen and (max-width: 425px) {
    div {
      width: 80%;
      align-items: left;
      text-align: left;
      margin-left: 1em;
    }
  }
  hr {
    background-color: #35495E;
    width: 70%;
  }
</style>
