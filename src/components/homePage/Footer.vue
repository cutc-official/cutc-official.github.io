<template>
  <div class="parent">
    <div class="footer">
      <p class="title">CUTC 2021 &mdash; Amplify</p>
      <a href="mailto:info@cutc.ca" style="text-decoration: none;">
        <p class="contact">Contact us</p>
      </a>
      <div class="cutc-icons">
        <a
          v-for="(item,index) in items.items"
          :key="item.link"
          :href="`${item.link}`"
          target="_blank"
          class="icons"
        >
          <svg
            width="40"
            height="41"
            viewBox="0 0 40 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <rect y="0.867188" width="40" height="40" :fill="`url(#pattern${index})`" />
            <defs>
              <pattern
                :id="`pattern${index}`"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use :xlink:href="`#image${index}`" transform="scale(0.015625)" />
              </pattern>
              <image :id="`image${index}`" width="64" height="64" :xlink:href="`${item.image}`" />
            </defs>
          </svg>
        </a>
      </div>
      <p>&copy; Copyright 2021 CUTC</p>
    </div>
  </div>
</template>

<script>
import Items from "../../content/footer-info.json";

export default {
  name: "Bottom",
  data() {
    return {
      items: Items
    };
  }
};
</script>

<style scoped>
.parent {
  display: flex;
  align-items: center;
  /* padding: 1% 0; */
  background: linear-gradient(
    180deg,
    #ffffff -0.11%,
    #ff9d9d 32.5%,
    #ff5050 100%
  );
  height: 12rem;
}
.footer {
  text-align: center;
  margin: 0 auto;
  width: 50%;
}
.icons {
  margin-left: 0.7rem;
}
.title {
  font-size: 1.3rem;
  margin-bottom: 0;
  font-weight: bold;
}
.contact {
  margin: 0.1rem 0rem 0.5rem 0rem;
  font-weight: bold;
}
</style>

