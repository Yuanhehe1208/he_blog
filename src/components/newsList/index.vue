<template>
  <div>1234</div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import * as newsApi from "@/http/news";
@Component({})
export default class NewsList extends Vue {
  mounted(){
    this.getNewsList();
  }
  getNewsList() {
    newsApi.getNewsList();
  }
}
</script>

<style>
</style>