<template>
  <footer class="footer">
    <div class="footer__information">
      <p class="footer__information__header">Покупателям</p>
      <p>Каталог</p>
      <p>Акции</p>
      <p>Бренды</p>
    </div>
    <div class="footer__about">
      <p class="footer__about__header">О нас</p>
      <p>О компании</p>
      <p>Новости</p>
      <p>Команда</p>
    </div>
    <div class="footer__subscription">
      <p class="footer__subscription__header">Узнайте первыми о новинках и акциях</p>
      <div class="footer__subscription__input">
        <input type="email" placeholder="Адрес электронной почты" />
        <img src="../assets/close-icon.svg" alt="close" />
        <button>Подписаться</button>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'TheFooter',
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
  }

  div .footer__information__header,
  div .footer__about__header,
  div .footer__subscription__header {
    font-size: 16px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    line-height: 24px;
    margin: 0 0 1rem 0;
  }

  .footer__subscription__input {
    position: relative;
    display: flex;
    align-items: end;
    flex-direction: column;
    margin-top: 1.8rem;
  }

  .footer__subscription__input input {
    padding: 1rem;
    border: none;
    width: 100%;
    border-bottom: 1px solid #C4C4C4;
    margin-bottom: 2.1rem;
  }

  .footer__subscription__input img {
    position: absolute;
    height: 0.5rem;
    top: 20%;
    right: 3%;
  }

  .footer__subscription__input button {
    background-color: white;
    width: 150px;
    height: 36px;
    border: 1px solid #333333;
  }
</style>
