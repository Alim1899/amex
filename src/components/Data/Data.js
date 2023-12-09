import Content from "../UI/Content";
import copart from "./Data.json";
import { useState, useEffect } from "react";
const Data = (props) => {
  //State for manage disabled fields
  const [stateDisable, setStateDisable] = useState(true);
  const [cityDisable, setCityDisable] = useState(true);
  const [typeDisable, setTypeDisable] = useState(true);
  const [state, setState] = useState([{ key: "Choose", value: "" }]);
  const [city, setCity] = useState([{ key: "Choose", value: "" }]);
  const [type, setType] = useState([{ key: "Choose", value: "" }]);

  //\\\\\\\\\\\\\\\\\\\\Default auctions
  const auctions = [
    { key: "Choose", value: "" },
    { key: "copart", value: "Copart" },
    { key: "iaai", value: "IAAI", disabled: true },
    { key: "manheim", value: "Manheim", disabled: true },
    { key: "canada", value: "Canada", disabled: true },
  ];
  //\\\\\\\\\\\\\\\\\\Variables for retrieve data

  const states = [{ key: "Choose", value: "" }];
  const cities = [{ key: "Choose", value: "" }];
  const types = [{ key: "Choose", value: "" }];

  //|||\\\\\\\\\\\Handling changes on fields
  const stateShortNames = [];
  const cityByState = [];
  const handleChange = (e) => {
    if (e.target.id === "auction") {
      if (e.target.value === "Copart") {
        copart.forEach((el) => {
          //
          if (!stateShortNames.includes(el.state))
            stateShortNames.push(el.state);
        });
        //
        stateShortNames.forEach((el) => {
          let key = (Math.random() * Math.random() * 10000000).toFixed();
          states.push({ key: key * key, value: el });
        });
        //
        setState(states);
        setStateDisable(false);
      } else {
        setStateDisable(true);
      }
    } else if (e.target.id === "state") {
      ///
      cities.splice(1,cities.length)
      copart.forEach((el) => {
        if (e.target.value === el.state) {
          if (!cityByState.includes(el.city)) cityByState.push(el.city);
        }})
        cityByState.forEach(city=>{
          let key = (Math.random() * Math.random() * 10000000).toFixed();
           cities.push({ key: key * key, value: city });
        })
        
        console.log(cities);
         setCity(cities);
        setCityDisable(false);
      
    
  };
}

  return (
    <div>
      <Content
        handleChange={handleChange}
        auctions={auctions}
        stateDisable={stateDisable}
        cityDisable={cityDisable}
        typeDisable={typeDisable}
        cities={city}
        states={state}
        types={type}
      ></Content>
    </div>
  );
};

export default Data;
