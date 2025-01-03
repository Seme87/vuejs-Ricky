<script>
import {store} from '../store';

    export default {
        data(){
            return{
                store,
            }
        }
        
    }
</script>


<template>
    <form  class="d-flex justify-content-center my-4" @submit.prevent="$emit('search')">
        <input type="text" class="form-control w-auto" placeholder="Select Characters" v-model="store.searchText">
         <select class="form-select w-auto mx-3" v-model="store.status">
                <option value="" selected>Select Status</option>
                <option value="alive">Alive</option>
                <option value="dead">Dead</option>
                <option value="unknown">unknown</option> 
        </select>
        <button class="btn btn-primary w-auto me-3 " type="submit">Submit form</button>
        <button class="btn btn-secondary w-auto " type="reset" @click="$emit('search', 'reset')">Reset</button>
    </form>
</template>



<style lang="scss" scoped>

</style>