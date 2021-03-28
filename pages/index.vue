<template>
  <div class="container p-5">
    <b-row>
      <b-col><dynamic-image /></b-col>
      <b-col><my-form /></b-col>
    </b-row>
  </div>
</template>

<script>
import DynamicImage from "~/components/DynamicImage.vue";
export default {
  components: { DynamicImage },
};
</script>

<style>
.container {
  background: white;
  border-radius: 6px;
}
</style>
