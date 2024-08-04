<template>
  <div class="character-page">
    <div v-if="state.isLoading">Estoy Cargando, espere...</div>
    <div class="container" v-else>
      <div v-if="state.character">
        <div class="character">
          <img :src="state.character.image" alt="" />
          <div class="name">{{ state.character.name }}</div>
          <div>Species: {{ state.character.species }}</div>
          <div>Status: {{ state.character.status }}</div>
          <div>Gender: {{ state.character.gender }}</div>
          <div>Location: {{ state.character.location.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import type { State } from '@/store/state/types'
import { useStore } from 'vuex'
import type { Store } from 'vuex/types/index.js'

const store: Store<State> = useStore()
const state = store.state

store.dispatch('getCharacterRickAndMorty', useRoute().params.id)
</script>

<style>
.character-page {
  min-height: 100vh;
}
.container {
  display: flex;
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
