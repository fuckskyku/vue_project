import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../components/Login'
import Reg from  '../components/Reg'
import Start from '../components/Start'
import Home from '../components/Home'
import Train from '../components/Train'
import Open from '../components/Open'
import Mine from '../components/Mine'
import Detail from '../components/Detail'
// import Select from '../components/Select'

import Dynamic from '../components/Dynamic'
import Column from '../components/Column'
import Billboard from '../components/Billboard'
import Citywide from '../components/Citywide'
import Find from '../components/Find'
Vue.use(VueRouter)

const routes = [
	{
		path:'/home',
		component: Home,
		meta: {
			keepAlive: true
		}//路由元信息
	},
	{
		path:'/start',
		component: Start
	},
	{
		path:'/train',
		component: Train
	},
	{
		path:'/open',
		component: Open
	},
	{
		path:'/column',
		component: Column
	},
	{
	path: '/login',
	component: Login
	},
	{
	path: '/reg',
	component: Reg
	},
	{
		path:'/mine',
		component: Mine
	},
	{
		path:'/detail/id/:id',
		component: Detail
	},
	// {
	// 	path:'/select/id/:id',
	// 	component: Select
	// },
	{
		path:'/dynamic',
		component: Dynamic
	},
	{
		path:'/column',
		component: Column
	},
	{
		path:'/find',
		component: Find
	},
	{
		path:'/billboard',
		component: Billboard
	},
	{
		path:'/citywide',
		component: Citywide
	},
	{
		path: '*',
		redirect: '/start'
	}
]

const router = new VueRouter({
	routes
})

export default router