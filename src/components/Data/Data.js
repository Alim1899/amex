import Content from "../UI/Content";
import { useState } from "react";
import copart from "../Data/Data.json";
import {
  defaultValue,
  typeOptions,
  auctionOptions,
  stateOptions,
  cityOptions,
} from "../UI/Exports";
const Data = (props) => {
  const [stateDisable, setStateDisable] = useState(true);
  const [cityDisable, setCityDisable] = useState(true);
  const [typeDisable, setTypeDisable] = useState(true);
  const [activeState,setActiveState] = useState("");
  const [activeCity,setActiveCity] = useState("");
  const [stateValue, setStateValue] = useState(stateOptions);
  const [cityValue, setCityValue] = useState(cityOptions);
  const [typeValue, setTypeValue] = useState(typeOptions);
  const [portOne, setPortOne] = useState("");
  const [portOnePrice, setPortOnePrice] = useState("");
  const [portTwo, setPortTwo] = useState("");
  const [portTwoPrice, setPortTwoPrice] = useState("");
 const states = [defaultValue[0]];
 const cities = [defaultValue[0]];
  const handleChange = (e) => {
    if (e.target.id === "auction") {
      if (e.target.value === "Copart") {
        const shortNames = [];
        copart.forEach(el=>{
          if(!shortNames.includes(el.state))shortNames.push(el.state);         
        })
        shortNames.forEach(name=>{
          let key =Math.random()*Math.random();
          states.push({key:key, value:name})
        })
        setStateValue(states);
        setStateDisable(false);
      } else {
        setStateDisable(true);
        setStateValue(defaultValue);
        setCityDisable(true);
        setCityValue(defaultValue);
        setTypeDisable(true);
        setTypeValue(defaultValue);
        setPortOne("");
        setPortOnePrice("");
      }
    } else if (e.target.id === "state") {
      setActiveCity(e.target.value);
      if (e.target.value) {
       
       console.log(activeCity);
        if (cityValue.length > 1) {
          setTypeDisable(true);
          setPortOne("");
          setPortOnePrice("");
          setTypeValue(defaultValue);
          setCityDisable(true);
          setCityValue(defaultValue);
        }
        
        // const cityNames = [];
        // copart.forEach(el=>{
        //   if(!cityNames.includes(el.state))cityNames.push(el.state);         
        // })
        // cityNames.forEach(name=>{
        //   let key =Math.random()*Math.random();
        //   cities.push({key:key, value:name})
        // })
        
        setTimeout(() => {
          setCityDisable(false);
          setCityValue(cityValue);
        }, 200);
      } else {
        setTypeDisable(true);
        setPortOne("");
        setPortOnePrice("");
        setTypeValue(defaultValue);
        setCityDisable(true);
        setCityValue(defaultValue);
      }
    } else if (e.target.id === "city") {
      if (e.target.value) {
        if (typeValue.length > 1) {
          setTypeDisable(true);
          setPortOne("");
          setPortOnePrice("");
          setTypeValue(defaultValue);
        }
        setTimeout(() => {
          setTypeDisable(false);
          setTypeValue(typeOptions);
        }, 200);
      } else {
        setPortOne("");
        setPortOnePrice("");
        setTypeDisable(true);
        setTypeValue(defaultValue);
      }
    } else if (e.target.id === "type") {
      if (e.target.value) {
        setPortOne("");
        setPortOnePrice("");
        setTimeout(() => {
          setPortOne("New jersey");
          setPortOnePrice("1550");
        }, 200);

        if (portTwo) {
          setPortTwo("Ganton");
          setPortTwoPrice("1450");
        } else {
          setPortTwo("");
          setPortTwoPrice("p");
        }
      } else {
        setPortOne("");
        setPortOnePrice("");
      }
    }
  };
  return (
    <div>
      <Content
        handleChange={handleChange}
        auctionOptions={auctionOptions}
        stateOptions={stateOptions}
        stateDisable={stateDisable}
        cityOptions={cityOptions}
        cityDisable={cityDisable}
        typeOptions={typeOptions}
        typeDisable={typeDisable}
        stateValue={stateValue}
        cityValue={cityValue}
        typeValue={typeValue}
        portOne={portOne}
        portOnePrice={portOnePrice}
        portTwo={portTwo}
        portTwoPrice={portTwoPrice}
      ></Content>
    </div>
  );
};

export default Data;
