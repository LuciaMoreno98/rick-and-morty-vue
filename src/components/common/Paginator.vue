<template>
  <div class="flex">
    <div
      class="page page-number"
      v-if="state.currentPage > 2"
      @click="state.currentPage !== 1 && changePage(1)"
    >
      1
    </div>
    <div class="page default-pointer" v-if="state.currentPage > 3">...</div>
    <div class="flex" v-if="state.currentPage > 2">
      <div class="page page-number" @click="changePage(state.currentPage - 1)">
        {{ state.currentPage - 1 }}
      </div>
      <div class="page default-pointer selected">{{ state.currentPage }}</div>
      <div
        class="page page-number"
        v-if="state.currentPage < state.totalPages - 1"
        @click="changePage(state.currentPage + 1)"
      >
        {{ state.currentPage + 1 }}
      </div>
    </div>
    <div class="flex" v-else>
      <div
        :class="`${state.currentPage === 1 ? 'page default-pointer selected' : 'page page-number'}`"
        @click="state.currentPage !== 1 && changePage(1)"
      >
        1
      </div>
      <div
        :class="`${state.currentPage === 2 ? 'page default-pointer selected' : 'page page-number'}`"
        @click="state.currentPage !== 2 && changePage(2)"
      >
        2
      </div>
      <div
        :class="`${state.currentPage === 3 ? 'page default-pointer selected' : 'page page-number'}`"
        @click="state.currentPage !== 3 && changePage(3)"
      >
        3
      </div>
    </div>
    <div class="page default-pointer" v-if="state.currentPage < state.totalPages - 1">...</div>
    <div
      class="page page-number"
      v-if="state.currentPage < state.totalPages - 1"
      @click="changePage(state.totalPages)"
    >
      {{ state.totalPages }}
    </div>
  </div>
</template>

<script setup lang="ts">
import type { State } from '@/store/state/types'
import { useStore } from 'vuex'
import type { Store } from 'vuex/types/index.js'

const store: Store<State> = useStore()
const state = store.state

const changePage = (number: number) => {
  store.dispatch('putCurrentPage', number)
}
</script>

<style>
.flex {
  display: flex;
}
.page {
  margin: 4px;
  padding: 4px;
  border: solid 1px;
  height: 32px;
  width: 32px;
  text-align: center;
  cursor: pointer;
}
.page-number:hover {
  background-color: gray;
}
.selected {
  background-color: hsla(160, 100%, 37%, 0.2);
}
.default-pointer {
  cursor: default;
}
</style>
