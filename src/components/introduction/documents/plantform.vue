<template>
  <div>
      <div class="doc-title">
        浏览平台
      </div>
      <p>浏览平台包括了浏览器和浏览的操作系统。</p>
      <p>当游客打开用户网页时，埋点文件会向后端发送一条用户信息，可以从信息中解析出user-agent。这个信息可以通过解析，分析出用户的浏览器和操作系统。</p>
      <p>该功能主要面向于对用户浏览平台有统计需求的站长。</p>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  .doc-title {
    font-size: 32px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
</style>

