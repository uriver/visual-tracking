<template>
  <div class="navBar">
      <div class="logo-img">
          <img src="../../assets/logo.png" alt="logo" width="100%">
      </div>
      <div class="category">
          <ul class="items">
              <li @click = "goToHome" :class="[category == 0 ? 'active': '']">首页</li>
              <li @click = "goToDoc" :class="[category == 1 ? 'active': '']">文档</li>
              <li @click="$router.push('/statistics')">统计平台</li>
          </ul>
      </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    computed: {
        ...mapState([
            'category'
        ])
    },
    methods: {
        goToHome: function(){
            this.$store.commit('changeCategory',0)
        },
        goToDoc: function(){
            this.$store.commit('changeCategory',1)
        }
    }
}
</script>

<style scoped>
ul {
    margin: 0;
    padding: 0;
}
.navBar {
    width: 100%;
    height: 50px;
    background-color: #333;
}
.category {
    float: left;
    height: 100%;
    margin-left: 330px; 
    margin-right: 0; 
}
.logo-img {
    width: 170px; 
    float: left;
}
.items {
    height: 100%;
    box-sizing: border-box; 
    color: rgb(157, 157, 157);
}
.items li {
    list-style: none;
    display: inline-block; 
    height: 100%;
    padding-left: 15px;
    padding-right: 15px;
    text-align: center;
    line-height: 50px;
    font-size: 14px;
}
.items li:hover {
    color: white;
    cursor: pointer;
}
.active {
    color: white;
    background-color: black;
}
</style>
