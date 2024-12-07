<template>
  <div id="app" class="container">
    <main>
      <div class="card">
        <div class="card__title">
          <nuxt-link to="/" class="icon">
            <Icon name="akar-icons:arrow-back" style="color: #fff" />
          </nuxt-link>
          <h3>New Product</h3>
        </div>
        <div class="card__body">
          <div class="half">
            <div class="featured_text">
              <h1>{{ product.title }}</h1>
              <p class="sub">{{ product.category }}</p>
              <p class="price">$ {{ formattedPrice }}</p>
            </div>
            <div class="image">
              <img :src="product.image" :alt="product.title" />
            </div>
          </div>
          <div class="half">
            <div class="description">
              <p>
                {{ product.description }}
              </p>
            </div>
            <span class="stock">
              <Icon name="ic:outline-check-circle" style="color: green" />
              In stock
            </span>
            <div class="reviews">
              <ul class="stars">
                <li
                  v-for="(star, index) in 5"
                  :key="index"
                  :class="{ filled: index < Math.round(product.rating.rate) }"
                >
                  <Icon
                    :name="
                      index < Math.round(product.rating.rate)
                        ? 'mdi:star'
                        : 'mdi:star-outline'
                    "
                    style="color: #fbc02d"
                  />
                </li>
              </ul>
              <span>({{ product.rating.count }} reviews)</span>
            </div>
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
    </main>
  </div>
</template>

<script setup>
import { computed, watchEffect } from "vue";
import { useRoute } from "nuxt/app";
import { useProductsStore } from "~/stores/products";

const { id } = useRoute().params;
const productsStore = useProductsStore();

// Ambil produk berdasarkan ID
const product = computed(() => {
  return productsStore.products.find((prod) => prod.id === parseInt(id));
});

// Fetch data jika produk belum ada di store
if (!product.value) {
  productsStore.fetchProducts();
}

// Harga diformat ke dua desimal
const formattedPrice = computed(() => {
  return product.value ? product.value.price.toFixed(2) : "Loading...";
});

// Rating ditampilkan sebagai jumlah bintang
const formattedRating = computed(() => {
  if (product.value && product.value.rating) {
    return Math.round(product.value.rating.rate); // Angka bulat untuk bintang
  }
  return 0; // Return default jika data belum tersedia
});
</script>

<style lang="scss" scoped>
.container {
  padding: 1rem;
}
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
      background: #f0a500;
      color: #fff;
      padding: 10px 10px;
      transition: 200ms;

      > a {
        color: #fff;
      }

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

    .image {
      padding-top: 15px;
      width: 100%;

      img {
        display: block;
        max-width: 256px;
        height: auto;
        mix-blend-mode: multiply;
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
    }

    .reviews {
      .stars {
        display: inline-block;
        list-style: none;
        padding: 0;

        > li {
          display: inline-block;

          .fa {
            color: #f7c01b;
          }
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
