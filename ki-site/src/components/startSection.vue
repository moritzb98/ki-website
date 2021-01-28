<template>
    <div class="site-container">
        <Particles
          id="tsparticles"
          :options="{
            particles: {
              number: {
                value: 50,
                density: {
                  enable: true,
                  value_area: 800
                }
              },
              color: {
                value: '#ffffff'
              },
              shape: {
                type: 'circle',
                stroke: {
                  width: 0,
                  color: '#000000'
                },
                polygon: {
                  nb_sides: 10
                },
                image: {
                  src: 'img/github.svg',
                  width: 400,
                  height: 400
                }
              },
              opacity: {
                value: 0.2762016745712954,
                random: false,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false
                }
              },
              size: {
                value: 3,
                random: true,
                anim: {
                  enable: false,
                  speed: 40,
                  size_min: 0.1,
                  sync: false
                }
              },
              line_linked: {
                enable: true,
                distance: 300,
                color: '#ffffff',
                opacity: 0.26456299004281125,
                width: 1
              },
              move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200
                }
              }
            },
            interactivity: {
              detect_on: 'canvas',
              events: {
                onclick: {
                  enable: true,
                  mode: 'push'
                },
                resize: true
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 1
                  }
                },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 8,
                  speed: 3
                },
                repulse: {
                  distance: 200,
                  duration: 0.4
                },
                push: {
                  particles_nb: 4
                },
                remove: {
                  particles_nb: 2
                }
              }
            },
            retina_detect: true
          }"
        />
        <div class="site-container-width">
          
          <!--<img class="left-img" src="../assets/1_transparent.png">-->
          <br><br><br><br><br><br><br><br>
          <h1>Einsatz von künstlicher Intelligenz in der deutschen Wirtschaft</h1>
          <h4 class="subtitle">Stand der KI-Nutzung im Jahr 2019</h4>
          <div>
          <img src="../assets/dhbw.svg" class="logo">
          </div>
          <div class="textblock">
          <span>Ein Projekt des Studiengangs Onlinemedien der DHBW Mosbach, des Moduls Web Design 3 <br>
          von Moritz Banhardt, Theresa Brenner, Fabienne Burgert, Berivan Saricicek und Kim Wehnes.</span><br><br>
          <span>Die abgebildeten Daten basieren auf dem Bericht "Einsatz von Künstlicher Intelligenz in der deutschen Wirtschaft" des Bundesministeriums für Wirtschaft und Energie und präsentieren den Stand des Einsatzes dieser (KI) im Jahr 2019.
      </span>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'startSection',
  data() {
    return {
      
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo { 
  width: 130px;
  margin-top: 0px;
  margin-bottom: 0px;
}

  h1:after {
    content: "";
    height: 3px;
    width: 350px;
    background-color: #f3931f;
    display: block;
    margin: 10px auto;
}

.subtitle {
  text-transform: uppercase;
  font-weight: 100;
  font-size: 1.7em;
  margin-bottom: 30px;
  font-family: 'Roboto', sans-serifç;
}

.textblock{
  width: 800px;
  margin: 0 auto;
}

#tsparticles{
  position: absolute;
  z-index: 500;
  width: 100%;
  height: 100%;
}
</style>
