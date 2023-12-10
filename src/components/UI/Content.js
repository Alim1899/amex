import Layout from "./Layout";
import classes from "./Content.module.css";
import background from "../../assets/cargo.jpg";
import { Formik, Form } from "formik";
import FormikControl from "../InputComponents/FormikControl";
const Content = (props) => {
  const resetAll = (formik) => {
    formik.values.state = "";
    formik.values.city = "";
    formik.values.type = "";
    return [{ key: "Choose", value: "" }];
  };
  const resetCity = (formik) => {
    formik.values.city = "";
    formik.values.type = "";
    return [{ key: "Choose", value: "" }];
  };

  return (
    <div className={classes.content}>
      <img className={classes.logo} src={background} alt="background"></img>
      <Layout>
        <Formik
          validateOnChange
          initialValues={{
            auction: "",
            state: "",
            city: "",
            type: "",
          }}
          onChange={(values) => {
            console.log(values);
          }}
        >
          {(formik) => (
            <div>
              <Form className={classes.form} onChange={props.handleChange}>
                <h4 className={classes.heading}>Calculate Transportation</h4>
                <FormikControl
                  className={classes.control}
                  name="auction"
                  control="select"
                  label="Auction:"
                  options={props.auctions}
                />

                <FormikControl
                  className={classes.control}
                  name="state"
                  control="select"
                  label="State:"
                  options={
                    formik.values.auction ? props.states : resetAll(formik)
                  }
                  disabled={props.stateDisable}
                />
                <FormikControl
                  className={classes.control}
                  name="city"
                  control="select"
                  label="City:"
                  options={
                    formik.values.state ? props.cities : resetCity(formik)
                  }
                  disabled={props.cityDisable}
                />

                <FormikControl
                  className={classes.control}
                  name="type"
                  control="select"
                  label="Type:"
                  options={
                    formik.values.city
                      ? props.types
                      :[{ key: "Choose", value: "" }]
                  }
                  disabled={props.typeDisable}
                />
              </Form>
              <div className={classes.price}>
                <h4 className={classes.portname}>
                  Port:
                  <span>New Jersey - 1560$</span>
                </h4>

                <h4 className={classes.portname}>
                  Port: <span>Savannah - 2760$</span>
                </h4>
              </div>
            </div>
          )}
        </Formik>
      </Layout>
    </div>
  );
};

export default Content;
