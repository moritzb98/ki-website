<template>
    <div class="site-container">
        <h3>Testvideo</h3>
        <video ref="videoRef" src="../assets/testvideo.mp4" id="video-container" height="400px" controls></video>
    </div>
</template>

<script>

export default {
  name: 'animatedvideo',
  data() {
    return {
    }
  },
  mounted() {
    //this.$refs.videoRef.src = "../assets/testvideo.mp4";
    this.$refs.videoRef.play();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>