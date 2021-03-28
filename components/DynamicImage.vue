<template>
  <div>
    <img :src="getImg" width="500" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getImg"]),
  },
  data() {
    return {
      title: this.$store.getters.getImg,
    };
  },
};
</script>

<style>
</style>
