// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import axios from 'axios'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import router from './router/index.js'
import './js/font.js'
import filters from './filters'
import animate from 'animate.css'
Vue.use(MintUI)
import VueLazyload from 'vue-lazyload'
import Vuex from 'vuex'
import store from './store/store.js'





Vue.use(VueLazyload)
// import { Swipe, SwipeItem } from 'mint-ui';
// 
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import { Swipe, SwipeItem } from 'vue-swipe'  // 引入

Vue.use(ElementUI);
Vue.component('swipe', Swipe)  // 注册
Vue.component('swipe-item', SwipeItem) // 注册

// Vue.filter('normalTime',time => {
// 	var time = Date.now();
// 	var d = new Date(time);
// 	return d.getFullYear() + '-' (d.getMonth() + 1) + '-' +	d.getDate() + '' + d.getHours() + ':' + 
// 	d.getMinutes() + ':' + d.getSeconds();
// })

// require('vue-swipe/dist/vue-swipe.css'); //全局引入
Vue.prototype.$http = axios

Vue.config.productionTip = false

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=28822619,4089506887&fm=58&bpow=500&bpoh=500',
  loading: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1533637903631&di=ebff11c14b6c0938ab3ee77ab9508829&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20161007%2Fb6a4693671ea41dbbe48a546411eab21.jpg',
  attempt: 1
})


import "./assets/font_ball/iconfont.css"
/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	components: { App },
    template: '<App/>'
})
























































import {
  Pagination,
  Dialog,
  Autocomplete,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Input,
  InputNumber,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Switch,
  Select,
  Option,
  OptionGroup,
  Button,
  ButtonGroup,
  Table,
  TableColumn,
  DatePicker,
  TimeSelect,
  TimePicker,
  Popover,
  Tooltip,
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormItem,
  Tabs,
  TabPane,
  Tag,
  Tree,
  Alert,
  Slider,
  Icon,
  Row,
  Col,
  Upload,
  Progress,
  Badge,
  Card,
  Rate,
  Steps,
  Step,
  Carousel,
  CarouselItem,
  Collapse,
  CollapseItem,
  Cascader,
  ColorPicker,
  Transfer,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Loading,
  MessageBox,
  Message,
  Notification
} from 'element-ui';

Vue.use(Pagination);
Vue.use(Dialog);
Vue.use(Autocomplete);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Input);
Vue.use(InputNumber);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(RadioButton);
Vue.use(Checkbox);
Vue.use(CheckboxButton);
Vue.use(CheckboxGroup);
Vue.use(Switch);
Vue.use(Select);
Vue.use(Option);
Vue.use(OptionGroup);
Vue.use(Button);
Vue.use(ButtonGroup);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(DatePicker);
Vue.use(TimeSelect);
Vue.use(TimePicker);
Vue.use(Popover);
Vue.use(Tooltip);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Tag);
Vue.use(Tree);
Vue.use(Alert);
Vue.use(Slider);
Vue.use(Icon);
Vue.use(Row);
Vue.use(Col);
Vue.use(Upload);
Vue.use(Progress);
Vue.use(Badge);
Vue.use(Card);
Vue.use(Rate);
Vue.use(Steps);
Vue.use(Step);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Cascader);
Vue.use(ColorPicker);
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Footer);

Vue.use(Loading.directive);

Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;