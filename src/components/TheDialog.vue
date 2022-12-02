<template>
  <teleport to="body">
    <div class="modal">
      <p>Товар "{{ item }}" в количестве {{ amount }} добавлен в {{ destination }}!</p>
    </div>
  </teleport>
</template>

<script>
export default {
  props: ["item", "amount", "destination"],
  name: "TheDialog.vue",
}
</script>

<style scoped>
.modal {
  border: 1px dotted #333333;
  position: fixed;
  bottom: 5%;
  left: 40%;
  background-color: white;
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: #333333;
  padding: 0 1rem;
}
</style>
