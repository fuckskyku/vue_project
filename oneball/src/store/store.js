import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
var state = {
    flag:true,
    users:[
        {username:'小学生库昊',password:'30'}
    ]

}
var mutations = {
   /* toTrue(state){
        state.flag = true;
    },
    toFalse(state){
        state.flag = false;
    },*/
    setName(state,str){
        state.name = str;
    },
   reg(state,user){
        state.users.push(user);
    }
}
var store = new Vuex.Store({
    state,
    mutations
})
export default store;