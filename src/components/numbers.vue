<template>
    <div v-for="(item, index) in numbers" class="numbers__container">
        <input type="checkbox" :id="index" class="numbers__checkbox">
        <p class="numbers__number">{{item}}</p>
    </div>
    <p>Total: {{getSum}}</p>
    <button @click="deleteCheckedBoxes">delete</button>
</template>

<script lang="ts">
export default {
  data() {
    return {
      numbers: [1,2,3,4,5,6,7,8,9,11,10],
    };
  },
  methods: {
    generateNumbers: function() {
        const newNumbers = []
        for (let i = 0; i < 10; i++) {
            newNumbers.push(Math.floor(Math.random()* 10))
        }
        this.numbers = newNumbers
    },
    deleteCheckedBoxes() {
       let checked = document.querySelectorAll('.numbers__checkbox:checked')
       console.log(checked.length)
       for (let i = 0; i < checked.length; i++){
        this.numbers.splice(checked[i].id, 1)
        checked[i].checked = false;
       }
    },
  },
  computed: {
    getSum() {
        const reducer = (accumulator: number, curr: number) => accumulator + curr;
        return this.numbers.reduce(reducer);
    }
  },
  created(){
    this.generateNumbers()
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