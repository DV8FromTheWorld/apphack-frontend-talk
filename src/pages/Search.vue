<style>

</style>

<template>
  <div>
    <h1>Kittens</h1>
    <input
      type="text"
      placeholder="Search"
      @input="handleSearch" />
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
        <td><router-link :to="`/cats/${cat.id}/details`">{{cat.name}}</router-link></td>
        <td>{{cat.breed}}</td>
        <td>{{cat.gender}}</td>
        <td>{{cat.age}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import CatMock from '../assets/CatMock.json'

  export default {
    data() {
      return {
        cats: CatMock,
        selectedCat: null
      }
    },
    methods: {
      handleSearch(e) {
        //console.log(e) - step through this.
        let searchValue = e.target.value

        this.cats = CatMock.filter(cat => cat.name.indexOf(searchValue) !== -1)
      },
    }
  }
</script>
