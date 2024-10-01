import React from "react";
import pin1 from "./images/pins/pin1.jpg";
import pin2 from "./images/pins/pin2.jpg";
import pin3 from "./images/pins/pin3.jpg";
import pin4 from "./images/pins/pin4.jpg";
import pin5 from "./images/pins/pin5.jpg";
import pin7 from "./images/pins/pin7.jpg";
import pin8 from "./images/pins/pin8.jpg";
import pin9 from "./images/pins/pin9.jpg";
import pin10 from "./images/pins/pin10.jpg";
import pin11 from "./images/pins/pin11.jpg";
import pin12 from "./images/pins/pin12.jpg";
import pin13 from "./images/pins/pin13.jpg";
import pin14 from "./images/pins/pin14.jpg";
import pin15 from "./images/pins/pin15.jpg";

import Cards from "./Cards.jsx";

function PinterestLayout() {
  return (
    <div style={styles.pin_container}>
      <Cards size="small">
        <img src={pin1} alt="Pin 1" style={{ borderRadius: "16px" }} />
      </Cards>
      <Cards size="small">
        <img src={pin2} alt="Pin 2" style={{ borderRadius: "16px" }} />
      </Cards>
      <Cards size="medium">
        <img src={pin3} alt="Pin 3" style={{ borderRadius: "16px" }} />
      </Cards>
      <Cards size="large">
        <img src={pin4} alt="Pin 4" style={{ borderRadius: "16px" }} />
      </Cards>
      <Cards size="small">
        <img src={pin5} alt="Pin 5" style={{ borderRadius: "16px" }} />
      </Cards>
      <Cards size="medium">
        <img src={pin7} alt="Pin 7" style={{ borderRadius: "16px" }} />
      </Cards>
      <Cards size="large">
        <img src={pin8} alt="Pin 8" style={{ borderRadius: "16px" }} />
      </Cards>
      <Cards size="medium">
        <img src={pin9} alt="Pin 9" style={{ borderRadius: "16px" }} />
      </Cards>
      <Cards size="small">
        <img src={pin10} alt="Pin 10" style={{ borderRadius: "16px" }} />
      </Cards>
      <Cards size="small">
        <img src={pin11} alt="Pin 11" style={{ borderRadius: "16px" }} />
      </Cards>
      <Cards size="large">
        <img src={pin12} alt="Pin 12" style={{ borderRadius: "16px" }} />
      </Cards>
      <Cards size="large">
        <img src={pin13} alt="Pin 13" style={{ borderRadius: "16px" }} />
      </Cards>
      <Cards size="large">
        <img src={pin14} alt="Pin 14" style={{ borderRadius: "16px" }} />
      </Cards>
      <Cards size="small">
        <img src={pin15} alt="Pin 15" style={{ borderRadius: "16px" }} />
      </Cards>
    </div>
  );
}

const styles = {
  pin_container: {
    width: "80vw",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, 250px)",
    gridAutoRows: "10px",
    justifyContent: "center",
  },
};

export default PinterestLayout;
