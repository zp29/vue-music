<template>
  <nav class="m-tab">
    <ul>
      <li><router-link to="/recommend">推荐</router-link></li>
      <li><router-link to="/list">歌单</router-link></li>
      <li><router-link to="/rank">排行</router-link></li>
      <li><router-link to="/search">搜索</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {

  name: 'MTab',

  data () {
    return {

    }
  }
}
</script>

<style lang="less" scoped>

@import '../tools/css/var';
// 全部都是变量...
@import '../tools/css/min';
// 引入一些函数 

  .m-tab {
    margin: 0;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    height: 46px;
    line-height: 46px;
    font-size: 0;
    li {
      text-align: center;
      display: inline-block;
      width: 100% / 4;
    }
    a {
      text-decoration: none;
      font-size: 16px;
      display: block;
      color: @a-color;
    }
    .router-link-exact-active.router-link-active {
    // 当前页面是啥导航就是啥
      background-color: @a-hover-bg;
      color: @a-hover-color;
      border-bottom-left-radius: @btn-radius;
      border-bottom-right-radius: @btn-radius;
      // 下面的圆角...
    }
  }
</style>
