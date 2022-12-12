<template>
  <nav class="nav" v-if="!isModalVisible">
    <router-link to="/" class="nav__logo">
      <span>LOGO</span>
    </router-link>
    <div class="nav__items">
      <router-link to="/" class="nav__item">
        <img src="../assets/user.svg" alt="user-profile" />
      </router-link>
      <router-link to="/" class="nav__item">
        <img src="../assets/favorite.svg" alt="user-profile" />
      </router-link>
      <router-link to="/" class="nav__item">
        <img src="../assets/bag.svg" alt="user-profile" />
      </router-link>
      <button class="nav__item toggle-button" @click="toggleModalButton">
        <img src="../assets/menu.svg" />
      </button>
    </div>
  </nav>
  <nav class="mobile-nav" v-else>
    <teleport to="body">
      <div class="backdrop" v-if="isModalVisible" @click="toggleModalButton"></div>
    </teleport>
    <img src="../assets/close-icon.svg" @click="toggleModalButton" />
    <span>Постельное бельё</span>
    <span>Одежда для дома</span>
    <span>Одежда для улицы</span>
    <span>Выход</span>
  </nav>
</template>

<script>
  export default {
    name: 'TheHeader',
    props: {
      isModalVisible: {
        type: Boolean,
        required: true,
      },
    },
    methods: {
      toggleModalButton() {
        this.$emit('toggle-modal-button', !this.isModalVisible);
      },
    },
  };
</script>

<style scoped>
  .nav {
    top: 0;
    position: fixed;
    width: 100%;
    max-width: 1390px;
    height: 2.6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid lightgrey;
    background-color: white;
    z-index: 2;
  }

  .nav__logo {
    text-decoration: none;
    color: black;
  }

  .nav__logo span {
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    font-weight: 700;
  }

  .nav__items {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .nav__item img {
    margin: 0 0.9rem;
    height: 1rem;
    width: 1rem;
    vertical-align: middle;
  }

  img:hover {
    background-color: #e0e0e0;
    box-shadow: 0 0 4px 4px rgb(215, 211, 211);
  }

  .toggle-button {
    display: none;
  }

  @media (max-width: 28rem) {
    .mobile-nav {
      width: 100%;
      display: flex;
      flex-direction: column;
      padding: 1.4rem 1.5rem 1.9rem 1.9rem;
      position: fixed;
      background-color: white;
      z-index: 2;
    }

    .mobile-nav span {
      font-family: 'Open Sans', sans-serif;
      font-size: 12px;
      line-height: 1rem;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      margin-top: 1.9rem;
      cursor: pointer;
    }

    .mobile-nav span:hover {
      text-decoration: underline;
    }

    .mobile-nav img {
      height: 1rem;
      width: 1rem;
      align-self: end;
      cursor: pointer;
    }

    .toggle-button {
      background: transparent;
      border: none;
      cursor: pointer;
      padding: 0;
      display: block;
    }

    .backdrop {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      overflow: hidden;
      z-index: 1;
      background: rgba(0, 0, 0, 0.5);
      transition: opacity 0.2s linear;
    }
  }
</style>
