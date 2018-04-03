<style>

</style>

<template>
  <div>
    <h1>Kitten Details</h1>
    <figure>
      <img :src="picture">
      <figcaption>{{name}}</figcaption>
    </figure>
    <p><strong>Breed: </strong>{{breed}}</p>
    <p><strong>Color: </strong>{{color}}</p>
    <p><strong>Birthday: </strong>{{birthday}}</p>
    <p><strong>Gender: </strong>{{gender}}</p>
    <section v-if="likes.length">
      <h4>Likes</h4>
      <ul>
        <li v-for="like in likes">{{like}}</li>
      </ul>
    </section>
    <section v-if="dislikes.length">
      <h4>Dislikes</h4>
      <ul>
        <li v-for="dislike in dislikes">{{dislike}}</li>
      </ul>
    </section>
  </div>
</template>

<script>
  export default {
    props: {
      name: String,
      color: String,
      breed: String,
      gender: String,
      birthday: String,
      picture: String,
      likes: {
        type: Array,
        default: () => []
      },
      dislikes: {
        type: Array,
        default: () => []
      }
    }
  }
</script>
