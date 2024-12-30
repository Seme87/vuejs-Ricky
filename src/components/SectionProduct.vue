<script>
import CardProduct from './CardProduct.vue';
    export default {
        components:{
            CardProduct,
        },
        data(){
            return{

                products:[
                    {
                        label:'Penne lisce',
                        image:'https://www.lamolisana.it/wp-content/uploads/2021/04/18-penne-lisce.webp',
    
                    },
                    {
                        label:'Mezze Penne Rigate',
                        image:'https://www.lamolisana.it/wp-content/uploads/2021/05/19-mezze-penne-rigate.webp',
    
                    },
                    {
                        label:'Mezze Penne Integrali',
                        image:'https://www.lamolisana.it/wp-content/uploads/2021/06/19-mezze-penne-rigate-integrali-1.webp',
    
                    },
                    {
                        label:' Penne Rigate',
                        image:'https://www.lamolisana.it/wp-content/uploads/2021/05/20-penne-rigate.webp',
    
                    }
                ]
            }
        }
    }
</script>


<template>
    <section class="product  py-3">
        <h1 class="text-center section-title mb-5">Section Product</h1>
        <div class="row gy-3">
            <div v-for="(pasta,index) in products" :key="index" class="col-sm-12 col-md-4 col-lg-3">
                <CardProduct :label="pasta.label" :image="pasta.image"/>
            </div>
            
        </div>
    </section>
</template>



<style lang="sass" scoped>

</style>