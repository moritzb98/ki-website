<template>
    <div id="glossar-contentID" class="site-container glossar-content">
      <h4>Grundlagen zu KI</h4>
          <p>Dieses Glossar beinhaltet sämtliche Definitionen und Hintergrundinformationen zu den Themengebieten Künstliche Intelligenz. Diese Grundlagen sollten verstanden werden, damit die auf dieser Website dargestellten Grafiken nachvollziehbar sind.
          Es ist jederzeit möglich, zurück zu dieser Seite zu springen, damit Infos nachgelesen werden können.
          </p>
        <br>
        <div>


            <h4> Definitionen </h4>
              <h5> Künstliche Intelligenz </h5>
                <p> Künstliche Intelligenz (KI) zählt heutzutage zu den entscheidendsten Schlüsseltechnologien. KI ermöglicht die Simulation von menschlicher Intelligenz, dazu gehört neben dem Lernen der Erfassung von Informationen die Schlussfolgerung, also wie wird mit Informationen umgegangen, um Rückschlüsse zu ziehen, sowie die Selbstkorrektur als abschließender Prozesspunkt.  <br>
                    <br> Beispiele für den KI-Einsatz in Unternehmen:
                    <br>Im Gesundheitswesen: Für Patienten ist es möglich, Fragen an einen Chatbot zu stellen. Dieser hat Zugriff auf Patientendaten und kann auf große Datenmengen zugreifen, damit Patienten auch von zu Hause aus beraten werden können.
                    <br>Im Finanzwesen: Auch finanzielle Beratung kann via Chatbots von Kunden eingeholt werden. 
                    <br>In der Bildung: Benotungen können automatisiert von einer KI übernommen werden, damit den Lehrkräften mehr Zeit für die Betreuung der Schüler bleibt. 
                    <br>In der Fertigung: Der Einsatz von Robotern kann den Workflow vieler Prozesse verschnellern.
                </p>

            <h4>Abkürzungen</h4>
            <table cellspacing="20" class="tbl">
                <tr>
                    <td class="fett tabellentext">
                        IKT
                    </td>
                    <td class="tabellentext">
                        Informations- und Kommunikationstechnik
                    </td>               
                </tr>
                <tr>
                    <td class="fett tabellentext">
                        FuE
                    </td>
                    <td class="tabellentext">
                        Forschung und Entwicklung
                    </td>               
                </tr>
            </table>
        </div>

        <div>
            <h4>Verwendete Icons</h4>
            <div class="flex-container">
          <div class="icon-container">
            <div class="icon">
              <img src="../assets/artificial-intelligence.svg">
            </div>
            <p>Zeitraum der Datenerhebung</p>
            
          </div>
          <div class="icon-container">
            <div class="icon">
              <img src="../assets/artificial-intelligence.svg">
            </div>
            <p>Form der Datenerhebung</p>
            
          </div>
          <div class="icon-container">
            <div class="icon">
             <img src="../assets/artificial-intelligence.svg">
           </div>
            <p>KI Unternehmen</p>
            
          </div>
        </div>
        </div>

    </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3{
    text-transform: uppercase;
    font-size: 2.5em;
}
p {
  font-size: 17px;
}
h4{
  font-size: 30px;
}
h5{
  font-size: 18px;
}
.fett{
    font-weight: bold;   
}

.tabellentext{
    text-align: left
}

.icon-container {
  text-align:center;
  max-width: 100px;
}
.icon{
  background: #eef1f6;
  border-radius: 100%;
  padding: 15px;
  width: 50%;
  margin: 0 auto;
}

.glossar-content {
  opacity: 0;
  transition: all 1.5s;
}

.glossar-content p, h3{
  text-align: center;
}

table{
  margin: 0 auto;
}

</style>