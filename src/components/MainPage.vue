<template>
  <div class="content">
    <Transition name="slide-fade">
      <Header v-show="showHeader" @toggle-modal-button="handleToggle" :is-modal-visible="isModalVisible"></Header>
    </Transition>
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
    data: () => ({
      oldScrollY: 0,
      showHeader: true,
      isModalVisible: false,
    }),
    created() {
      const _ = require('lodash');
      window.addEventListener(
        'scroll',
        _.throttle(() => {
          console.log(window.scrollY < 30 && !this.isModalVisible);
          if (window.scrollY < 30 || this.isModalVisible) {
            return;
          }
          const scrollingDown = window.scrollY > this.oldScrollY;
          this.oldScrollY = window.scrollY;
          if (scrollingDown) {
            this.showHeader = false;
            return;
          }
          this.showHeader = true;
        }, 100)
      );
    },
    methods: {
      handleToggle(value) {
        this.isModalVisible = value;
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

  @media (max-width: 28rem) {
    .content {
      max-width: 28rem;
    }
  }

  .slide-fade-enter-from {
    transform: translateY(-35px);
  }

  .slide-fade-enter-active {
    transition: all 0.5s ease;
  }

  .slide-fade-enter-to {
    transform: translateY(0);
  }

  .slide-fade-leave-from {
    transform: translateY(0);
  }

  .slide-fade-leave-active {
    transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
  }

  .slide-fade-leave-to {
    transform: translateY(-35px);
  }
</style>
