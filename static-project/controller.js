var counter = new Vue({
  el: '#counter',
  data() {
    return {
      itemsTotal: 12
    }
  },
  mounted(){
    const trList = document.querySelectorAll('.list-item');
    this.itemsTotal = trList.length;
  },
  methods: {

  }
});

var search = new Vue({
  el: '#search',
  data() {
    return {
      value: ''
    }
  },
  methods: {
    searchValue() {
      const trList = document.querySelectorAll('.list-item');

      trList.forEach(domNode => {
        const hasText = domNode.textContent.includes(this.value);

        if (!hasText) {
          domNode.classList.add('hidden');
          return;
        }

        domNode.classList.remove('hidden');
      })
    }
  }
});