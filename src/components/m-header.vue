<template>
  <div class="header">
    <h1>TM播放器</h1>
  </div>
</template>

<script>
export default {
  name: 'm-header',
}
</script>

<style lang="less" scoped>

@import '../tools/css/var';
@import '../tools/css/min';

.header {
  overflow: hidden;
}

h1 {
  margin: 0;
  height: 44px; line-height: 44px;
  color: @title-color;
  text-align: center;
  font-weight: normal; font-size: 1.2rem;
  background-color: @nav-bg;
  position: relative; overflow: hidden;
  &:before {
    content: ''; display: inline-block;
    width: 44px; height: 44px;
    .back-img('../img/logo.png');
    background-size: cover;
    vertical-align: middle; margin-bottom: 4px;
  }
}


</style>
