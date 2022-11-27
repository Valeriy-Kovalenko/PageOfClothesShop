<template>
  <div class="content">
    <TheHeader></TheHeader>
    <ItemInformation></ItemInformation>
    <footer>XxX_THERE WILL BE FOOTER_XxX</footer>
  </div>
</template>

<script>
import TheHeader from "./TheHeader.vue";
import ItemInformation from "./ItemInformation.vue";

export default {
  name: "mainPage",
  components: { TheHeader, ItemInformation },
};
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1390px;
  margin: 0 auto;
}
</style>
