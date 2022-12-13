<template>
    <div class="numbers">
        <div v-for="object in mainStore.unchecked" class="numbers__number">
            <input type="checkbox" class="numbers__checkbox" v-model="object.check">
            <p class="numbers__number">{{object.number}}</p>
        </div>
        <hr>
        <p></p>
        <p>Total: {{mainStore.sum}}</p>
        <hr>
    </div>
</template>

<script setup lang="ts">
import { useMainStore } from '../../store/index'

const mainStore = useMainStore()

</script>

<style lang="scss">
@import '../src/styles/main.scss';

.numbers{
    outline: 1px solid red;
    height: 550px;
}
.numbers__number{
    outline: 1px solid green;
    display: flex;
    align-items: center;
    justify-content: center;
}

</style>