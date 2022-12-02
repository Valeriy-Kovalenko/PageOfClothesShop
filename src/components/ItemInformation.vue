<template>
  <main class="main">
    <TheDialog
      v-if="showModal"
      :item="currentItem"
      :amount="amountOfItems"
      :destination="destinationOfItem"
    ></TheDialog>
    <div class="main__images images">
      <img :src="currentImage" class="images__main-image" />
      <ul class="images__list list">
        <li
          v-for="image in images"
          :key="image.source"
          class="list__item"
          :class="{ 'list__item--active': image.picked }"
        >
          <img :src="image.source" :alt="image.alternate" @click="changeImage(image.source)" />
        </li>
      </ul>
    </div>
    <div class="main__information information">
      <div class="information__content content">
        <div class="content__description description">
          <h3 class="description__title">Пижама для девочек</h3>
          <div class="description__article">Арт. 02765/46</div>
        </div>
        <div class="content__reviews">
          <p>Отзывы</p>
          <img src="../assets/fiveStars.svg" />
          <p>14 отзывов</p>
          <router-link to="null">
            <img src="../assets/arrow.svg" />
          </router-link>
        </div>
        <div class="content__price price">
          <span class="price--new">800 ₽</span>
          <span class="price--old">1500 ₽</span>
          <router-link to="null">
            <img src="../assets/arrow.svg" />
          </router-link>
        </div>
        <div class="content__sales sales">
          <span class="sales__item">скидка -36%</span>
          <span class="sales__item">акция -20%</span>
        </div>
        <div class="content__size size">
          <select class="size__menu">
            <option value="" hidden>Выберите размер</option>
            <option v-for="size in sizes" :key="size" :value="size">{{ size }}</option>
          </select>
          <p class="size__information">Определить размер</p>
        </div>
        <div class="content__actions actions">
          <div class="actions__amount">
            <span @click="addItem">+</span>
            <span class="actions__counter">{{ amountOfItems }}</span>
            <span @click="removeItem">–</span>
          </div>
          <button class="actions__add-to-cart" @click="addItemTo('корзину')">Добавить в корзину</button>
          <button class="actions__add-to-favourite" @click="addItemTo('избранное')">
            <img src="../assets/whiteHeart.svg" alt="add to favourite!" />
          </button>
        </div>
        <p class="content__buy">Купить в один клик</p>
      </div>
      <div class="information__extra">
        <div v-for="(item, idx) in extraInformation" :key="idx">
          <img :src="item.source" />
          <span>{{ item.label }}</span>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  import TheDialog from './TheDialog.vue';

  export default {
    components: { TheDialog },
    data() {
      return {
        currentItem: 'Пижама для девочек',
        amountOfItems: 1,
        destinationOfItem: '',
        sizes: ['S', 'M', 'L', 'XL'],
        extraInformation: [
          { source: require('../assets/shirt.svg'), label: 'Описание товара' },
          { source: require('../assets/clock.svg'), label: 'Доставка и возврат' },
          { source: require('../assets/creditCard.svg'), label: 'Способ оплаты' },
        ],
        currentImage: require('../assets/yellowPajamas.svg'),
        showModal: false,
        images: [
          {
            source: require('../assets/yellowPajamas.svg'),
            alternate: 'yellow pajamas',
            picked: true,
          },
          {
            source: require('../assets/pinkPajamasOnGirlFrontView.svg'),
            alternate: 'pink pajamas on girl front view',
            picked: false,
          },
          {
            source: require('../assets/pinkPajamasOnGirlBackView.svg'),
            alternate: 'pink pajamas on girl back view',
            picked: false,
          },
          {
            source: require('../assets/pinkPajamasFrontView.svg'),
            alternate: 'pink pajamas front view',
            picked: false,
          },
          {
            source: require('../assets/pinkPajamasBackView.svg'),
            alternate: 'pink pajamas back view',
            picked: false,
          },
        ],
      };
    },
    methods: {
      changeImage(source) {
        this.images.find(img => img.source === this.currentImage).picked = false;
        this.currentImage = source;
        this.images.find(img => img.source === source).picked = true;
      },
      addItem() {
        this.amountOfItems++;
      },
      removeItem() {
        this.amountOfItems > 0 ? this.amountOfItems-- : (this.amountOfItems = 0);
      },
      addItemTo(destination) {
        this.destinationOfItem = destination;
        this.showModal = true;
        setTimeout(() => (this.showModal = false), 3000);
      },
    },
  };
</script>

<style scoped>
  .main {
    padding: 1.5rem 0;
    display: flex;
    width: 100%;
  }

  .main__images {
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .images__main-image {
    height: 878px;
  }

  .images__list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    padding: 0;
    margin: 1.2rem 1.2rem 0 1.2rem;
  }

  .list__item {
    list-style-type: none;
    margin: 0.2rem 0;
    opacity: 0.7;
  }



  .list__item--active {
    opacity: 1;
  }

  .list__item img {
    width: 70px;
    height: 91px;
    vertical-align: middle;
  }

  .main__information {
    margin-left: 16px;
    padding: 24px 0 24px 20px;
    flex-grow: 2;
  }

  .information__content {
    padding-bottom: 1.8rem;
    border-bottom: 0.5px solid #c4c4c4;
  }

  .description__title {
    font-family: 'Open Sans', sans-serif;
    font-size: 18px;
    font-weight: 600;
    margin-top: 0;
    margin-bottom: 8px;
  }

  .description__article {
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    font-size: 12px;
    color: #828282;
    margin: 0;
  }

  .content__reviews {
    margin-top: 1.1rem;
    display: flex;
  }

  .content__reviews p {
    margin: 0;
  }

  .content__price img:hover,
  .content__reviews img:hover {
    background-color: #e0e0e0;
    box-shadow: 0 0 4px 4px rgb(215, 211, 211);
  }

  .main__information img {
    height: 0.9rem;
    margin: 0 0.2rem 0 0.8rem;
  }

  .content__price {
    display: flex;
    align-items: center;
    margin-top: 2.8rem;
    margin-bottom: 0.8rem;
  }

  .price--new {
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    margin: 0 0.8rem 0 0;
  }

  .price--old {
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    text-decoration: line-through;
    color: #828282;
    margin: 0;
  }

  .content__sales {
    display: flex;
    font-family: 'Open Sans', sans-serif;
    font-size: 12px;
    margin-bottom: 2.1rem;
  }

  .content__sales span {
    border: 1px #333333 solid;
    padding: 0.3rem 0.5rem;
    margin: 0 0.6rem 0 0;
  }

  .content__size {
    margin-bottom: 2.5rem;
  }

  .size__menu {
    width: 315px;
    height: 44px;
    padding: 0.7rem 0.8rem 0.7rem 1rem;
  }

  .size__information,
  .content__buy {
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    text-decoration: underline;
    color: #333333;
    margin: 0.8rem 0 0 0;
    cursor: pointer;
  }

  .content__actions {
    display: flex;
  }

  .actions__amount {
    display: flex;
    width: 145px;
    height: 44px;
    padding: 0.8rem 1.2rem;
    background-color: #f2f2f2;
    cursor: pointer;
    user-select: none;
  }

  .actions__amount .actions__counter {
    margin: 0 1rem;
    width: 4rem;
    text-align: center;
  }

  .actions__amount span {
    margin: 0;
  }

  .actions__add-to-cart {
    width: 203px;
    height: 44px;
    border: 1px solid #333333;
    background-color: #333333;
    color: white;
    padding: 0.8rem 1.7rem;
    margin: 0 0.2rem 0 0.8rem;
  }

  .actions__add-to-cart:hover,
  .actions__add-to-favourite:hover {
    box-shadow: 1px 1px 2px 2px rgb(215, 211, 211);
    cursor: pointer;
    background-color: white;
    color: #333333;
    transition: background-color 0.5s ease-out;
  }

  .actions__add-to-cart:active,
  .actions__add-to-favourite:active {
    background-color: #333333;
    color: white;
  }

  .actions__add-to-favourite {
    width: 44px;
    background-color: #333333;
    position: relative;
    padding: 0;
    border: 1px solid #333333;
  }

  .actions__add-to-favourite img {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
  }

  .information__extra {
    padding-top: 1.7rem;
  }

  .information__extra div {
    display: flex;
    align-items: center;
    margin-bottom: 0.8rem;
    width: 100%;
  }

  .information__extra span {
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    text-decoration: underline;
    color: #333333;
    margin: 0;
    cursor: pointer;
  }

  .size__information:hover,
  .content__buy:hover,
  .information__extra span:hover {
    text-decoration: none;
  }

  .information__extra div img {
    height: 1.1rem;
    margin: 0 0.5rem 0 0;
  }
</style>
