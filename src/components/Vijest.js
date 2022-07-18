import React from "react";

const Vijest = ({ naslov, sadrzaj, oglas }) => {
  naslov = "dsghjksdghkjsd";
  function ispisiOglas() {
    if (oglas) return <p>{oglas}</p>;
    else return <p>bla bla bla</p>;
  }
  return (
    <>
      <div style={{ backgroundColor: "green" }}>
        <h1>{naslov}</h1>
        <p>{sadrzaj}</p>
        {oglas || "bla bla bla"}
        {oglas ? <p>{oglas}</p> : <p>bla bla bla</p>}
        {ispisiOglas()}
      </div>
      <div>jfhgjkdfhg</div>
    </>
  );
};

export default Vijest;
