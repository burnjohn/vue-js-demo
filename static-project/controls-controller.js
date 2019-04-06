const controls = new Vue({
  el: '.form-inline',
  data: {
    searchVal: ''
  },
  methods: {
    searchValue(event) {
      const value = event.target.value;
      EventEmitter.$emit('input-change', value);
    }
  }
});