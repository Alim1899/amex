import Content from "../UI/Content";
import { useState } from "react";
import copart from "../Data/Data.json";
import { defaultValue, typeOptions, auctionOptions } from "../UI/Exports";
const Data = (props) => {
  const [stateDisable, setStateDisable] = useState(true);
  const [cityDisable, setCityDisable] = useState(true);
  const [typeDisable, setTypeDisable] = useState(true);
  const [stateValue, setStateValue] = useState(defaultValue);
  const [cityValue, setCityValue] = useState(defaultValue);
  const [typeValue, setTypeValue] = useState(typeOptions);
  const [portOne, setPortOne] = useState("");
  const [portTwo, setPortTwo] = useState("");
  const [ports, setPorts] = useState([]);
  const states = [defaultValue[0]];
  const cities = [defaultValue[0]];
  const handleChange = (e) => {
    if (e.target.id === "auction") {
      if (e.target.value === "Copart") {
        const shortNames = [];
        copart.forEach((el) => {
          if (!shortNames.includes(el.state)) shortNames.push(el.state);
        });
        shortNames.forEach((name) => {
          let key = Math.random() * Math.random();
          states.push({ key: key, value: name });
        });
        setStateValue(states);
        setStateDisable(false);
      } else {
        setStateDisable(true);
        setStateValue(defaultValue);
        setCityDisable(true);
        setCityValue(defaultValue);
        setTypeDisable(true);
        setTypeValue(defaultValue);
        setPorts([]);
      }
    } else if (e.target.id === "state") {
      if (e.target.value) {
        const cityNames = [];
        copart.forEach((el) => {
          if (e.target.value === el.state) cityNames.push(el.city);
        });
        cityNames.forEach((city) => {
          let key = Math.random() * Math.random();
          cities.push({ key: key, value: city });
        });

        if (cityValue.length > 1) {
          setTypeDisable(true);
          setPorts([]);
          setTypeValue(defaultValue);
          setCityDisable(true);
          setCityValue(defaultValue);
        }
        setTimeout(() => {
          setCityDisable(false);
          setCityValue(cities);
        }, 200);
      } else {
        setTypeDisable(true);
        setPorts([]);
        setTypeValue(defaultValue);
        setCityDisable(true);
        setCityValue(defaultValue);
      }
    } else if (e.target.id === "city") {
      if (e.target.value) {
        copart.forEach((el) => {
          if (el.city === e.target.value) {
            setPortOne(`${el.port}/${el.price}`);
            if (el.secondport) setPortTwo(`${el.secondport}/${el.secondprice}`);
          }
        });

        if (typeValue.length > 1) {
          setTypeDisable(true);
          setTypeValue(defaultValue);
          setPorts([]);
        }
        setTimeout(() => {
          setTypeDisable(false);
          setTypeValue(typeOptions);
        }, 200);
      } else {
        setPorts([]);
        setTypeDisable(true);
        setTypeValue(defaultValue);
      }
    } else if (e.target.id === "type") {
      setPorts([]);
      setTimeout(() => {
        if (e.target.value) {
          setPorts([portOne, portTwo]);
        } else {
          setPorts([]);
        }
      }, 200);
    }
  };
  return (
    <div>
      <Content
        handleChange={handleChange}
        auctionOptions={auctionOptions}
        stateDisable={stateDisable}
        cityDisable={cityDisable}
        typeOptions={typeOptions}
        typeDisable={typeDisable}
        stateValue={stateValue}
        cityValue={cityValue}
        typeValue={typeValue}
        portOne={ports[0]}
        portTwo={ports[1]}
      ></Content>
    </div>
  );
};

export default Data;
