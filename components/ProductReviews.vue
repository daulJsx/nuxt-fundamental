<template>
  <div class="reviews">
    <ul class="stars">
      <li
        v-for="(star, index) in 5"
        :key="index"
        :class="{ filled: index < formattedRating }"
      >
        <Icon
          :name="
            index < formattedRating ? 'weui:star-filled' : 'weui:star-outlined'
          "
          style="color: #fbc02d"
        />
      </li>
    </ul>
    <span>({{ rating.count }} reviews)</span>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  rating: {
    type: Object,
    required: true,
  },
});

// Format rating menjadi nilai bulat untuk menampilkan bintang
const formattedRating = computed(() => {
  return props.rating ? Math.round(props.rating.rate) : 0;
});
</script>

<style scoped>
.reviews {
  display: flex;
  align-items: center;
}

.stars {
  list-style: none;
  padding: 0;

  > li {
    display: inline-block;
    font-size: 2rem;
  }
}

span {
  font-size: 14px;
  margin: 10px 0 0 5px;
  color: #555;
}
</style>
