<template>
  <div class="analogues">
    <div class="analogues__main-button">Посмотреть все стили</div>
    <div class="analogues__images images">
      <div
        v-for="image in images"
        :key="image.alternate"
        class="images__item"
        :class="{ images__main: image.isMain }"
        @mouseenter="changeHoverStatus($event)"
        @mouseleave="changeHoverStatus($event)"
      >
        <img :src="image.source" :alt="image.alternate" />
        <div class="active">
          <img src="../assets/list.svg" alt="все фото" class="active__list" />
          <div class="active__buy">
            <img src="../assets/whiteBag.svg" alt="купить" />
            <span>Узнай, что на мне</span>
          </div>
          <div class="active__likes">
            <img src="../assets/fullWhiteHeart.svg" alt="" />
            <span>{{ image.likes }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ItemAnalogues',
    data: () => ({
      images: [
        { source: 'https://i.ibb.co/pLB0P5Z/grey-Pajamas.webp', alternate: 'grey pajamas', likes: 200, isMain: true },
        { source: 'https://i.ibb.co/WxmRr2p/beige-Pajamas.webp', alternate: 'beige pajamas', likes: 57 },
        { source: 'https://i.ibb.co/mB6bWYm/bear.webp', alternate: 'bear toy', likes: 432 },
        {
          source: 'https://i.ibb.co/xJx4H75/greenish-Pajamas2.webp',
          alternate: 'greenish pajamas, sitting',
          likes: 119,
        },
        {
          source: 'https://i.ibb.co/Gv5Mf4d/greenish-Pajamas.webp',
          alternate: 'greenish pajamas, standing',
          likes: 135,
        },
      ],
    }),
    methods: {
      changeHoverStatus(event) {
        const hoverDivStyle = event.target.childNodes[1].style;
        const displayStatus = hoverDivStyle.display;
        displayStatus === 'none' || displayStatus === ''
          ? (hoverDivStyle.display = 'flex')
          : (hoverDivStyle.display = 'none');
      },
    },
  };
</script>

<style scoped>
  .analogues {
    margin-top: 2rem;
  }

  .analogues__main-button {
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    text-decoration: underline;
    color: #333333;
    text-align: center;
  }

  .analogues__main-button:hover {
    text-decoration: none;
    cursor: pointer;
  }

  .analogues__images {
    display: grid;
    grid-template-columns: 686px 335px 335px;
    grid-template-rows: 336px 336px;
    grid-gap: 1rem;
    margin-top: 2rem;
  }

  .images__item {
    position: relative;
  }

  .images__main {
    grid-row-start: 1;
    grid-row-end: 3;
  }

  .active {
    display: none;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.6;
    padding: 1rem;
  }

  .active span {
    font-family: 'Open Sans', sans-serif;
    font-size: 0.9rem;
    color: white;
    letter-spacing: 0.04em;
  }

  .active img {
    cursor: pointer;
  }

  .active__list {
    height: 1rem;
    align-self: end;
  }

  .active__buy {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .active__buy img {
    margin-bottom: 0.5rem;
    height: 2rem;
  }

  .active__likes {
    margin-bottom: 0.2rem;
    display: flex;
    align-items: center;
  }
  .active__likes img {
    height: 1rem;
    margin-right: 0.4rem;
  }

  @media (max-width: 28rem) {
    .analogues {
      width: 100%;
    }

    .analogues__images {
      grid-template-columns: auto auto;
      grid-template-rows: auto auto auto;
      grid-gap: 0.5rem;
    }

    .images__main {
      grid-column-start: 1;
      grid-column-end: 3;
      width: 100%;
    }

    .analogues__images img {
      width: 100%;
      vertical-align: top;
    }

    .analogues__images .active__list {
      width: auto;
    }
  }
</style>
