<template>
  <div class="hello">

  <add-car :onCarAdd="addCar"/>

    <ul class="car__list">
        <li
            v-for="car in carsList"
            v-bind:class="[
                {'car__item-selected': car.selected},
                'car__item'
            ]"
            v-on:click="selectCar(car)"
            v-show="car.count"
        >
            <p class="car__name">{{ car.model }}</p>
            <p>{{ car.price }}</p>
            <p>{{ car.count }}</p>
        </li>
    </ul>
  </div>
</template>

<script>
  import AddCar from '@/components/AddCar';

const carsList = [
  {
    model: 'Tesla',
    count: 2,
    price: '70000',
    selected: false
  },
  {
    model: 'BMW',
    count: 2,
    price: '70000',
    selected: false
  },
  {
    model: 'AUDI',
    count: 2,
    price: '70000',
    selected: false
  },
  {
    model: 'VW',
    count: 2,
    price: '70000',
    selected: false
  },

];

const HelloWorldComponent =  {
  name: 'HelloWorld',
  components: {
    'add-car': AddCar
  },
  data() {
    return {
      carsList
    };
  },
  methods: {
    selectCar(car) {
      car.selected = !car.selected;
    },
    addCar(newCar) {
      this.carsList = [
        ...this.carsList,
        newCar
      ]
    }
  }
};

 export default HelloWorldComponent;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    h1, h2 {
      font-weight: bold;
    }
    ul {
      list-style-type: none;
      padding: 0;
    }
    li {
      display: inline-block;
      margin: 0 10px;
    }
    a {
      color: #42b983;
    }

    .car__list {
        display: flex;
        flex-flow: column;
        width: 400px;
    }

    .car__item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        user-select: none;
    }

    .car__name {
        font-size: 24px;
    }

    .car__item-selected {
        color: red;
    }


</style>
