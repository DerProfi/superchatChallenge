<template>
    <div v-for="object in objects" class="numbers__container">
        <input type="checkbox" class="numbers__checkbox" v-model="object.check">
        <p class="numbers__number">{{object.number}}</p>
    </div>
    <hr>
    <p>Total: {{getSum}}</p>
    <button @click="deleteCheckedBoxes">delete</button>
    <button @click="generateObjects">reset</button>
    <button @click="postRequest">send</button>
</template>

<script lang="ts">
import type { PropType } from "vue";
import { api } from "../../services/post";
import type { ObjectNumbers } from "../types/numbers"

export default {
  data() {
    return {
        objects: [] as PropType<ObjectNumbers> 
    };
  },
  methods: {
    generateObjects: function(){
        for (let i = 0; i < 10; i++) {
            this.objects[i] = {'number': (Math.floor(Math.random()* 10)), 'check': false} 
        }
    },
    deleteCheckedBoxes() {
        if (window.confirm("Are you sure you want to delete the number?"))
        this.objects = this.objects.filter((object) => !object.check)
    },
    postRequest() {
        api(this.getSum);
    }
  },
  computed: {
    getSum() {
        let sum = 0;
        for (let i = 0; i < this.objects.length; i++){
            sum = sum + this.objects[i].number
        }
        return sum
    }
  },
  created(){
    this.generateObjects()
  }
};
</script>

<style scoped lang="scss">
.numbers{
    &__container{
        display: flex;
    }
}
</style>