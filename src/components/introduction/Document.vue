<template>
  <div class="document-container">
    <div class="doc-category">
      <div class="doc-title">DOCUMENT</div>
      <div class="level-one" @click="activeDoc(1)" :class="[ifActive == 1 ? 'active': '']">产品介绍</div>
      <div class="level-one" @click="activeDoc(2)" :class="[ifActive == 2 ? 'active': '']">快速开始</div>
      <div class="level-one" @click="activeDoc(3)" :class="[ifActive == 3 ? 'active': '']">事件</div>
      <div class="level-one" @click="activeDoc(4)" :class="[ifActive == 4 ? 'active': '']">用户</div>
      <div class="level-one" @click="activeDoc(5)" :class="[ifActive == 5 ? 'active': '']">浏览平台</div>
    </div>  
    <div class="doc-content">
      <introduction v-if="ifActive === 1"></introduction>
      <start v-if="ifActive === 2"></start>
      <event v-if="ifActive === 3"></event>
      <user v-if="ifActive === 4"></user>
      <plantform v-if="ifActive === 5"></plantform>
    </div>
  </div>
</template>

<script>
import introduction from './documents/introduction'
import start from './documents/start'
import event from './documents/event'
import user from './documents/user'
import plantform from './documents/plantform'
export default {
  components: {
    introduction,
    start,
    event,
    user,
    plantform
  },
  data() {
    return {
      ifActive: 1
    }
  },
  methods: {
    activeDoc: function(num) {
      this.ifActive = num;
    }
  }
}
</script>

<style scoped>
.doc-category {
  width: 300px;  
  position: absolute;  
  top: 50px;  
  left: 0px;  
  bottom: 0px; 
  overflow-y: scroll;  
  color: #34495e
}
.doc-title {
  font-size: 32px;
  color: grey;  
  font-weight: 500;
  margin-top: 20px;  
  padding-left: 36px; 
  padding-bottom: 20px;
  border-bottom: 1px solid #f0f0f0;
}
.active {
  color: #008cff; 
}
.level-one {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-top: 10px;
  padding-left: 36px;
  font-size: 15px;
}
.level-one:hover {
  cursor: pointer;
  text-decoration:underline;
}

.doc-content {
  position: absolute;
  padding: 20px 200px 0 200px;
  left: 300px;
  top: 50px;
  bottom: 0px;
  right: 0px;
}
</style>
