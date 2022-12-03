<template>
  <div class="analogues">
    <div class="analogues__main-button">Посмотреть все стили</div>
    <div class="analogues__images images">
      <div id="qwe" class="images__main-image main-image" @mouseenter="changeHoverStatus($event)" @mouseleave="changeHoverStatus">
        <img src="../assets/greyPajamas.svg" alt="grey pajamas" />
        <Teleport :to="hoverTarget">
          <div class="main-image__active active" v-if="isHovered">
            <img src="../assets/list.svg" alt="все фото" class="active__list" />
            <div class="active__buy">
              <img src="../assets/bag.svg" alt="купить"/>
              <span>Узнай, что на мне</span>
            </div>
            <div class="active__likes">
              <img src="../assets/fullWhiteHeart.svg" alt="" />
              <span>{{ 200 }}</span>
            </div>
          </div>
        </Teleport>
      </div>
      <img src="../assets/beigePajamas.svg" alt="beige pajamas" />
      <img src="../assets/bear.svg" alt="bear toy" />
      <img src="../assets/greenishPajamas2.svg" alt="greenish pajamas, sitting" />
      <img src="../assets/greenishPajamas.svg" alt="greenish pajamas, standing" />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ItemAnalogues',
    data() {
      return {
        isHovered: false,
        hoverTarget: "body",
      };
    },
    methods: {
      changeHoverStatus(event) {
        this.isHovered = !this.isHovered;
        this.hoverTarget = "body"
        console.log(event)
        // this.hoverTarget = "div" + " ." + event.target.classList[1];
        console.log(this.hoverTarget);
        console.log(this.isHovered);
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

  .active {
    display: flex;
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

  .images__main-image {
    grid-row-start: 1;
    grid-row-end: 3;
    position: relative;
  }
</style>
