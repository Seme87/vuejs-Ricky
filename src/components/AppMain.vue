<script>
import axios from 'axios';
import { store } from '../store';

import Searchbar from './Searchbar.vue';
import SectionCharacters from './SectionCharacters.vue';
import CardCharacter from './CardCharacter.vue';

export default {
  components: {
    Searchbar,
    SectionCharacters,
    CardCharacter

  },
  data() {
    return {
      store,
    };
  },
  methods: {
    async getCharacther(url) {
      try {
        const res = await fetch(url || this.store.currentUrl);
        if (!res.ok) throw new Error('Errore durante la richiesta');
        const data = await res.json();
        const { results, info } = data;

        this.store.characters = results;
        this.store.nextUrl = info.next;
        this.store.prevUrl = info.prev;
      } catch (error) {
        console.error(error);
      }
    },
    handleNext() {
      if (this.store.nextUrl) {
        this.getCharacther(this.store.nextUrl);
      }
    },
    handlePrev() {
      if (this.store.prevUrl) {
        this.getCharacther(this.store.prevUrl);
      }
    },
    async searchBar(action = ''){
        if (action === 'reset') {
        // Resetta i campi di ricerca
        this.store.searchText = '';
        this.store.status = '';
        this.getCharacther(this.store.currentUrl); // Ricarica la lista completa
        return;
        }

        try {
            const response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${this.store.searchText}&status=${this.store.status}`)
            const {info, results} = response.data;
            this.store.characters = results;
            // Modifica gli URL di paginazione per includere i parametri di ricerca
            this.store.nextUrl = info.next;
            this.store.prevUrl = info.prev;

        } catch (error) {
            this.store.characters = '';
        }
    }
  },
  created() {
    this.getCharacther();
  },
};
</script>

<template>
  <main class="py-5 flex-grow-1">
    <div class="container">
      <Searchbar @search="searchBar" />
      <SectionCharacters v-if="this.store.characters" @prev="handlePrev" @next="handleNext" />
      <div v-else class=" error_wrapped text-center mt-5 fs-3">
        <CardCharacter class="items"/>
        <p class="items">"Hmph! Io, Warlock, ho guardato nei meandri del multiverso... ma non ho trovato nulla per la tua ricerca! Sicuro di non aver digitato qualcosa di sbagliato? Forse vuoi provare di nuovo, mortale."</p>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.error_wrapped{
    display: flex;
    justify-content: center;
    
    padding: 100px 0;
    
}
</style>
