<template>
  <h2>Our Video</h2>
  <video width="1920" height="1080" controls>
    <source src="@/assets/misc/promo_video.mp4" type="video/mp4">
  </video>
</template>

<script>
export default {
  name: "Video"
}
</script>

<style scoped>
  video {
    margin: 0 auto;
    display: block;
    width: 80%;
    height: auto;
  }
</style>