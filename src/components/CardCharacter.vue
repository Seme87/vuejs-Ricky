<script>
    export default {
        props:{
            image:{
                type:String,
                required:true,
                default:'https://rickandmortyapi.com/api/character/avatar/682.jpeg'
            },
            name:{
                type:String,
                required:true,
                default:'Warlock'
            },
            status:{
                type:String,
                required:true,
                default:'',
            },
            species:{
                type:String,
                required:true,
                default: ''
            },

        }
    }
</script>

<template>
    <div class="card_character  p-2">
        <div class="card_image">
            <img class=" shadow img-fluid w-100 rounded-circle" :src="image" alt="">
        </div>
        <div class="card_text text-center py-2">
            <h3 class="card_text--title mb-2">{{name}}</h3>
            <h5 class="card_text--type m-0">{{ status }}</h5>
            <h6 class="card_text--species">{{ species }}</h6>
        </div>
    </div>
</template>



<style lang="scss" scoped>

</style>