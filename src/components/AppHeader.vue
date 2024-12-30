<script>
import AppLogo from './AppLogo.vue';

export default {

    components:{
        AppLogo,
    },
    data(){
        return{
            links:[
                {
                    label:'Home',
                    href:'#',
                    active:false
                },
                {
                    label:'Prodotti',
                    href:'#',
                    active:false
                },
                {
                    label:'Chi Siamo',
                    href:'#',
                    active:false
                },
                {
                    label:'Contatti',
                    href:'#',
                    active:false
                },
            ],
        }   
    },
    methods:{
        changeActive(i){
           this.links.forEach(el => el.active = false);
           this.links[i].active = true;
        }
    }
   
}

</script>


<template>
    <header class="text-center py-3 ">
        <AppLogo />
        <nav class="main-nav mt-3">
            <ul class="d-flex justify-content-center list-unstyled">
                <li @click="changeActive(index)" :class="{isActive:link.active}" v-for="(link,index) in links"><a :href="link.href">{{ link.label }}</a></li>
            </ul>
        </nav>
    </header>
</template>



<style lang="scss" scoped>

.main-nav {
    
    ul li a{
        text-decoration: none;
        color: $ms-color-primary;
        font-size: 18px;
        font-weight: 500;
    }

    li{
        padding: 5px 15px;
    }
    // li:hover{
    //     background-color: $ms-color-secondary;
    // }
}
</style>