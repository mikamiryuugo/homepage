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
      <li>
        <a
        v-bind:href="this.facebook"
        target="_blank"
        class="btn facebook"
        >
        <span class="fab fa-facebook"></span>
        facebook
        </a>
        <div class="li-footer"></div>
      </li>
      <li>
        <a
        v-bind:href="this.wantedly"
        class="btn wantedly"
        target="_blank"
        >
          <img
            class="icon"
            src="@/assets/wantedly_logo_print.png"
          />
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
      msg: '転職活動中です。SNSかメールでお気軽にご連絡ください',
      mail: 'c3drive@gmail.com',
      twitter: 'https://twitter.com/c3drive',
      facebook: 'https://www.facebook.com/yuko.kanai.77',
      wantedly: 'https://www.wantedly.com/users/100164209'
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
