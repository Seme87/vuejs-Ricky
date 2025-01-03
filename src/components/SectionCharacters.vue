<script>
import { store } from '../store';
import CardCharacter from './CardCharacter.vue';

export default {
  components: {
    CardCharacter,
  },
  data() {
    return {
      store, // Accediamo allo store reattivo
    };
  },
};
</script>

<template>
  <section class="characters">
    <div class="row">
      <div
        v-for="character in store.characters"
        :key="character.id"
        class="col-xs-12 col-sm-6 col-md-4 col-lg-3"
      >
        <CardCharacter
          :image="character.image"
          :name="character.name"
          :species="character.species"
          :status="character.status"
        />
      </div>
    </div>

    <!-- Paginazione -->
    <nav aria-label="Navigazione pagine" class="mt-4">
      <ul class="pagination justify-content-center">
        <!-- Bottone Precedente -->
        <li class="page-item" :class="{ disabled: !store.prevUrl }">
          <button
            class="page-link"
            @click="$emit('prev')" 
            :disabled="!store.prevUrl"
          >
            Precedente
          </button>
        </li>

        <!-- Bottone Successivo -->
        <li class="page-item" :class="{ disabled: !store.nextUrl }">
          <button
            class="page-link"
            @click="$emit('next')" 
            :disabled="!store.nextUrl"
          >
            Successivo
          </button>
        </li>
      </ul>
    </nav>
  </section>
</template>

<style lang="scss" scoped></style>
