import Vue from 'vue' 
import Vuex from 'vuex' 

Vue.use(Vuex)

const state = {
    // 0-首页，1-文档
    user: "暂未选择",
    category: 0
}

const mutations = {
    changeCategory (state, cate){
        state.category = cate
    },
    changeUser (state, user){
        state.user = user
    }
}


export default new Vuex.Store({
    state,
    mutations
})