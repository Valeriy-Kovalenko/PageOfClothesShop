<template>
    <div class="analogues">
      <div class="analogues__main-button">Посмотреть все стили</div>
      <div class="analogues__images images">
        <img src="../assets/greyPajamas.svg" alt="grey pajamas" class="images__main-image"/>
        <img src="../assets/beigePajamas.svg" alt="beige pajamas" />
        <img src="../assets/bear.svg" alt="bear toy" />
        <img src="../assets/greenishPajamas2.svg" alt="greenish pajamas, sitting" />
        <img src="../assets/greenishPajamas.svg" alt="greenish pajamas, standing" />
      </div>
    </div>
</template>

<script>
export default {
  name: "ItemAnalogues"
}
</script>

<style scoped>
.analogues {
  margin-top: 2rem;
}
.analogues__main-button {
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  text-decoration: underline;
  color: #333333;
  text-align: center;
}

.analogues__images {
  display: grid;
  grid-template-columns: 686px 335px 335px;
  grid-template-rows: 336px 336px;
  grid-gap: 1rem;
  margin-top: 2rem;
}

.images__main-image {
  grid-row-start: 1;
  grid-row-end: 3;
}
</style>
