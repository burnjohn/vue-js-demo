// comment.vue

<style lang="sass">
    button {
        border: 1px solid gray;

        &.blue {
            border-color:blue;
        }
    }
</style>

<template lang="html">
    <h1> </h1>
    <p> </p>
    <input />
</template>

<script>
  import Comment from '../models';
  import avatar from './components/avatar.vue';

  export default {
    props: ['user'],
    components: {
      avatar,
    },
    data() {
      return {
        content: '',
      };
    },
    methods: {
      submitComment(e) {
        e.preventDefault();
        var comment = new Comment(this.content);
        comment.save().then(() => {
          alert('o_O');
          this.content = '';
        });
      },
    },
  };
</script>