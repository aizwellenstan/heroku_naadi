<template>
    <!-- <router-link
            tag="a"
            :to="`/article/${article._id}`"
            class="d-flex py-2 ai-center"
            v-for="(article,index) in articles"
            :key="index"
        >
            <span class="date pr-4 text-grey">{{article.createdAt | date}}</span>
            <span class="title flex-1 text-ellipsis text-dark-1">{{article.title}}</span>
            <span class="author text-dark-1">{{article.author}}</span>
    </router-link>-->

    <div>
      <div class="search-wrapper">
        <label>探す:</label>
        <input type="text" v-model="search" placeholder="キーワードを入力"/>
      </div>
        <div class="list_con" v-for="(article,index) in filteredList" :key="index">
            <el-card class="box-card my-1">
                <div class="title">
                    <router-link tag="a" :to="`/article/${article._id}`">
                        <h3 class="mb-2 text-dark-1">{{article.title}}</h3>
                        <div v-html="article.Body" class="w-100 fs-sm text-dark-1 text-ellipsis pb-2"></div>
                    </router-link>
                </div>
                <div class="d-flex jc-between">
                    <router-link
                        tag="a"
                        :to="`/user/${article.author._id}`"
                        class="text-primary"
                    >{{article.author.username}}</router-link>
                    <span class="date fs-xs">{{article.createdAt | date}}</span>
                </div>
            </el-card>
        </div>
    </div>
</template>

<script>
import dayjs from "dayjs";
export default {
    name: "ArticleList",
    props: {
        articles: { type: Array }
    },
    filters: {
        date(val) {
            return dayjs(val).format("MMDD");
        }
    },
    data: function () {
       return {
         search: ""
       }
    },
    computed: {
      // 配列の要素順番を逆順にする
      reverseArticles() {
          return this.articles.slice().reverse();
      },
      filteredList() {
        return this.reverseArticles.filter(reverseArticles => {
          return reverseArticles.title.toLowerCase().includes(this.search.toLowerCase())
        })
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
