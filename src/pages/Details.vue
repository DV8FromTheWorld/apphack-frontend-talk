<style>

</style>

<template>
  <div>
    <router-link to="/cats"><button>Return to Table</button></router-link>
    <CatDetail v-if="selectedCat" v-bind="selectedCat" />
    <div v-else>
      <p>No Cat was found with that id!</p>
    </div>
  </div>
</template>

<script>
  import CatMock from '../assets/CatMock.json'
  import CatDetail from '../components/CatDetail.vue'

  export default {
    data() {
      return {
        selectedCat: null
      }
    },
    created() {
      let catId = this.$route.params.id

      this.selectedCat = CatMock.find(cat => cat.id == catId)
    },
    components: {
      CatDetail
    }
  }
</script>
