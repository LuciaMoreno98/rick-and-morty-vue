<template>
  <div class="search">
    <input v-model="state.search" class="input" type="text" />
    <button class="button" @click="search()">&#128269;</button>
  </div>
</template>

<script setup lang="ts">
import type { State } from '@/store/state/types'
import { useStore } from 'vuex'
import type { Store } from 'vuex/types/index.js'

const store: Store<State> = useStore()
const state = store.state

const search = () => {
  store.dispatch('getCharactersRickAndMorty')
}
</script>

<style>
.search {
  display: flex;
  justify-content: end;
  padding: 14px;
}
.input {
  font-size: 22px;
  background: hsla(160, 100%, 37%, 0.2);
  color: white;
  border: 0px;
  outline: none;
  padding: 4px;
}
.button {
  cursor: pointer;
  background-color: hsla(160, 100%, 37%, 1);
}
</style>
