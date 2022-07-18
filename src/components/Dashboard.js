import React from "react";
import Vijest from "./Vijest";

const Dashboard = () => {
  return (
    <div>
      <Vijest
        naslov='Hrvatska usla u eurozonu'
        sadrzaj='U briselu se toga dana dobro jelo i pilo.'
      />
      <Vijest
        naslov='Hajduk prvak nakon 55 godina'
        sadrzaj='U split došao novi mafijaš nakon Štimca koji je kajduku uspio platiti titulu.'
        oglas='djsgjksdgnkjsdnjk'
      />
      <Vijest
        naslov='Top 10 nacina za novo ljetno tijelo : STRUCNJACI SOKIRANI'
        sadrzaj='U nastavku procitajte top 10 nacina za dobiti najbolje ljetno tijelo'
      />
    </div>
  );
};

export default Dashboard;
