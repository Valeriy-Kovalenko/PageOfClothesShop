<template>
  <nav class="nav">
    <router-link to="/" class="nav__logo">
      <span>LOGO</span>
    </router-link>
    <div class="nav__items">
      <router-link to="null" class="nav__item">
        <img src="../assets/user.svg" alt="user-profile" />
      </router-link>
      <router-link to="null" class="nav__item">
        <img src="../assets/heart.svg" alt="user-profile" />
      </router-link>
      <router-link to="null" class="nav__item">
        <img src="../assets/bag.webp" alt="user-profile" />
      </router-link>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'TheHeader',
  };
</script>

<style scoped>
  .nav {
    width: 100%;
    height: 2.6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid lightgrey;
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
    height: 16px;
    width: 16px;
    vertical-align: middle;
  }

  .nav__item img:hover {
    background-color: #e0e0e0;
    box-shadow: 0 0 4px 4px rgb(215, 211, 211);
  }
</style>
