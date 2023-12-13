import Layout from "./Layout";
import classes from "./Content.module.css";
import background from "../../assets/cargo.jpg";
import { initialValues, renderOptions } from "./Exports";
import { Formik, Form } from "formik";
const Content = (props) => {
  return (
    <div className={classes.content}>
      <img className={classes.logo} src={background} alt="background"></img>
      <Layout>
        <Formik initialValues={initialValues}>
          {(formik) => (
            <Form className={classes.form} onChange={props.handleChange}>
              <h4 className={classes.heading}>Calculate Transportation</h4>

              {/*AUCTIONS \\\\\\\\\\\\\\\\\\\\\\\ */}
              <label htmlFor="auction">
                Auction:
                <select as="select" id="auction" name="auction">
                  {renderOptions(props.auctionOptions)}
                </select>
              </label>

              {/*STATES \\\\\\\\\\\\\\\\\\\\\\\ */}
              <label htmlFor="state">
                State:
                <select id="state" name="state" disabled={props.stateDisable}>
                  {renderOptions(props.stateValue)}
                </select>
              </label>

              {/*CITIES \\\\\\\\\\\\\\\\\\\\\\\ */}
              <label htmlFor="city">
                City:
                <select
                  as="select"
                  id="city"
                  name="city"
                  disabled={props.cityDisable}
                >
                  {renderOptions(props.cityValue)}
                </select>
              </label>

              {/*TYPES \\\\\\\\\\\\\\\\\\\\\\\ */}
              <label htmlFor="type">
                Type:
                <select
                  as="select"
                  id="type"
                  name="type"
                  disabled={props.typeDisable}
                >
                  {renderOptions(props.typeValue)}
                </select>
              </label>
              <label htmlFor="portOne">
                Port/Price
                <p id="portOne" name="portOne">
                  {props.portOne ? `${props.portOne}$` : "----/----"}
                </p>
              </label>

              {props.portTwo && (
                <label htmlFor="portOne">
                  Port/Price<span>(optional)</span>
                  <p id="portOne" name="portOne">
                    {props.portTwo ? `${props.portTwo}$` : "----/----"}
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
