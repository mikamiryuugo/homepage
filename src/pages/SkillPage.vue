<template>
  <div>
    <h1 class="section-index">Skill</h1>
    <p class="msg">{{ msg }}</p>
    <div class="container">
      <ul class="items">
        <li
          v-for="profile in profiles"
          v-bind:key="profile.id"
        >
          <div class="left-field">
            <img
              v-bind:src="profile.icon1"
              class="icon"
            />
            <img
              v-bind:src="profile.icon2"
              class="icon"
            />
            <img
              v-bind:src="profile.icon3"
              class="icon"
            />
          </div>
          <div class="right-field">
            <p class="caption">{{ profile.title }}</p>
            <p class="text">{{ profile.description }}</p>
          </div>
          <div class="li-footer"></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '立ち上がりはやいです',
      profiles: [
        {id: 1, title: 'PHP', icon1: require('@/assets/php.svg'), icon2: require('@/assets/cakephp.svg'), description: 'クラス設計から可能。Web、API、バッチ開発可能。'},
        {id: 2, title: 'Java', icon1: require('@/assets/java.svg'), description: 'Strutsベースでの開発、JavaEE、Servletなど経験、環境構築からの経験なし。'},
        {id: 3, title: 'HTML5/CSS3/JavaScript', icon1: require('@/assets/html-5.svg'), icon2: require('@/assets/css-3.svg'), icon3: require('@/assets/javascript.svg'), description: '基本的に問題なし。AJaxは必要最低限。'},
        {id: 4, title: 'PostgreSQL/AmazonRDS/MySQL/Sybase/Oracle', icon1: require('@/assets/postgresql.svg'), icon2: require('@/assets/aws-rds.svg'), icon3: require('@/assets/mysql.svg'), description: '各DBの特徴、必要最低限のコマンド知識。'},
        {id: 5, title: 'Apache/EC2/Linux/Tomcat/Nginx/S3/EBS/AutoScalling', icon1: require('@/assets/apache.svg'), icon2: require('@/assets/aws.svg'), icon3: require('@/assets/linux-tux.svg'), description: 'ミドルウェアインストール、環境構築、運用が可能な程度のコマンドやサーバーの知識。'},
        {id: 6, title: 'Vue.js/Python/Go/AWS新規サービス', icon1: require('@/assets/vue.svg'), icon2: require('@/assets/python.svg'), icon3: require('@/assets/gopher.svg'), description: '学習中。'},
        {id: 7, title: 'GCP/Docker/CircleCI/NoSQL', icon1: require('@/assets/google-cloud.svg'), icon2: require('@/assets/circleci.svg'), icon3: require('@/assets/docker.svg'), description: '今後やりたい事。興味。'}
      ]
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li {
  display: list-item;
  margin-bottom: 10px;
}
.left-field{
  text-align: right;
}
.right-field{
  text-align: left;
}
.li-footer {
  clear: both;
}
.icon {
  height: 50px;
  margin: 0 5px;
}
</style>
