import Vue from 'vue'
import Router from 'vue-router'
import MyLowList from '@/components/MyLowList'
import MyTable from '@/components/MyTable'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/lowlist',
      name: 'lowlist',
      component: MyLowList
    },
    {
      path: '/',
      name: 'MyTable',
      component: MyTable
    }
  ]
})
