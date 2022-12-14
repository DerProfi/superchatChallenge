import type { ObjectNumbers } from "@/types/numbers";
import { defineStore } from "pinia";

export const useMainStore = defineStore({
    id: 'mainStore',
    state: () => ({
        numbers: [] as ObjectNumbers,
        sum: 0,
    }),
    getters: {
        unchecked(): ObjectNumbers{
            return this.numbers.filter(t => !t.isChecked)
        }
    },
    actions: {
        generateObjects(){
            for (let i = 0; i < 10; i++) {
                this.numbers[i] = {'number': (Math.floor(Math.random()* 100)), 'check': false} 
            }
            this.getSum();
        },
        deleteChecked(){
            if (window.confirm("Are you sure you want to delete the number(s)?"))
                 this.numbers = this.numbers.filter((number) => !number.check)
            this.getSum();
        },
        getSum(){
            let sum = 0
            for (let i = 0; i < this.numbers.length; i++){
                sum = sum + this.numbers[i].number
            }
            this.sum = sum
        }
    }
})