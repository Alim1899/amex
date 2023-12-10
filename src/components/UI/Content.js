import Layout from "./Layout";
import classes from "./Content.module.css";
import background from "../../assets/cargo.jpg";
import copart from "../Data/Data.json";
import {
  defaultValue,
  typeOptions,
  auctionOptions,
  renderOptions,
  initialValues,
} from "./Exports";
import { Formik, Form, Field } from "formik";
const Content = (props) => {
  const stateOptions = [];
  const cityOptions = [];
  const handleChange=(value)=>{
    console.log(value);
  }
  return (
    <div className={classes.content}>
      <img className={classes.logo} src={background} alt="background"></img>
      <Layout>
        <Formik
          validateOnChange
          initialValues={initialValues}
          onChange={(values) => {
            console.log(values);
          }}
        >
          {(formik) => (
            <Form className={classes.form} onChange={handleChange(formik.values)}>
              <h4 className={classes.heading}>Calculate Transportation</h4>
              <label htmlFor="auction">
                Auction:
                <Field
                  as="select"
                  autoComplete="off"
                  id="auction"
                  name="auction"
                >
                  {renderOptions(auctionOptions)}
                </Field>
              </label>
              <label htmlFor="state">
                State:
                <Field as="select" autoComplete="off" id="state" name="state">
                  {stateOptions.length > 0
                    ? renderOptions(stateOptions)
                    : renderOptions(defaultValue)}
                </Field>
              </label>
              <label htmlFor="city">
                City:
                <Field as="select" autoComplete="off" id="city" name="city">
                  {cityOptions.length > 0
                    ? renderOptions(cityOptions)
                    : renderOptions(defaultValue)}
                </Field>
              </label>
              <label htmlFor="type">
                Type:
                <Field as="select" autoComplete="off" id="type" name="type">
                  {renderOptions(typeOptions)}
                </Field>
              </label> 
              <label htmlFor="portOne">Port/Price
                <p  id='portOne' name='portOne'>
                  {formik.values.portOne?`${formik.values.portOne}|${formik.values.priceOne}`:"----|----"}
                </p>
              </label>
            </Form>
          )}
        </Formik>
      </Layout>
    </div>
  );
};

export default Content;

// <FormikControl
// className={classes.control}
// name="auction"
// control="select"
// label="Auction:"
// options={props.auctions}
// />

// <FormikControl
// className={classes.control}
// name="state"
// control="select"
// label="State:"
// options={
//   formik.values.auction ? props.states : resetAll(formik)
// }
// disabled={props.stateDisable}
// />
// <FormikControl
// className={classes.control}
// name="city"
// control="select"
// label="City:"
// options={
//   formik.values.state ? props.cities : resetCity(formik)
// }
// disabled={props.cityDisable}
// />
// <FormikControl
// className={classes.control}
// name="type"
// control="select"
// label="Type:"
// options={
//   formik.values.city
//     ? props.types
//     : [{ key: "Choose", value: "" }]
// }
// disabled={props.typeDisable}
// />
// <div className={classes.priceContent}>
// <h4 className={classes.portname}>Port/Price:</h4>
// <h4  className={classes.span}>
//   {props.portOne}
// </h4>
// </div>
// {props.portTwo && (
// <div  className={classes.priceContent}>
//   <h4 className={classes.portname}>Port/Price: </h4>

//   <h4 className={classes.span}>{props.portTwo}</h4>
// </div>
// )}
// const resetAll = (formik) => {
//   formik.values.state = "";
//   formik.values.city = "";
//   formik.values.type = "";
//   return [{ key: "Choose", value: "" }];
// };
// const resetCity = (formik) => {
//   formik.values.city = "";
//   formik.values.type = "";
//   return [{ key: "Choose", value: "" }];
// };
