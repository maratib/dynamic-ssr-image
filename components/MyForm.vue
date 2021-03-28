<template>
  <div>
    <b-row class="container">
      <b class="mb-1">Color Blind</b>
      <b-form-select
        v-model="color"
        :options="colorOptions"
        @change="onChange($event)"
      ></b-form-select>
    </b-row>
    <b-row class="container">
      <b class="mb-1 mt-3">Tassel</b>
      <b-form-select
        v-model="tassel"
        :options="tasselOptions"
        @change="onChange($event)"
      ></b-form-select>
    </b-row>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  computed: {
    ...mapMutations(["setImg", "setForm"]),
    ...mapGetters(["getForm"]),
  },
  data() {
    return {
      color: 1,
      colorOptions: [
        { value: 1, text: "White" },
        { value: 2, text: "Gray" },
        { value: 3, text: "Brown" },
      ],
      tassel: 1,
      tasselOptions: [
        { value: 1, text: "With Tassel" },
        { value: 2, text: "No Tassel" },
      ],
    };
  },
  mounted() {
    const form = this.$store.getters.getForm;
    this.color = form.color;
    this.tassel = form.tassel;
  },
  methods: {
    onChange(event) {
      // console.log(this.color, this.tassel);

      const img = this.color.toString() + this.tassel.toString();
      this.$store.commit("setImg", img);
      this.$store.commit("setForm", {
        color: this.color,
        tassel: this.tassel,
      });

      this.$nextTick(() => {
        this.$nuxt.$loading.start();
        setTimeout(() => this.$nuxt.$loading.finish(), 500);
      });
    },
  },
};
</script>

<style>
</style>
