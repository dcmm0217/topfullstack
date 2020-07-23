import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _549ae6ec = () => interopDefault(import('..\\pages\\comments\\index.vue' /* webpackChunkName: "pages_comments_index" */))
const _3f480a08 = () => interopDefault(import('..\\pages\\courses\\index.vue' /* webpackChunkName: "pages_courses_index" */))
const _e6c38630 = () => interopDefault(import('..\\pages\\inspire.vue' /* webpackChunkName: "pages_inspire" */))
const _1136e738 = () => interopDefault(import('..\\pages\\courses\\_id.vue' /* webpackChunkName: "pages_courses__id" */))
const _2a104740 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/comments",
    component: _549ae6ec,
    name: "comments"
  }, {
    path: "/courses",
    component: _3f480a08,
    name: "courses"
  }, {
    path: "/inspire",
    component: _e6c38630,
    name: "inspire"
  }, {
    path: "/courses/:id",
    component: _1136e738,
    name: "courses-id"
  }, {
    path: "/",
    component: _2a104740,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
