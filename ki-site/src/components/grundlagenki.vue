<template>
    <div id="glossar-contentID" class="site-container glossar-content">

    <h2>Glossar</h2>
      <h4 class="right">Grundlagen zur Künstlichen Intelligenz</h4>

          <p>Dieses Glossar beinhaltet sämtliche Definitionen und Hintergrundinformationen zu den Themengebieten Künstliche Intelligenz. Diese Grundlagen sollten verstanden werden, damit die auf dieser Website dargestellten Grafiken nachvollziehbar sind.
          Es ist jederzeit möglich, zurück zu dieser Seite zu springen, damit Infos nachgelesen werden können.
          </p>
        <br>
        <div>

            <h4 class="right"> Definitionen </h4>
              <h5><b> Künstliche Intelligenz </b></h5>
                <p> Künstliche Intelligenz (KI) zählt heutzutage zu den entscheidendsten Schlüsseltechnologien. KI ermöglicht die Simulation von menschlicher Intelligenz, dazu gehört neben dem Lernen der Erfassung von Informationen die Schlussfolgerung, also wie wird mit Informationen umgegangen, um Rückschlüsse zu ziehen, sowie die Selbstkorrektur als abschließender Prozesspunkt.  <br>
                    <br><b> Beispiele für den KI-Einsatz in Unternehmen:</b>
                    <br><b>Im Gesundheitswesen:</b> Für Patienten ist es möglich, Fragen an einen Chatbot zu stellen. Dieser hat Zugriff auf Patientendaten und kann auf große Datenmengen zugreifen, damit Patienten auch von zu Hause aus beraten werden können.
                    <br><b>Im Finanzwesen:</b> Auch finanzielle Beratung kann via Chatbots von Kunden eingeholt werden.
                    <br><b>In der Bildung:</b> Benotungen können automatisiert von einer KI übernommen werden, damit den Lehrkräften mehr Zeit für die Betreuung der Schüler bleibt.
                    <br><b>In der Fertigung:</b> Der Einsatz von Robotern kann den Workflow vieler Prozesse verschnellern.
                </p>

            <h4 class="right">Abkürzungen</h4>
            <div class="cssgrid">

                    <div class="fett tabellentext">
                        IKT
                    </div>
                    <div class="tabellentext">
                        Informations- und Kommunikationstechnik
                    </div>
                    <div class="fett tabellentext">
                        FuE
                    </div>
                    <div class="tabellentext">
                        Forschung und Entwicklung
                    </div>
                    <div class="fett tabellentext">
                        DL
                    </div>
                    <div class="tabellentext">
                        Dienstleistung
                    </div>
            </div>

            <h4 class="right">Inhaltsabschnitte der Webseite</h4>
            <div class="cssgrid">

                    <div class="kreis0">                        
                    </div>
                    <div class="tabellentext">
                        Allgemeines
                    </div>

                    <div class="kreis1">                        
                    </div>
                    <div class="tabellentext">
                      Allgemeine Betrachtung KI Nutzung 
                    </div>

                    <div class="kreis2">      
                    </div>
                    <div class="tabellentext">
                        KI einsetzende Unternehmen
                    </div>

                    <div class="kreis3">     
                    </div>
                    <div class="tabellentext">
                        KI Nutzung in der IKT Branche
                    </div>
            </div>
        </div>

        

        <div calss="mittig">
            <h4>Verwendete Icons</h4>
            <div class="cssGridIcon">
          <div class="icon-container">
            <div class="icon">
              <img src="../assets/system.svg">
            </div>
            <p class="icontext">Anwendungs- <br> bereich</p>

          </div>
          <div class="icon-container">
            <div class="icon">
              <img src="../assets/sound-card.svg">
            </div>
            <p class="icontext">Bild-und Ton- <br>erkennung</p>

          </div>
          <div class="icon-container">
            <div class="icon">
             <img src="../assets/data-collection.svg">
           </div>
            <p class="icontext">Form der <br> Datenerhebung</p>
          </div>

          <div class="icon-container">
            <div class="icon">
             <img src="../assets/de-8.png">
           </div>
            <p class="icontext">Gesamtwirt- <br>schaft</p>
          </div>

          <div class="icon-container">
            <div class="icon">
             <img src="../assets/ikt-8.png">
           </div>
            <p class="icontext">IKT</p>
          </div>

          <div class="icon-container">
            <div class="icon">
             <img src="../assets/ki.svg">
           </div>
            <p class="icontext">KI-Verfahren</p>
          </div>

          <div class="icon-container">
            <div class="icon">
             <img src="../assets/machine-learning.svg">
           </div>
            <p class="icontext">Maschinelles <br> Lernen</p>
          </div>

          <div class="icon-container">
            <div class="icon">
             <img src="../assets/alexa.svg">
           </div>
            <p class="icontext">Sprach-oder <br> Textverstehen</p>
          </div>

          <div class="icon-container">
            <div class="icon">
             <img src="../assets/group.svg">
           </div>
            <p class="icontext">Teilnehmende Unternehmen</p>
          </div>

          <div class="icon-container">
            <div class="icon">
             <img src="../assets/human.svg">
           </div>
            <p class="icontext">Unternehmensbereiche</p>
          </div>

          <div class="icon-container">
            <div class="icon">
             <img src="../assets/brain.svg">
           </div>
            <p class="icontext">Wissensbasierte <br> Unternehmen</p>
          </div>

          <div class="icon-container">
            <div class="icon">
             <img src="../assets/calendar.svg">
           </div>
            <p class="icontext">Zeitraum der <br> Datenerhebung</p>
          </div>

        </div>
        </div>

    </div>
</template>

<script>
export default {
  name: 'grundlagenki',
  data() {
    return {

    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3{
    text-transform: uppercase;
    font-size: 2.5em;
}

.kreis0 {
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-color: #f3931f
}

.kreis1 {
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-color: #8BB8C1
}

.kreis2 {
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-color: #C18BBF
}

.kreis3 {
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-color: #88B279
}

.mittig{
  text-align:center;
  justify-content:center;
  margin: 0 auto;
}

img{
  width: 75px;
  height:auto;

}

p {
  font-size: 17px;
  text-align:left;
}
h4{
  font-size: 30px;
  margin-bottom:20px;
  margin-top:40px;
}
h5{
  font-size: 18px;
  text-align:left;
  width: 80%;
  margin:0 auto;
}
.right{
  text-align:left;
  margin-left: 140px;
}
.cssgrid{
  display:grid;
  width: 80%;
  margin: auto;
  justify-content: space-between;
  text-align: left;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 7% 93%;
  grid-row-gap: 20px;
  column-gap: 3px;

}

.fett{
    font-weight: bold;
}

.tabellentext{
    text-align: left;
   align-items: center;
   justify-content:center;
   margin: auto 0;
}

.icon-container {
  text-align:center;
  background: #41567E;
  margin: 0 auto;
;
}
.icon{
  background: #eef1f6;
  border-radius: 100%;
  padding: 15px;
  width: 80px;
  height: 80px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

.icon img{
  margin: auto;
}

.glossar-content {
  opacity: 0;
  transition: all 1.5s;
  background: #41567E;
}

.glossar-content p, h3{
  text-align: left;
  background: #41567E
;
}

table{
  margin: 0 auto;
}

.icontext{
  text-align: center!important;
  font-size: 15px;
  width: 100%;
  margin-bottom: 20px;
  word-break:break-all;

}

.cssGridIcon{
  display:grid;
  width: 80%;
  margin:0 auto;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-columns: 25% 25% 25% 25%;
  justify-content:center;
  text-align: center;
}


</style>
