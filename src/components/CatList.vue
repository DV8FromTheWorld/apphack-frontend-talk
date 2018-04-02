<style>

</style>

<template>
  <main>
    <h1>Kittens Currently up for Adoption</h1>
    <input
      type="text"
      placeholder="Search"
      @input="searchChange">
    <table>
      <thead>
      <tr>
        <th>Kitten Name</th>
        <th>Breed</th>
        <th>Gender</th>
        <th>Age</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="cat in cats">
        <td><router-link :to="{name: 'Details', params: cat}">{{cat.name}}</router-link></td>
        <td>{{cat.breed}}</td>
        <td>{{cat.gender}}</td>
        <td>{{cat.age}}</td>
      </tr>
      </tbody>
    </table>
  </main>
</template>

<script>
  import Cats from '../assets/cats.json'

  export default {
    data() {
      return {
        cats: Cats
      }
    },
    methods: {
      searchChange(e) {
        let searchValue = e.target.value

        this.cats = Cats.filter(cat => cat.name.indexOf(searchValue) != -1)
      }
    }
  }

</script>
