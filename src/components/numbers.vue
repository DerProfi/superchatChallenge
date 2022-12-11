<template>
    <div v-for="(item, index) in numbers" class="numbers__container">
        <input type="checkbox" :id="index" class="numbers__checkbox" v-model="item.check">
        <p class="numbers__number">{{item.number}}</p>
    </div>
    <p>Total: {{getSum}}</p>
    <button @click="deleteCheckedBoxes">delete</button>
</template>

<script lang="ts">
export default {
  data() {
    return {
      numbers: [{id: 1,
                number: 2,
                check: false},
                {id: 2,
                number: 2,
                check: false},
                {id: 3,
                number: 3,
                check: false},
                {id: 4,
                number: 2,
                check: false},
                {id: 5,
                number: 2,
                check: false},
                {id: 6,
                number: 2,
                check: false},
                {id: 7,
                number: 2,
                check: false},
                {id: 8,
                number: 2,
                check: false},
                {id: 9,
                number: 2,
                check: false},
                {id: 10,
                number: 2,
                check: false},

            ]
    };
  },
  methods: {
    generateNumbers: function() {
        for (let i = 0; i < 10; i++) {
            this.numbers[i].number = (Math.floor(Math.random()* 10))
        }
    },
    deleteCheckedBoxes() {
        if (window.confirm("Are you sure you want to delete the number?"))
        this.numbers = this.numbers.filter((number) => !number.check)
    },
  },
  computed: {
    getSum() {
        let sum = 0;
        for (let i = 0; i < this.numbers.length; i++){
            sum = sum + this.numbers[i].number
            console.log(sum)
        }
        return sum
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