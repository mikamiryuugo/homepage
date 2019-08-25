<template>
  <div class="item">
    <router-link
      v-bind:to="this.link"
      target="_self"
      class="btn"
    >
      <p class="caption">
        <span v-bind:class="this.icon"></span>
        {{ this.title }}
      </p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Item',
  props: [
    'icon',
    'title',
    'link'
  ]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: white;
  text-decoration: none;
}
.btn {
  padding: 8px 20px;
  color: white;
  display: inline-block;
  opacity: 0.8;
  border-radius: 4px;
  transition: all 1s;
}
.btn:hover {
  opacity: 1;
}
.item {
  display: inline-block;
  width: 20%;
  margin: 0 0.5%;
  opacity: 0.8;
  border-radius: 4px;
  transition: all 1s;
  border: 1px solid #dee7ec;
  background-color:rgba(0, 0, 0, 0.3);
}
.item:hover {
  background-color:rgba(255, 255, 255, 0.3);
}
.item a {
  display: block;
}
</style>
