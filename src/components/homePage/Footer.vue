<template>
  <div class="footer-wrapper">
    <div class="footer">
      <p class="title">CUTC 2021 &mdash; Amplify</p>
      <a href="mailto:info@cutc.ca" style="text-decoration: none;">
        <p class="contact">Contact us</p>
      </a>
      <div class="cutc-icons">
        <a
          v-for="item in items"
          :key="item.link"
          :href="`${item.link}`"
          target="_blank"
          class="icons"
        >
          <img :src="`${item.image}`" />
        </a>
      </div>
      <p>&copy; Copyright 2021 CUTC</p>
    </div>
  </div>
</template>

<script>
import Facebook from "../../assets/socials/facebook.svg";
import Instagram from "../../assets/socials/instagram.svg";
import Twitter from "../../assets/socials/twitter.svg";
export default {
  name: "Bottom",
  data() {
    return {
      items: [
        {
          link: "https://www.facebook.com/cutc2021/",
          image: Facebook
        },
        {
          link: "https://www.instagram.com/cutc2021/",
          image: Instagram
        },
        {
          link: "https://twitter.com/CUTC2021",
          image: Twitter
        }
      ]
    };
  }
};
</script>

<style scoped>
.footer-wrapper {
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

