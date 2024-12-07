<template>
  <div class="card">
    <div class="card__title">
      <nuxt-link to="/" class="icon">
        <Icon name="flowbite:caret-left-solid" style="color: #fff" />
      </nuxt-link>
      <h3>Product Details</h3>
    </div>
    <div class="card__body">
      <div class="half">
        <div class="featured_text">
          <h1>{{ product.title }}</h1>
          <p class="sub">{{ product.category }}</p>
          <p class="price">$ {{ formattedPrice }}</p>
        </div>
        <LazyProductImage :image="product.image" :alt="product.title" />
      </div>
      <div class="half">
        <div class="description">
          <p>{{ product.description }}</p>
        </div>
        <span class="stock">
          <Icon name="akar-icons:circle-check-fill" style="color: #a1cc16" />
          In stock
        </span>
        <LazyProductReviews :rating="product.rating" />
      </div>
    </div>
    <div class="card__footer">
      <div class="recommend">
        <p>Recommended by</p>
        <h3>Andrew Palmer</h3>
      </div>
      <div class="action">
        <button type="button">Add to cart</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import LazyProductImage from "~/components/ProductImage.vue";
import LazyProductReviews from "~/components/ProductReviews.vue";

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const formattedPrice = computed(() => {
  return props.product ? props.product.price.toFixed(2) : "Loading...";
});
</script>

<style lang="scss" scoped>
.card {
  // box-shadow: 0 6px 6px rgba(#000, 0.3);
  transition: 200ms;
  // border-radius: 14px;

  .card__title {
    display: flex;
    align-items: center;
    padding: 30px 40px;

    h3 {
      flex: 0 1 200px;
      text-align: right;
      margin: 0;
      color: #252525;
      font-family: sans-serif;
      font-weight: 600;
      font-size: 20px;
      text-transform: uppercase;
    }

    .icon {
      flex: 1 0 10px;
      display: flex;
      align-items: center;
      background: #f0a500;
      color: #fff;
      padding: 10px 10px;
      transition: 200ms;
      font-size: 1.7rem;
      &:hover {
        background: #252525;
      }
    }
  }

  .card__body {
    padding: 0 40px;
    display: flex;
    flex-flow: row no-wrap;
    margin-bottom: 25px;

    > .half {
      box-sizing: border-box;
      padding: 0 15px;
      flex: 1 0 50%;
    }

    .featured_text {
      h1 {
        margin: 0;
        padding: 0;
        font-weight: 800;
        font-family: "Montserrat", sans-serif;
        font-size: 64px;
        line-height: 50px;
        color: #181e28;
      }

      p {
        margin: 0;
        padding: 0;

        &.sub {
          font-family: "Montserrat", sans-serif;
          font-size: 26px;
          text-transform: uppercase;
          color: #686e77;
          font-weight: 300;
          margin-bottom: 5px;
        }

        &.price {
          font-family: "Fjalla One", sans-serif;
          color: #252525;
          font-size: 26px;
        }
      }
    }

    .description {
      margin-bottom: 25px;

      p {
        margin: 0;
        font-family: "Open Sans", sans-serif;
        font-weight: 300;
        line-height: 27px;
        font-size: 16px;
        color: #555;
      }
    }

    span.stock {
      font-family: "Montserrat", sans-serif;
      font-weight: 600;
      color: #a1cc16;
      display: flex;
      align-items: center;
      gap: 0.7rem;
    }

    .reviews {
      display: flex;
      align-items: center;
      .stars {
        display: inline-block;
        list-style: none;
        padding: 0;

        > li {
          display: inline-block;
          font-size: 1.7rem;
        }
      }

      > span {
        font-family: "Open Sans", sans-serif;
        font-size: 14px;
        margin-left: 5px;
        color: #555;
      }
    }
  }

  .card__footer {
    padding: 30px 40px;
    display: flex;
    flex-flow: row no-wrap;
    align-items: center;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      display: block;
      top: 0;
      left: 40px;
      width: calc(100% - 40px);
      height: 3px;
      background: #f0a500;
      background: linear-gradient(
        to right,
        #f0a500 0%,
        #f0a500 20%,
        #ddd 20%,
        #ddd 100%
      );
    }

    .recommend {
      flex: 1 0 10px;

      p {
        margin: 0;
        font-family: "Montserrat", sans-serif;
        text-transform: uppercase;
        font-weight: 600;
        font-size: 14px;
        color: #555;
      }

      h3 {
        margin: 0;
        font-size: 20px;
        font-family: "Montserrat", sans-serif;
        font-weight: 600;
        text-transform: uppercase;
        color: #f0a500;
      }
    }

    .action {
      button {
        cursor: pointer;
        border: 1px solid #f0a500;
        padding: 14px 30px;
        border-radius: 200px;
        color: #fff;
        background: #f0a500;
        font-family: "Open Sans", sans-serif;
        font-size: 16px;
        transition: 200ms;

        &:hover {
          background: #fff;
          color: #f0a500;
        }
      }
    }
  }
}
</style>
