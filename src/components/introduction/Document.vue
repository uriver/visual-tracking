<template>
  <div class="document-container">
    <div class="doc-category">
      <div class="doc-title">DOCUMENT</div>
      <div class="level-one" @click="activeDoc(1)" :class="[ifActive == 1 ? 'active': '']">测试</div>
      <div class="level-one" @click="activeDoc(2)" :class="[ifActive == 2 ? 'active': '']">测试1223</div>
      <div class="level-one" @click="activeDoc(3)" :class="[ifActive == 3 ? 'active': '']">测试14as</div>
      <div class="level-one" @click="activeDoc(4)" :class="[ifActive == 4 ? 'active': '']">测试ydfsd</div>
      <div class="level-one" @click="activeDoc(5)" :class="[ifActive == 5 ? 'active': '']">测试asdad</div>
      <div class="level-one" @click="activeDoc(6)" :class="[ifActive == 6 ? 'active': '']">测试asdf</div>
    </div>  
    <div class="doc-content">
      <test-doc1 v-if="ifActive === 1"></test-doc1>
      <test-doc2 v-if="ifActive === 2"></test-doc2>
    </div>
  </div>
</template>

<script>
import testDoc1 from './documents/testDoc1'
import testDoc2 from './documents/testDoc2'
export default {
  components: {
    testDoc1,
    testDoc2
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
  left: 300px;
  top: 50px;
  bottom: 0px;
  right: 0px;
}
</style>
