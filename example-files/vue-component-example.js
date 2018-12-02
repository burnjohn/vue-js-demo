const component = new Vue({
  el: '.some-class-name',
  template: '<div> <div/>',
  data: {
    props: 'Это видно в шаблонах',
    first_name: "Вася",
    last_name: "Пупкин"
  },
  computed: {
    full_name: function(){
      return this.first_name + this.last_name; //Вася Пупкин
    }
  },
  methods: {
    // методы жизненного цикла
    beforeCreate: function(){},
    created: function(){},
    beforeMount: function(){},
    mounted: function(){},
    beforeUpdate: function(){},
    updated: function(){},
    beforeDestroy: function(){},
    destroyed: function(){},

    customMethodsAlso: function(){
      //здесь у нас тоже есть доступ к data
    }
  }
})