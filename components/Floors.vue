<template>
  <div>
    <div style="min-height: 545px">
      <img :src="imgUrl" class="img-fluid" />
    </div>
    <b-row class="mt-4">
      <b-col>
        <b-btn
          variant="transparent"
          @click="changeImage(1)"
          class="p-0 mr-3 shadow-none"
          ><img src="img/1p.jpg" class="img-fluid"
        /></b-btn>
        <b-btn
          variant="transparent"
          @click="changeImage(2)"
          class="p-0 mr-3 shadow-none"
          ><img src="img/2p.jpg" class="img-fluid"
        /></b-btn>
        <b-btn
          variant="transparent"
          @click="changeImage(3)"
          class="p-0 mr-3 shadow-none"
          ><img src="img/3p.jpg" class="img-fluid"
        /></b-btn>
        <b-btn
          variant="transparent"
          @click="changeImage(4)"
          class="p-0 shadow-none"
          ><img src="img/4p.jpg" class="img-fluid"
        /></b-btn>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  computed: {
    ...mapMutations(["setCurrent"]),
    ...mapGetters(["getCurrent"]),
  },
  data() {
    return {
      current: 0,
      imgUrl: "img/1.jpg",
    };
  },
  mounted() {
    this.current = this.$store.getters.getCurrent;
    this.imgUrl = `img/${this.current}.jpg`;
  },
  methods: {
    changeImage(img) {
      this.$store.commit("setCurrent", img);
      this.current = img;
      this.$nextTick(() => {
        this.$nuxt.$loading.start();
        setTimeout(() => {
          this.$nuxt.$loading.finish();
          this.imgUrl = `img/${img}.jpg`;
        }, 1000);
      });
    },
  },
};
</script>

<style>
</style>
