<template>
    <div id="videocontainer" class="site-container-video">
        <video ref="videoRef" src="../assets/testvideo.mp4" id="video" height="400px" controls></video>
        <div class="site-container">
            <h3 class="videocontent">Testvideo</h3>
            <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><p id="end"></p>
        </div>

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
    //this.$refs.videoRef.play();

   // Declare Scene
    const scene2 = this.$scrollmagic.scene({
    // ID of element where animation starts
    triggerElement: '#videocontainer',

    // {0,0.5,1} - animations starts from {top,center,end} of window
    triggerHook: 0,

    // Duration of animation
    duration: 500
})
    // Declaration of animation and attaching to element
    .setTween('#video', { 
        css: { 
            scale: 0.7 // the tween durtion can be omitted and defaults to 1
        }
    }).setPin(document.getElementById('video'));

    // Add Scene to controller
    this.$scrollmagic.addScene(scene2)
    
    // Attaching scrollmagic controller to element
    this.$scrollmagic.attachTo(this.$refs.scrollBox)



  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.site-container-video{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    width: 100%;
}
.site-container-video video {
    height: 600px;
    width: 100%;
    object-fit: cover;
    position: absolute;
    z-index: -5;
    top: 100px;
}
</style>