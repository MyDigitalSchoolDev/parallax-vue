<template>
  <div class="container">
    <parallax :speed-factor="1.2">
      <img src="../assets/logo.png" alt="">
    </parallax>
    <div>
      <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus autem eius esse provident quo
        reprehenderit? Aliquam aperiam deleniti distinctio dolore doloribus harum illo illum, maxime officia quisquam
        recusandae, unde voluptatum?
      </div>
      <div>Dicta eaque enim et ex maiores provident voluptatem voluptatibus voluptatum. Autem cumque, dolor excepturi
        harum, in iste natus nihil odio quisquam recusandae rem, sapiente sed ullam voluptas voluptate! Eligendi,
        inventore!
      </div>
    </div>
    <parallax :speed-factor="0.1">
      <img src="../assets/logo.png" alt="">
    </parallax>
  </div>
</template>

<script>
import Parallax from 'vue-parallaxy';

export default {
  props : [''],

  components : {
    // eslint-disable-next-line vue/no-unused-components
    Parallax
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.bg-1{
  background-image: url("../assets/logo.png");
}

a {
  color: inherit;
  text-decoration: none;
}
a:hover, a:focus {
  color: inherit;
  text-decoration: underline;
}

h3 {
  margin: 40px 0 0;
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
</style>
