<template>
  <div class="link-button">
    <a :href="linkHref" v-bind="$attrs"><slot></slot></a>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
@Component({
  inheritAttrs: false, //父组件传的参数没有porps接收时，会到$attrs中
  props: {
    linkHref: {
      require: true,
      type: String,
    },
  },
})
export default class LinkButton extends Vue {
  name;
}
</script>

<style scoped lang="less">
.link-button {
  position: relative;
  padding: 6px 0;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  color: #222;
  cursor: pointer;
  user-select: none;
}
</style>