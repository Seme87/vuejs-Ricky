import { reactive } from "vue";

export const store = reactive({
    searchText:'',
    status:'',
    filterCharacter:[],
    characters:[],
    currentUrl: 'https://rickandmortyapi.com/api/character', // URL iniziale
    nextUrl: null, // URL della prossima pagina
    prevUrl: null, // URL della pagina precedente

});