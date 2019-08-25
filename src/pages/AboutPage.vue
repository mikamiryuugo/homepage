<template>
  <div>
    <h1 class="section-index">About</h1>
    <p class="msg">{{ msg }}</p>
    <div class="container">
      <div class="left-field">
        <img src="../assets/icon.jpeg">
      </div>
      <div class="right-field">
        <ul class="items">
          <li
            v-for="profile in profiles"
            v-bind:key="profile.id"
          >
            <p class="caption">{{ profile.title }}</p>
            <p class="text">{{ profile.description }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '東京在住。転職活動中。趣味は、筋トレと効率化と勉強',
      profiles: [
        {id: 1, title: '2006年04月：ポイントシステム開発', description: '主にJavaでの開発。オブジェクト指向の概念が大好きに。'},
        {id: 2, title: '2010年05月：Webシステム開発', description: '主にPHPでフロントからバックエンドまで開発。要件定義からインフラ構築まで一通り関われ気づけば6年ほどいました。'},
        {id: 3, title: '2016年11月：WebシステムQA', description: '営業的な立ち回り4割、管理7割。QAという領域そのものの課題を解消しようとしていたところで、スクラム開発のQAとしてどっぷり。やれる事が無限にある状態で案件フリーで立ち回れなくなったのが悩み。'},
        {id: 4, title: '◆保有資格◆', description: '応用技術者試験、AWSクラウドプラクティショナー、TOEIC530点、JSTQB'}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li {
  display: list-item;
  text-align: left;
  margin-bottom: 10px;
}
img {
  border-radius: 50%;
  width: 180px;
  margin: 16px;
}
.caption {
  font-size: 1.1em;
  font-weight: bold;
}
.text {
  font-size: 1em;
}
</style>
