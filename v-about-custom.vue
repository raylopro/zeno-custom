<template>
  <main class="bg-gray-100">
    <el-hero
      v-if="setting('about.hero')"
      :align="`left`"
      :subheadline="setting('about.hero.pretitle')"
      :headline="setting('about.hero.title')"
      class="text-left"
    >
      <template v-slot:hero-content>
        <div v-formatted-text="setting('about.hero.content')" class="content entry-content" />
      </template>
    </el-hero>

    <section class="max-w-6xl mx-auto px-4 py-16 md:px-8">
      <div class="flex flex-col md:flex-row md:flex-wrap">
        <div class="w-full relative w-full lg:w-2/5">
          <img
            v-if="setting('about.valuesImage1')"
            :src="setting('about.valuesImage1')"
            class="w-full shadow-xl rounded"
          />
          <img
            v-if="setting('about.valuesImage2')"
            :src="setting('about.valuesImage2')"
            class="w-full relative mt-8 bottom-0 right-auto left-0 shadow-xl rounded lg:w-2/3 lg:mt-0 lg:absolute lg:-ml-20"
          />
        </div>
        <div class="w-full pt-8 lg:pt-0 md:pl-16 lg:w-3/5">
          <div
            v-if="setting('about.valuesTitle')"
            class="relative z-10 px-4 py-6 rounded bg-white shadow-lg md:px-4 md:mx-8"
          >
            <h2
              class="font-normal tracking-tight leading-tight text-2xl text-purple-500 md:text-3xl"
            >{{ setting('about.valuesTitle') }}</h2>
          </div>

          <div
            v-if="setting('about.values')"
            class="rounded-lg -mt-8 p-8 pt-12 border-2 border-purple-500 flex flex-col md:flex-row md:flex-wrap"
          >
            <div v-for="(item, index) in setting('about.values')" :key="index" class="w-full my-2">
              <h2
                v-if="item.title"
                class="font-normal tracking-tight text-2xl text-purple-900"
              >{{ item.title }}</h2>
              <div
                v-if="item.content"
                v-formatted-text="item.content"
                class="text-lg text-gray-600"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-white">
      <div class="max-w-6xl mx-auto px-8">
        <div class="max-w-4xl mx-auto pb-6 text-center md:pb-12 md:w-full">
          <h3
            v-if="setting('about.profile.pretitle')"
            v-formatted-text="setting('about.profile.pretitle')"
            class="custom-uppercase text-purple-500"
          />
          <h1
            v-if="setting('about.profile.title')"
            class="font-normal tracking-tight text-3xl lg:text-4xl text-purple-900"
          >{{ setting("about.profile.title") }}</h1>
        </div>

        <section class="max-w-3xl mx-auto flex flex-col rounded p-8 bg-gray-100 md:flex-row">
          <div class="w-full md:w-2/5">
            <img
              v-if="setting('about.profile.photo')"
              :src="setting('about.profile.photo')"
              :alt="setting('about.profile.name')"
              class="w-full rounded mx-auto mb-8 border border-gray-300 md:w-4/5"
            />
          </div>
          <div class="w-full bg-gray-100 md:w-3/5">
            <h2
              v-if="setting('about.profile.position')"
              v-formatted-text="setting('about.profile.position')"
              class="block text-left custom-uppercase mb-0 text-purple-500"
            />
            <h1
              v-if="setting('about.profile.name')"
              v-formatted-text="setting('about.profile.name')"
              class="block text-left font-normal tracking-tight mb-3 text-2xl"
            />
            <div
              v-if="setting('about.profile.content')"
              v-formatted-text="setting('about.profile.content')"
              class="text-lg text-gray-600"
            />
          </div>
        </section>
      </div>
    </section>

    <section v-if="setting('about.team')" class="py-16 bg-white">
      <div class="max-w-6xl mx-auto px-8">
        <div class="max-w-4xl mx-auto pb-6 text-center md:pb-12 md:w-full">
          <h3
            v-if="setting('about.team.pretitle')"
            class="custom-uppercase text-purple-500"
          >{{ setting("about.team.pretitle") }}</h3>
          <h1
            v-if="setting('about.team.title')"
            class="font-normal tracking-tight text-3xl lg:text-4xl text-purple-900"
          >{{ setting("about.team.title") }}</h1>
        </div>
        <div v-if="setting('about.team.members')" class="flex flex-col md:flex-row md:flex-wrap">
          <div
            v-for="(member, index) in setting('about.team.members')"
            :key="index"
            class="w-full p-4 md:w-1/3"
          >
            <div class="p-8 rounded-lg bg-gray-100">
              <img
                v-if="member.photo"
                :src="member.photo"
                :alt="member.name"
                class="w-4/5 rounded-full mx-auto border border-gray-300"
              />
              <el-member :name="member.name" :title="member.title">
                <template v-slot:content>
                  <div v-if="member.content" v-formatted-text="member.content" class="text-lg" />
                </template>
              </el-member>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16">
      <div class="max-w-6xl mx-auto px-8">
        <div class="max-w-4xl mx-auto pb-6 text-center md:pb-12 md:w-full">
          <h3
            v-if="setting('about.location.pretitle')"
            v-formatted-text="setting('about.location.pretitle')"
            class="custom-uppercase text-purple-500"
          />
          <h1
            v-if="setting('about.location.title')"
            class="font-normal tracking-tight text-3xl lg:text-4xl text-purple-900"
          >{{ setting("about.location.title") }}</h1>
        </div>
        <div class="relative">
          <img
            v-if="setting('about.location.map')"
            :src="setting('about.location.map')"
            :alt="setting('about.location.title')"
            class="w-full md:w-4/5 mx-auto"
          />
          <img
            v-if="setting('about.location.photo1')"
            :src="setting('about.location.photo1')"
            class="hidden w-full relative top-0 right-auto left-0 shadow-xl rounded lg:block lg:w-1/4 lg:mt-20 lg:-ml-20 lg:absolute lg:z-10"
          />
          <img
            v-if="setting('about.location.photo2')"
            :src="setting('about.location.photo2')"
            class="hidden w-full relative mt-8 bottom-0 right-auto left-0 shadow-xl rounded lg:block lg:w-2/5 lg:mt-0 lg:absolute lg:ml-32"
          />
        </div>
      </div>
    </section>

    <site-cta />
  </main>
</template>

<script lang="ts">
import { setting } from "@factor/api"

import Vue from "vue"
export default Vue.extend({
  components: {
    "el-member": () => import("./el/member.vue"),
    "el-hero": () => import("./el/hero.vue"),
    "site-cta": () => import("./el/cta.vue")
  },
  data() {
    return {
      loading: true
    }
  },
  methods: {
    setting
  },
  metaInfo() {
    return {
      title: setting("about.meta.title"),
      description: setting("about.meta.description"),
      image: setting("about.meta.image")
    }
  }
})
</script>