<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
};
</script>


<template>
    <div class="card h-100 border-0 shadow rounded-2">
        <img  :src="image" class="card-img-top h-md-75" alt="...">
        <div class="card-body">
            <h5 class="card-title text-center m-0">{{ label }}</h5>
        </div>
    </div>
</template>



<style lang="scss" scoped>
.card{
    .card-body{
        border: 1px solid $ms-color-primary;
    }
}
</style>