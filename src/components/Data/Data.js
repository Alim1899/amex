import Content from "../UI/Content";
import copart from "./Data.json";
import { useState } from "react";
const Data = (props) => {
  const defaultValue = [{ key: "Choose", value: "" }];
  //State for manage disabled fields
  const [stateDisable, setStateDisable] = useState(true);
  const [cityDisable, setCityDisable] = useState(true);
  const [typeDisable, setTypeDisable] = useState(true);
  const [state, setState] = useState(defaultValue);
  const [city, setCity] = useState(defaultValue);
  const [type, setType] = useState(defaultValue);
  const [portOne, setPortOne] = useState("----|----");
  const [portTwo, setPortTwo] = useState("");
  const [activeCity, setActiveCity] = useState({});

  //\\\\\\\\\\\\\\\\\\\\Default auctions and car types
  const auctions = [
    { key: "Choose", value: "" },
    { key: "copart", value: "Copart" },
    { key: "iaai", value: "IAAI", disabled: true },
    { key: "manheim", value: "Manheim", disabled: true },
    { key: "canada", value: "Canada", disabled: true },
  ];
  const carTypes = [
    { key: "Choose", value: "" },
    { key: "Sedan", value: "Sedan" },
    { key: "Hatchback", value: "Hatchback" },
    { key: "SUV", value: "SUV" },
    { key: "VAN", value: "VAN" },
    { key: "Motorcycle", value: "Motorcycle" },
    { key: "Trailer", value: "Trailer" },
    { key: "Other", value: "Other" },
  ];
  //\\\\\\\\\\\\\\\\\\Variables for retrieve data
  const states = defaultValue;
  const cities = defaultValue;

  //|||\\\\\\\\\\\Handling changes on fields
  const stateShortNames = [];
  const cityByState = [];
  const handleChange = (e) => {
    setPortOne("----|----");
        setPortTwo("");
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
        setCityDisable(true);
        setStateDisable(true);
        setTypeDisable(true);
        setPortOne("----|----");
        setPortTwo("");
      }
    } else if (e.target.id === "state") {
      setType(defaultValue);
      setCity(defaultValue);
      setTypeDisable(true);
      ///
      if (e.target.value === "") {
        setCityDisable(true);
        setTypeDisable(true);
        setPortOne("----|----");
        setPortTwo("");
        cities.splice(1, cities.length);
        return;
      } else {
        copart.forEach((el) => {
          if (e.target.value === el.state) {
            if (!cityByState.includes(el.city)) cityByState.push(el.city);
          }
        });
        cityByState.forEach((city) => {
          let key = (Math.random() * Math.random() * 10000000).toFixed();
          cities.push({ key: key * key, value: city });
        });

        setCity(cities);
        setCityDisable(false);
      }










    } else if (e.target.id === "city") {
     
      if (e.target.value) {
        setPortOne("----|----");
        setPortTwo("");
        setType(carTypes)
        setTypeDisable(false);
        setActiveCity({ name: e.target.value });
      
      } else {
        setType(defaultValue)
        setTypeDisable(true);
        
      }
















    } else if (e.target.id === "type") {
      console.log(activeCity);
      if (!e.target.value) {
        setPortOne("----|----");
        setPortTwo("");
      }else{
        copart.find((el) => {
          if (el.city === activeCity.name) {
            console.log('ByTypeField');
            return setPortOne(`${el.port} | ${el.price}`);
          } else return null;
        });
      }
      console.log(portOne);

      // console.log(e.target.value, activeCity);
    }
  };

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
        portOne={portOne}
        portTwo={portTwo}
      ></Content>
    </div>
  );
};

export default Data;
