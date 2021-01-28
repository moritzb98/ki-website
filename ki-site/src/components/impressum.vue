<template>
    <div class="site-container">
      <Particles
          id="tsparticlesImpressum"
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
      <h2 class="site-header">Impressum</h2>
        <div class="flex-container impressum-site-container">
          <div class="impressum-flex-item">
            <h3>Projekinformationen</h3>
            <span class="impressum-text"><b>Titel:</b> Einsatz von künstlicher Intelligenz in der Deutschen Wirtschaft<br>Stand der KI Nutzung im Jahr 2019</span><br>
            <span class="impressum-text"><b>Studenten:</b> Moritz Banhardt, Theresa Brenner, Fabienne Burgert, Berivan Saricicek, Kim Wehnes</span><br>
            <span class="impressum-text"><b>Dozent:</b> Dipl.-Des. Lothar B. Blum</span><br>
            <span class="impressum-text"><b>Abgabe:</b> 29.01.2021</span><br><br>
            <span class="impressum-text">DHBW Campus Mosbach</span><br>
            <span class="impressum-text">Fachbereich Onlinemedien</span><br>
          </div>
          <div class="impressum-flex-item">
            <h3>Quelle</h3>
            <span class="impressum-text"><b>Herausgeber:</b> Bundesministerium für <br>Wirtschaft und Energie (BMWi)<br>
              Öffentlichkeitsarbeit<br>
              11019 Berlin<br>
              <a href="https://www.bmwi.de/Redaktion/DE/Publikationen/Wirtschaft/einsatz-von-ki-deutsche-wirtschaft.html"><b>Zur Studie:</b> www.bmwi.de</a>
            </span><br>
            <span class="impressum-text"><b>Stand:</b> März 2020</span><br><br>
            <span class="impressum-text"><b>Icons:</b> Envato Elements</span><br>
            <span class="impressum-text"><b>Bilder:</b> Envato Elements</span><br>
            <span class="impressum-text"><b>Grafiken:</b> Envato Elements</span><br>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'impressum',
  data() {
    return {
      
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.site-header {
  margin-top: 80px;
  margin-bottom: 40px;
}

h3{
  margin-bottom: 15px;
}

.impressum-site-container {
  width: 75%;
  margin: 0 auto;
}

.impressum-flex-item {
  width: 50%;
}

.impressum-flex-item h3 {
  text-align: center;
}

.impressum-text {
  font-weight: 100;
}

#tsparticlesImpressum{
  position: absolute;
  z-index: 500;
  width: 100%;
  height: 55%;
  align-items: bottom;
  position: absolute;
  bottom: 0;
}
</style>
