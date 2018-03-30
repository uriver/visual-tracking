import Vue from 'vue' 
import Vuex from 'vuex' 

Vue.use(Vuex)

const state = {
    // 0-首页，1-文档
    category: 0
}

const mutations = {
    changeCategory (state, cate){
        state.category = cate
    }
}


export default new Vuex.Store({
    state,
    mutations
})