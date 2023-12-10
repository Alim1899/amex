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
const types = [];
  const states = defaultValue;
  const cities = defaultValue;

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
        setCityDisable(true);
        setStateDisable(true);
        setTypeDisable(true);
      }
    } else if (e.target.id === "state") {
      setType(defaultValue);
      setCity(defaultValue);
      setTypeDisable(true);
      ///
      if (e.target.value === "") {
        setCityDisable(true);
        setTypeDisable(true);
        cities.splice(1, cities.length);
        return;
      }else{
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
      if (e.target.value.length > 0) {
        setType(carTypes)
        setTypeDisable(false);
      } else {
        setTypeDisable(true);
      }
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
      ></Content>
    </div>
  );
};

export default Data;
