<template>
  <div>
    <div class="layout-header">
      <div class="layout-header-left">
        <slot name="header-left">左边</slot>
      </div>
      <div class="layout-hader-right">
        <slot name="header-right">
          <a href="/login">登录</a>
          <a href="/qinquan">侵权</a>
          <a href="/toutiaochanpin">头条产品</a>
        </slot>
      </div>
    </div>
    <div class="layout-body clearfix">
      <div class="layout-body-left">
          <slot name="body-left">left</slot>
      </div>
      <div class="layout-body-right">
          <slot name="body-right">right</slot>
      </div>
      <div class="layout-body-middle">
          <slot name="body-middle">middle</slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.layout-header {
  display: flex;
  justify-content: space-between;
  background: #000000;
  padding: 10px;
  a {
    margin: 0 5px;
    text-decoration: none;
    color: #ffffff;
  }
}
.layout-body{
    &-left{
        float: left;
        margin-right: 10px;
        position: sticky;//吸顶
        top: 0;


        width: 200px;
        height: 600px;
        background: yellow;
    }
    &-right{
        float: right;
        margin-left: 10px;

        width: 200px;
        height: 600px;
        background: green;
    }
    &-middle{
        overflow: auto; //BFC

        height: 2800px;
        background: red;
    }
}
</style>