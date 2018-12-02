<template>
    <div id="AddCar">
        <input v-model="model" placeholder="Add car model"/>
        <input type="number" v-model="count" placeholder="Add car count"/>
        <input type="number" v-model="price" placeholder="Add car price"/>
        <input type="submit" v-on:click="onSubmitClick({model, count, price})">
    </div>
</template>

<script>

  const AddCar = {
    model: 'AddCar',
    props: ['onCarAdd'],
    data() {
      return {
        model: '',
        count: '',
        price: ''
      };
    },
    methods: {
      onSubmitClick(newCar) {
        this.onCarAdd(newCar);

        this.model = '';
        this.count = '';
        this.price = '';
      }
    }
  };

  export default AddCar;
</script>


<style scoped>


</style>
