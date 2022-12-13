<template>
    <div>
        <h1>Welcome</h1>
        <p>Hello people, welcome to my take home challenge for superchat.</p>
        <p>If you have questions, please don't hesitate to contact me</p>
        <a href= "mailto:nothegger.leon@gmail.com">via mail</a>
        <p>or</p><a href="tel:+491778521504">via phone</a><p>.</p>
        <router-link to="/numbers" @click="mainStore.generateObjects">To the challenge</router-link>
    </div>
</template>

<script setup lang="ts">
import { useMainStore } from '../../store/index'

const mainStore = useMainStore()

</script>

<style scoped>

</style>