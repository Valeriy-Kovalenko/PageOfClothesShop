<template>
  <footer class="footer">
    <div class="footer__information information">
      <p class="information__header">Покупателям</p>
      <p>Каталог</p>
      <p>Акции</p>
      <p>Бренды</p>
    </div>
    <div class="footer__about">
      <p class="about__header">О нас</p>
      <p>О компании</p>
      <p>Новости</p>
      <p>Команда</p>
    </div>
    <div class="footer__subscription subscription">
      <p class="subscription__header">Узнайте первыми о новинках и акциях</p>
      <form class="subscription__input">
        <input type="email" placeholder="Адрес электронной почты" v-model="inputValue" :class="{ invalid: !isValid }" />
        <img src="../assets/close-icon.svg" alt="close" @click="clearInput" />
        <span v-if="!isValid">Пожалуйста, введите корректный адрес</span>
        <button @click.prevent="subscribe">Подписаться</button>
      </form>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'TheFooter',
    data() {
      return {
        isValid: true,
        inputValue: '',
      };
    },
    methods: {
      subscribe() {
        const partAfterAt = this.inputValue.split('@')[1];
        const AreThereLettersAfterDot = partAfterAt.split('.')[1];
        const inputIsValid =
          this.inputValue.includes('@') && partAfterAt.includes('.') && AreThereLettersAfterDot.length > 1;
        if (!inputIsValid) {
          this.isValid = false;
          setTimeout(() => (this.isValid = true), 2000);
        } else {
          this.clearInput();
        }
      },
      clearInput() {
        this.inputValue = '';
      },
    },
  };
</script>

<style scoped>
  .footer {
    width: 100%;
    margin-top: 6.4rem;
    margin-bottom: 4rem;
    display: flex;
    justify-content: space-around;
    color: #333333;
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
  }

  .footer p {
    font-size: 14px;
    margin: 0.5rem 0;
    cursor: pointer;
  }

  div .information__header,
  div .about__header,
  div .subscription__header {
    font-size: 16px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    line-height: 24px;
    margin: 0 0 1rem 0;
    cursor: auto;
  }

  .subscription__input {
    position: relative;
    display: flex;
    align-items: end;
    flex-direction: column;
    margin-top: 1.8rem;
  }

  .subscription__input input {
    padding: 0.8rem 1rem;
    border: none;
    width: 100%;
    border-bottom: 1px solid #c4c4c4;
  }

  .invalid {
    color: red;
    border: 2px solid red;
  }

  .subscription__input input:focus-visible {
    color: #333333;
    outline: none;
  }

  .subscription__input img {
    position: absolute;
    height: 0.5rem;
    top: 1.1rem;
    right: 0.4rem;
    cursor: pointer;
  }

  .subscription__input button {
    background-color: white;
    width: 150px;
    height: 36px;
    border: 1px solid #333333;
    margin-top: 2.1rem;
  }

  .subscription__input button:hover {
    background-color: #333333;
    color: white;
    transition: background-color 0.5s ease-out;
  }

  .subscription__input button:active {
    background-color: white;
    color: #333333;
  }

  .subscription__input span {
    align-self: center;
    font-size: 0.6rem;
  }
</style>
