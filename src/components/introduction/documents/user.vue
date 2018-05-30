<template>
  <div>
      <div class="doc-title">
        用户IP统计
      </div>
      <p>当游客打开用户网页时，埋点文件会向后端发送一条用户信息，可以从信息中解析出ip地址。</p>
      <p>将ip地址存储后，前端通过后端调用，并以表格的方式展示出来。这个数据的直接查看意义不大，所以需要将数据进行分析和统计。</p>
      <div class="doc-title">
        七日内新用户
      </div>
      <p>七日内的新ip数据会单独的进行统计，以便站长了解网站人数情况。</p>
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

