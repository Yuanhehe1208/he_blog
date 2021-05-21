<template>
  <div class="home">
    <Layout>
      <template v-slot:header-left>
        <a href="/login">下载App</a>
        <a href="/qinquan">注册头条号</a>
        <a href="/toutiaochanpin">北京</a>
      </template>
      <template v-slot:body-left>
        <LinkBtton linkHref="/redian" target="_blank">热点</LinkBtton>
        <LinkBtton linkHref="/tupian">图片</LinkBtton>
        <LinkBtton linkHref="/zhibo">直播</LinkBtton>
        <LinkBtton linkHref="/redian">热点</LinkBtton>
        <LinkBtton linkHref="/redian">热点</LinkBtton>
      </template>
    </Layout>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Layout from "@/components/Layout/index.vue"; // @ is an alias to /src
import LinkBtton from "@/components/Button/LinkButton.vue";
@Component({
  components: {
    Layout,
    LinkBtton,
  },
})
export default class Home extends Vue {}
</script>
