<script>
import SectionProduct from './SectionProduct.vue';
    export default {
        components:{
            SectionProduct
        },
        data() {
            return {
            
            }
        }
    }
</script>


<template>
    <main>
        <div class="container">
            <SectionProduct/>
        </div>
    </main>
</template>


<style lang="scss" scoped>
    main{
        padding: 50px 0;
        //mixin per aggiungere bg-image
        @include ms-bg-image('../assets/sfondo-molisana.jpg')
    }
</style>