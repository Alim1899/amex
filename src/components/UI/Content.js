import Layout from "./Layout";
import classes from "./Content.module.css";
import background from "../../assets/cargo.jpg";
import { useState } from "react";
// import copart from "../Data/Data.json";
import {
  defaultValue,
  typeOptions,
  auctionOptions,
  renderOptions,
  initialValues,
  stateOptions,
  cityOptions,
} from "./Exports";
import { Formik, Form } from "formik";
const Content = (props) => {
  const [stateDisable, setStateDisable] = useState(true);
  const [cityDisable, setCityDisable] = useState(true);
  const [typeDisable, setTypeDisable] = useState(true);
  const [stateValue, setStateValue] = useState(stateOptions);
  const [cityValue, setCityValue] = useState(cityOptions);
  const [typeValue, setTypeValue] = useState(typeOptions);
  const [portOne, setPortOne] = useState("");
  const [portOnePrice, setPortOnePrice] = useState("");
  const [portTwo, setPortTwo] = useState("");
  const [portTwoPrice, setPortTwoPrice] = useState("");

  const handleChange = (e, formik) => {
    if (e.target.id === "auction") {
      if (e.target.value === "Copart") {
        setStateValue(stateOptions);
        setStateDisable(false);
      } else {
        setStateDisable(true);
        setStateValue(defaultValue);
        setCityDisable(true);
        setCityValue(defaultValue);
        setTypeDisable(true);
        setTypeValue(defaultValue);
      }
    } else if (e.target.id === "state") {
      if (e.target.value) {
        setCityDisable(false);
        setCityValue(cityOptions);
      } else {
        setTypeDisable(true);
        setTypeValue(defaultValue);
        setCityDisable(true);
        setCityValue(defaultValue);
      }
    } else if (e.target.id === "city") {
      if (e.target.value) {
        setTypeDisable(false);
        setTypeValue(typeOptions);
      } else {
        setTypeDisable(true);
        setTypeValue(defaultValue);
      }
    } else if (e.target.id === "type") {
      if (e.target.value) {
        setPortOne("New jersey");
        setPortOnePrice("1550");
        if (portTwo) {
          setPortTwo("Ganton");
          setPortTwoPrice("1450");
        }else{
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
    <div className={classes.content}>
      <img className={classes.logo} src={background} alt="background"></img>
      <Layout>
        <Formik initialValues={initialValues}>
          {(formik) => (
            <Form
              className={classes.form}
              onChange={(event) => handleChange(event, formik)}
            >
              <h4 className={classes.heading}>Calculate Transportation</h4>

              {/*AUCTIONS \\\\\\\\\\\\\\\\\\\\\\\ */}
              <label htmlFor="auction">
                Auction:
                <select as="select" id="auction" name="auction">
                  {renderOptions(auctionOptions)}
                </select>
              </label>

              {/*STATES \\\\\\\\\\\\\\\\\\\\\\\ */}
              <label htmlFor="state">
                State:
                <select id="state" name="state" disabled={stateDisable}>
                  {renderOptions(stateValue)}
                </select>
              </label>

              {/*CITIES \\\\\\\\\\\\\\\\\\\\\\\ */}
              <label htmlFor="city">
                City:
                <select
                  as="select"
                  id="city"
                  name="city"
                  disabled={cityDisable}
                >
                  {renderOptions(cityValue)}
                </select>
              </label>

              {/*TYPES \\\\\\\\\\\\\\\\\\\\\\\ */}
              <label htmlFor="type">
                Type:
                <select
                  as="select"
                  id="type"
                  name="type"
                  disabled={typeDisable}
                >
                  {renderOptions(typeValue)}
                </select>
              </label>
              <label htmlFor="portOne">
                Port/Price
                <p id="portOne" name="portOne">
                  {portOne ? `${portOne}/${portOnePrice}` : "----/----"}
                </p>
              </label>

              {portTwo && (
                <label htmlFor="portOne">
                  Port/Price<span>(optional)</span>
                  <p id="portOne" name="portOne">
                    {portTwo ? `${portTwo}/${portTwoPrice}` : "----/----"}
                  </p>
                </label>
              )}
            </Form>
          )}
        </Formik>
      </Layout>
    </div>
  );
};

export default Content;
