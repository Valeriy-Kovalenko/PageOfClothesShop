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
        <div class="content__reviews reviews">
          <p>Отзывы</p>
          <img src="../assets/fiveStars.svg" class="reviews__stars" />
          <p>14 отзывов</p>
          <router-link to="/">
            <img src="../assets/arrow.svg" />
          </router-link>
        </div>
        <div class="content__price price">
          <span class="price--new">800 ₽</span>
          <span class="price--old">1500 ₽</span>
          <router-link to="/">
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
          <span class="size__information">Определить размер</span>
        </div>
        <div class="content__actions actions">
          <div class="actions__amount">
            <span @click="addItem">+</span>
            <span class="actions__counter">{{ amountOfItems }}</span>
            <span @click="removeItem">–</span>
          </div>
          <div class="actions__buttons buttons">
            <button class="buttons__add-to-cart" @click="addItemTo('корзину')">Добавить в корзину</button>
            <button class="buttons__add-to-favourite" @click="addItemTo('избранное')">
              <img src="../assets/whiteHeart.svg" alt="add to favourite!" />
            </button>
          </div>
        </div>
        <span class="content__buy">Купить в 1 клик</span>
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
    data: () => ({
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
    }),
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
    margin-top: 2.6rem;
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
    cursor: pointer;
  }

  .list__item--active {
    opacity: 1;
  }

  .list__item img {
    width: 4.4rem;
    height: 5.7rem;
    vertical-align: middle;
  }

  .main__information {
    margin-left: 1rem;
    padding: 1.5rem 0 1.5rem 0;
    flex-grow: 2;
    font-family: 'Open Sans', sans-serif;
  }

  .information__content {
    padding-left: 1.25rem;
    padding-bottom: 1.8rem;
    border-bottom: 0.5px solid #c4c4c4;
    display: flex;
    flex-direction: column;
  }

  .description__title {
    font-size: 1.1rem;
    font-weight: 600;
    margin-top: 0;
    margin-bottom: 0.5rem;
  }

  .description__article {
    font-size: 0.75rem;
    color: #828282;
  }

  .content__reviews {
    margin-top: 1.1rem;
    display: flex;
    align-items: center;
  }

  .content__reviews p {
    margin: 0;
  }

  .reviews__stars {
    margin: 0 0.2rem 0 0.8rem;
  }

  .content__reviews a img {
    margin-left: 0.5rem;
  }

  .content__price img:hover,
  .content__reviews img:hover {
    background-color: #e0e0e0;
    box-shadow: 0 0 4px 4px rgb(215, 211, 211);
  }

  .main__information img {
    height: 0.9rem;
  }

  .content__price {
    display: flex;
    align-items: center;
    margin: 2.8rem 0 0.8rem 0;
  }

  .content__price img {
    margin-left: 1.25rem;
  }

  .price--new {
    font-weight: 700;
    font-size: 1.5rem;
    margin-right: 0.8rem;
  }

  .price--old {
    font-size: 0.9rem;
    text-decoration: line-through;
    color: #828282;
  }

  .content__sales {
    display: flex;
    font-size: 0.75rem;
    margin-bottom: 2.1rem;
  }

  .content__sales span {
    border: 1px #333333 solid;
    padding: 0.3rem 0.5rem;
    margin-right: 0.6rem;
  }

  .content__size {
    margin-bottom: 2.5rem;
    display: flex;
    flex-direction: column;
  }

  .size__menu {
    width: 19.7rem;
    height: 2.75rem;
    padding: 0.7rem 0.8rem 0.7rem 1rem;
    background-color: white;
    border: 1px solid #333333;
  }

  .size__information,
  .content__buy {
    font-size: 0.9rem;
    text-decoration: underline;
    color: #333333;
    margin-top: 0.8rem;
    cursor: pointer;
  }

  .content__actions {
    display: flex;
  }

  .actions__amount {
    display: flex;
    align-items: center;
    width: 9rem;
    height: 2.75rem;
    padding: 0.8rem 1.2rem;
    background-color: #f2f2f2;
    cursor: pointer;
    user-select: none;
    font-size: 0.9rem;
  }

  .actions__amount .actions__counter {
    margin: 0 1rem;
    width: 4rem;
    text-align: center;
  }

  .actions__buttons {
    display: flex;
  }

  .buttons__add-to-cart {
    width: 12.7rem;
    height: 2.75rem;
    border: 1px solid #333333;
    background-color: #333333;
    color: white;
    padding: 0.8rem 1.7rem;
    margin: 0 0.2rem 0 0.8rem;
    font-family: inherit;
    font-size: 0.9rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .buttons__add-to-cart:hover,
  .buttons__add-to-favourite:hover {
    box-shadow: 1px 1px 2px 2px rgb(215, 211, 211);
    cursor: pointer;
    background-color: white;
    color: #333333;
    transition: all 0.5s ease-out;
  }

  .buttons__add-to-cart:active,
  .buttons__add-to-favourite:active {
    background-color: #333333;
    color: white;
  }

  .buttons__add-to-favourite {
    width: 2.75rem;
    background-color: #333333;
    position: relative;
    border: 1px solid #333333;
  }

  .buttons__add-to-favourite img {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
  }

  .information__extra {
    padding-top: 1.7rem;
    padding-left: 1.25rem;
  }

  .information__extra div {
    display: flex;
    align-items: center;
    margin-bottom: 0.8rem;
    width: 100%;
  }

  .information__extra span {
    font-size: 0.9rem;
    text-decoration: underline;
    color: #333333;
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

  @media (max-width: 28rem) {
    .main {
      flex-direction: column;
      padding: 0;
    }

    .images__main-image {
      height: auto;
    }

    .list__item img {
      width: 3.4rem;
      height: 3.7rem;
      vertical-align: middle;
    }

    .content__actions {
      flex-direction: column;
    }

    .actions__buttons {
      margin-top: 1rem;
    }

    .buttons__add-to-cart {
      margin: 0 0.2rem 0 0;
    }
  }
</style>
