<template>
  <div id="app">
    <header></header>
    <main>
      <transition mode="out-in">
        <router-view/>
      </transition>
    </main>
    <footer></footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Roboto', 'Noto Sans JP', 'Vollkorn', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.v-enter-active, .v-leave-active {
  transition: opacity .5s;
}
.v-enter, .v-leave-to {
  opacity: 0;
}
.section-index::after {
  content: "";
  display: block;
  height: 2px;
  width: 50px;
  background-color: #ccc;
  margin: auto;
}
p {
  margin: 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 5px 8px;
}
a {
  color: white;
  text-decoration: none;
}
.container {
  padding: 0 15px;
  margin: 5px auto;
}
.msg {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
.btn {
  padding: 8px 20px;
  display: inline-block;
  opacity: 0.8;
  border: solid #24292D 1px;
  border-radius: 4px;
  transition: all 1s;
}
.btn:hover {
  opacity: 1;
}
.left-field {
    padding: 5px;
    float: left;
    width: 30%;
}
.right-field {
    padding: 5px;
    float: right;
    width: 65%;
}
.caption {
  font-size: 1.1em;
  font-weight: bold;
}
.text {
  font-size: 0.9em;
}
</style>
