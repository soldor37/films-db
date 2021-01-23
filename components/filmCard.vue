<template>
  <div class="container">
    <vs-card>
      <template #title>
        <h3>Pot with a plant</h3>
      </template>
      <template #img>
        <img src="/foto5.png" alt="" />
      </template>
      <template #text>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      </template>
      <template #interactions>
        <vs-button danger icon>
          <i class="bx bx-heart"></i>
        </vs-button>
      </template>
    </vs-card>
  </div>
</template>

<script>
export default {
  props: ["filmInfo"],
};
</script>