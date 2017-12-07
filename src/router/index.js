import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'

Vue.use(Router)

// require.ensure的写法就是可以分开打包了 异步加载
export default new Router({
  routes: [
    {
      path: '/',
      component: App,
      children: [{
        path: '',
        component: r => require.ensure([], () => r(require('../components/Home')), 'Home')
      }, {
        path: '/item',
        component: r => require.ensure([], () => r(require('../components/Item')), 'Item')
      }, {
        path: '/score',
        component: r => require.ensure([], () => r(require('../components/Score')), 'Score')
      }]
    }
  ]
})
