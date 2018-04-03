<style>

</style>

<template>
  <div>
    <header>Kittens for Adoption</header>
    <main>
      <div v-if="selectedCat" >
        <button @click="handleCatSelect(null)">Return to Table</button>
        <CatDetail v-bind="selectedCat" />
      </div>
      <div v-else>
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
            <td><a @click="handleCatSelect(cat)">{{cat.name}}</a></td>
            <td>{{cat.breed}}</td>
            <td>{{cat.gender}}</td>
            <td>{{cat.age}}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </main>
  </div>
</template>

<script>
  import CatMock from './assets/CatMock.json'
  import CatDetail from './components/CatDetail.vue'

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
      handleCatSelect(cat) {
        this.selectedCat = cat
      }
    },
    components: {
      CatDetail
    }
  }
</script>
