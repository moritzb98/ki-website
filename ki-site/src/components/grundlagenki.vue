<template>
    <div id="glossar-contentID" class="site-container glossar-content">
      <h2>Grundlagen zu KI</h2>
        <p>kurze Erläuterung zu wichtigen Begriffen (z.B. KI allgemein) </p>
        <br>
        <div>
            <h3>Abkürzungen</h3>
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
                <tr>
                    <td class="fett tabellentext">
                        ...
                    </td>
                    <td class="tabellentext">
                        ...
                    </td>               
                </tr>
            </table>
        </div>

        <div>
            <h3>Verwendete Icons</h3>
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
</style>