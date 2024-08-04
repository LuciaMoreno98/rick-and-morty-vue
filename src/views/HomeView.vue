<template>
  <div class="home">
    <h1 class="title">Rick And Morty</h1>
    <Search />
    <div v-if="state.isLoading">Estoy Cargando, espere...</div>
    <div class="container" v-else>
      <RouterLink
        :to="`character/${character.id}`"
        class="character"
        v-for="character in state.characters"
      >
        <img :src="character.image" alt="" />
        <div class="name">{{ character.name }}</div>
      </RouterLink>
    </div>
    <Paginator />
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { State } from '@/store/state/types'
import { useStore } from 'vuex'
import type { Store } from 'vuex/types/index.js'

import Paginator from '../components/common/Paginator.vue'
import Search from '../components/common/Search.vue'

const store: Store<State> = useStore()
const state = store.state

store.dispatch('getCharactersRickAndMorty')
</script>

<style>
.home {
  min-height: 100vh;
}

.title {
  text-align: center;
  font-weight: bold;
  color: white;
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.character {
  padding: 12px;
}

.name {
  text-align: center;
  font-weight: bold;
  font-size: 22px;
  color: white;
}
</style>
