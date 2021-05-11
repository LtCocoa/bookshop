<template>
  <div class="star-rating">
    <span
      v-for="star in max"
      :key="star"
      class="star"
    >
      &star;
    </span>
    <div 
      class="star-rating__current"
      :style="{ width: getWidth + '%' }"
    >
      <span
        v-for="star in max"
        :key="star"
        class="star"
      >
        &starf;
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'rating',
  props: {
    current: {
      type: Number,
      default: 0,
      required: true,
      validator: (value) => {
        return value >= 0 && value <= 5;
      }
    },
    max: {
      type: Number,
      default: 5,
      validator: (value) => {
        return value >= 0 && Number.isFinite(value);
      }
    }
  },
  computed: {
    getWidth() {
      return (this.current / this.max) * 100;
    }
  }
};
</script>

<style>
.star-rating {
  display: inline-block;
  font-size: 1.7rem;
  font-weight: 400;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  position: relative;
  color: rgb(255, 219, 17);

}

.star-rating__current {
  position: absolute;
  top: 0;
  overflow: hidden;
  white-space: nowrap;
}

.star {
  display: inline-block;
}
</style>