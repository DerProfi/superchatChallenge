<template>
    <div class="numbers">
        <div v-for="object in mainStore.unchecked" class="numbers__box">
            <input type="checkbox" class="numbers__checkbox" v-model="object.check">
            <p class="numbers__number">{{object.number}}</p>
        </div>
    </div>
    <hr>
    <p>Total: {{mainStore.sum}}</p>
</template>

<script setup lang="ts">
import { useMainStore } from '../../store/index'

const mainStore = useMainStore()

</script>

<style lang="scss">
@import '../src/styles/main.scss';

.numbers{
    height: 550px;
    &__box{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 55px;
    }
    &__checkbox{
    margin-right: 10px;
    }
    &__number{
    width: 20px;
    }
}
</style>