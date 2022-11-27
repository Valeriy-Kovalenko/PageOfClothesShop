<template>
  <main class="main">
    <div class="main__images">
      <img :src="currentImage" class="main__images__full" />
      <ul class="main__images__list">
        <li
          v-for="image in images"
          :key="image.source"
          class="list__item"
          :class="{ 'list__item--active': image.picked }"
        >
          <img
            :src="image.source"
            :alt="image.alternate"
            @click="changeImage(image.source)"
          />
        </li>
      </ul>
    </div>
    <div class="main__information">
      <div class="main__information__body">
        <div class="main__information__description description">
          <p class="description__title">Пижама для девочек</p>
          <p class="description__article">Арт. 02765/46</p>
        </div>
        <div class="main__information__reviews">
          <p>Отзывы</p>
          <img src="../assets/fiveStars.svg" />
          <p>14 отзывов</p>
          <router-link to="null">
            <img src="../assets/arrow.svg" />
          </router-link>
        </div>
        <div class="main__information__price">
          <p class="price__new">800 ₽</p>
          <p class="price__old">1500 ₽</p>
          <router-link to="null">
            <img src="../assets/arrow.svg" />
          </router-link>
        </div>
        <div class="main__information__sales">
          <div class="price__sale">
            <p>скидка -36%</p>
          </div>
          <div class="prise__promotion">
            <p>акция -20%</p>
          </div>
        </div>
        <div class="main__information__size">
          <select class="size__menu">
            <option value="chose">Выберите размер</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
          <p class="size__information">Определить размер</p>
        </div>
        <div class="main__information__adding">
          <div class="adding__amount">
            <p @click="addItem">+</p>
            <p class="adding__counter">{{ amountOfItems }}</p>
            <p @click="removeItem">–</p>
          </div>
          <button class="adding__button">Добавить в корзину</button>
          <button class="adding__favourite">
            <img src="../assets/whiteHeart.svg" alt="add to favourite!" />
          </button>
        </div>
        <p class="main__information__buy">Купить в один клик</p>
      </div>
      <div class="main__information__additional">
        <div>
          <img src="../assets/shirt.svg" />
          <p>Описание товара</p>
        </div>
        <div>
          <img src="../assets/clock.svg" />
          <p>Доставка и возврат</p>
        </div>
        <div>
          <img src="../assets/creditCard.svg" />
          <p>Способ оплаты</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      amountOfItems: 1,
      currentImage: require("../assets/yellowPajamas.svg"),
      images: [
        {
          source: require("../assets/yellowPajamas.svg"),
          alternate: "yellow pajamas",
          picked: true,
        },
        {
          source: require("../assets/pinkPajamasOnGirlFrontView.svg"),
          alternate: "pink pajamas on girl front view",
          picked: false,
        },
        {
          source: require("../assets/pinkPajamasOnGirlBackView.svg"),
          alternate: "pink pajamas on girl back view",
          picked: false,
        },
        {
          source: require("../assets/pinkPajamasFrontView.svg"),
          alternate: "pink pajamas front view",
          picked: false,
        },
        {
          source: require("../assets/pinkPajamasBackView.svg"),
          alternate: "pink pajamas back view",
          picked: false,
        },
      ],
    };
  },
  methods: {
    changeImage(source) {
      this.images.find((img) => img.source === this.currentImage).picked = false;
      this.currentImage = source;
      this.images.find((img) => img.source === source).picked = true;
    },
    addItem() {
      this.amountOfItems++;
    },
    removeItem() {
      this.amountOfItems > 0 ? this.amountOfItems-- : (this.amountOfItems = 0);
    },
  },
};
</script>

<style scoped>
.main {
  padding: 1.5rem 0;
  display: flex;
}

.main__images {
  display: flex;
  flex-direction: column;
  position: relative;
}

.main__images__full {
  height: 878px;
}

.main__images__list {
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
  border-bottom: 0.5px solid #c4c4c4;
}

.main__information__body {
  padding-bottom: 1.8rem;
  border-bottom: 0.5px solid #c4c4c4;
}

.description__title {
  font-family: "Open Sans", sans-serif;
  font-size: 18px;
  font-weight: 600;
  margin-top: 0;
  margin-bottom: 8px;
}

.description__article {
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-size: 12px;
  color: #828282;
  margin: 0;
}

.main__information__reviews {
  margin-top: 1.1rem;
  display: flex;
}

.main__information__reviews p {
  margin: 0;
}

.main__information img {
  height: 0.9rem;
  margin: 0 0.2rem 0 0.8rem;
}

.main__information__price {
  display: flex;
  align-items: center;
  margin-top: 2.8rem;
  margin-bottom: 0.8rem;
}

.price__new {
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  margin: 0 0.8rem 0 0;
}

.price__old {
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  text-decoration: line-through;
  color: #828282;
  margin: 0;
}

.main__information__sales {
  display: flex;
  font-family: "Open Sans", sans-serif;
  font-size: 12px;
  margin-bottom: 2.1rem;
}

.main__information__sales p {
  border: 1px #333333 solid;
  padding: 0.3rem 0.5rem;
  margin: 0 0.6rem 0 0;
}
.main__information__size {
  margin-bottom: 2.5rem;
}

.size__menu {
  width: 315px;
  height: 44px;
  padding: 0.7rem 0.8rem 0.7rem 1rem;
}

.size__information,
.main__information__buy {
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  text-decoration: underline;
  color: #333333;
  margin: 0.8rem 0 0 0;
}

.main__information__adding {
  display: flex;
}

.adding__amount {
  display: flex;
  width: 145px;
  height: 44px;
  padding: 0.8rem 1.2rem;
  background-color: #f2f2f2;
}

.adding__amount .adding__counter {
  margin: 0 1rem;
  width: 4rem;
  text-align: center;
}

.adding__amount p {
  margin: 0;
}

.adding__button {
  width: 203px;
  height: 44px;
  border: 1px solid #333333;
  background-color: #333333;
  color: white;
  padding: 0.8rem 1.7rem;
  margin: 0 0.2rem 0 0.8rem;
}

.adding__favourite {
  width: 44px;
  background-color: #333333;
  position: relative;
  padding: 0;
  border: 1px solid #333333;
}

.adding__favourite img {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
}

.main__information__additional {
  padding-top: 1.7rem;
}

.main__information__additional div {
  display: flex;
  align-items: center;
}

.main__information__additional p {
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  text-decoration: underline;
  color: #333333;
  margin: 0;
}

.main__information__additional div img {
  height: 1.1rem;
  margin: 0 0.4rem 0 0;
}
</style>
