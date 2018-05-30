<template>
  <div>
    <div class="doc-title">
      整体介绍
    </div>
    <p>想要进行埋点，需要在系统中安装node环境，并需要埋点前端、后端、SDK文件，并调整好对应的数据库。</p>
    <div class="doc-title">
      埋点统计平台前端服务
    </div>
    <p>埋点统计平台前端用于展示埋点数据信息，是一个VUE项目，需要独立的打开。统计平台运行环境为node，打开方式为在文件目录下使用指令npm run dev即可。</p>
    <p>埋点统计平台前端负责展示数据信息，并负责创建针对不同页面的埋点文件。</p>
    <div class="doc-title">
      埋点后端
    </div>
    <p>埋点后端负责存储并调用埋点数据，生成埋点文件。</p>
    <p>埋点后端是基于express框架的项目，运行环境为node，打开方式为在文件目录下使用npm start。</p>
    <div class="doc-title">
      可视化埋点
    </div>
    <p>可视化埋点需要埋点页面引入track.js文件，再引入由埋点统计平台概览页生成的埋点页名称.js文件，可以通过src="http://127.0.0.1:3000/js/埋点页名称.js"直接在服务器上获取，也可以通过寻找生成路径"tracking-server/public/js"获取。</p>
    <p>引入两个文件后并不能直接使用。如果是在本地测试，则将tracking.js文件中的user设置为埋点页名称，此时可以在测试环境中使用可是化埋点。</p>
    <p>如果页面挂载到服务器，则需要修改track.js的trackIp，调整为服务器IP，修改埋点文件的trackEventIp，同样调整为服务器IP，此时可以进行正常的埋点功能。</p>
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