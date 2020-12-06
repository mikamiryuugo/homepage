<template>
  <div>
    <h1 class="section-index">Contact</h1>
    <p class="msg">{{ msg }}</p>
    <ul>
      <li>
        {{ mail }}
        <div class="li-footer"></div>
      </li>
      <li>
        <a
        v-bind:href="this.twitter"
        target="_blank"
        class="btn twitter"
        >
        <span class="fab fa-twitter"></span>
        twitter
        </a>
        <div class="li-footer"></div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'お問い合わせはSNSかメールでお気軽にご連絡ください',
      mail: 'ryutarodesuyooo@gmail.com',
      twitter: 'https://twitter.com/osvUDw99utaxUTl'
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li {
  margin-left: 30px;
  width: 150px;
}
.twitter {
  background-color: #55acee;
}
.facebook {
  background-color: #1D3C78;
}
.icon {
  display: inline-block;
  padding: 1px;
  height: 18px;
  vertical-align: bottom;
}
</style>
