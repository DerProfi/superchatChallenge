<template>
    <div>
    <button class="button" @click="mainStore.generateObjects">generate</button>
    <button class="button" @click="mainStore.deleteChecked">delete</button>
    <button class="button" @click="postRequest">send</button>
    </div>
</template>

<script setup lang="ts">
import { useMainStore } from '../../store/index'
import { api } from "../../services/post";

const mainStore = useMainStore()

function postRequest(){
  api(mainStore.sum)
}
</script>

<style lang="scss">
@import '../src/styles/main.scss';

</style>