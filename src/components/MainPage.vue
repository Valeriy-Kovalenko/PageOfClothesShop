<template>
  <div class="content">
    <Header></Header>
    <ItemInformation></ItemInformation>
    <ItemAnalogues></ItemAnalogues>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from './Header.vue';
  import ItemInformation from './ItemInformation.vue';
  import ItemAnalogues from './ItemAnalogues';
  import Footer from './Footer';

  export default {
    name: 'mainPage',
    components: { Footer, ItemInformation, ItemAnalogues, Header },
    data() {
      return {
        oldScrollY: 0,
      };
    },
    created() {
      window.addEventListener('scroll', this.changeHeaderPosition);
    },
    methods: {
      changeHeaderPosition() {
        const headerElement = document.querySelector('.content').childNodes[0];
        const mainInformationElement = document.querySelector('.content').childNodes[1];

        if (this.oldScrollY < window.scrollY) {
          headerElement.style.position = 'relative';
          mainInformationElement.style.marginTop = '0';
        } else {
          headerElement.style.position = 'fixed';
          mainInformationElement.style.marginTop = headerElement.offsetHeight + 'px';
        }

        this.oldScrollY = window.scrollY;
      },
    },
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

  @media (max-width: 26rem) {
    .content {
      max-width: 25rem;
    }
  }
</style>
