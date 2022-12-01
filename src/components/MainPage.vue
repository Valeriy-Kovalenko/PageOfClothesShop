<template>
  <div class="content">
    <Header></Header>
    <ItemInformation></ItemInformation>
    <ItemAnalogues></ItemAnalogues>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./Header.vue";
import ItemInformation from "./ItemInformation.vue";
import ItemAnalogues from "./ItemAnalogues";
import Footer from "./Footer";

export default {
  name: "mainPage",
  components: {Footer, ItemInformation, ItemAnalogues, Header },
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
