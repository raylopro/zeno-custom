import { addFilter, setting, addContentRoutes } from "@factor/api"
import { Component } from "vue"

// CONTENT ROUTES
addContentRoutes({
  key: "zenoRoutes",
  routes: [
    {
      path: "/about",
      component: (): Promise<Component> => import("./v-about-custom.vue"),
      meta: { nav: true }
    }
  ]
})
