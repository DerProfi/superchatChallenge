<template>
    <div class="container">
        <div>
            <h1>Welcome</h1>
            <p>Hello people, welcome to my take home challenge for superchat. If you have questions, please don't hesitate to contact me.</p>
            
            <router-link to="/numbers" @click="mainStore.generateObjects">To the challenge</router-link>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useMainStore } from '../../store/index'

const mainStore = useMainStore()

</script>

<style lang="scss">
@import '../src/styles/main.scss';

a {
    color: white;
    display: inline-block;
}
</style>