export default {
    state: {
        // 0-首页，1-文档
        category: 0
    },
    mutations: {
        changeCategory (state, cate){
            state.category = cate
        }
    }
}