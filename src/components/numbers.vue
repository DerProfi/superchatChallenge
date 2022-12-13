<template>
    <div v-for="object in mainStore.unchecked" class="numbers__container">
        <input type="checkbox" class="numbers__checkbox" v-model="object.check">
        <p class="numbers__number">{{object.number}}</p>
    </div>
    <hr>
    <p></p>
    <p>Total: {{mainStore.sum}}</p>
    <hr>
</template>

<script setup lang="ts">
// import type { PropType } from "vue";
// import { api } from "../../services/post";
import type { ObjectNumbers } from "../types/numbers"
import { useMainStore } from '../../store/index'
import { onUpdated } from 'vue'


const mainStore = useMainStore()

onUpdated(() => {
    mainStore.generateObjects 
})
</script>

<style scoped lang="scss">
.numbers{
    &__container{
        display: flex;
    }
}
</style>