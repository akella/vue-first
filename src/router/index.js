import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/pages/Homepage'
import SinglePost from '@/pages/SinglePost'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/post',
      name: 'SinglePost',
      component: SinglePost
    }
  ]
})
