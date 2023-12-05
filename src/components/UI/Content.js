import Layout from "./Layout";
import classes from "./Content.module.css";
import background from "../../assets/cargo.jpg";
import { Formik, Form } from "formik";
import FormikControl from "../InputComponents/FormikControl";
const Content = (props) => {
  const auctions = [
    { key: "Choose", value: "" },
    { key: "copart", value: "Copart" },
    { key: "iaai", value: "IAAI" },
    { key: "manheim", value: "Manheim" },
    { key: "canada", value: "Canada" },
  ];
  const cities = [
    { key: "Choose", value: "" },
    { key: "copart", value: "Copart" },
    { key: "iaai", value: "IAAI" },
    { key: "manheim", value: "Manheim" },
    { key: "canada", value: "Canada" },
  ];
  const states = [
    { key: "Choose", value: "" },
    { key: "copart", value: "Copart" },
    { key: "iaai", value: "IAAI" },
    { key: "manheim", value: "Manheim" },
    { key: "canada", value: "Canada" },
  ];
  const carTypes = [
    { key: "Choose", value: "" },
    { key: "copart", value: "Copart" },
    { key: "iaai", value: "IAAI" },
    { key: "manheim", value: "Manheim" },
    { key: "canada", value: "Canada" },
  ];

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
            car:""
          }}
          onChange={(values) => {
            console.log(values);
          }}
        >
          {(formik) => (
            <Form
              className={classes.form}
              onChange={() => {
                console.log(formik.values.auction);
              }}
            >
              <h4 className={classes.heading}>Calculate Transportation</h4>

              <FormikControl
                name="auction"
                control="select"
                label="Auction:"
                options={auctions}
              />
              {formik.values.auction && (
                <FormikControl
                  name="city"
                  control="select"
                  label="City:"
                  options={cities}
                />
              )}
              {formik.values.auction && formik.values.city && (
                <FormikControl
                  name="state"
                  control="select"
                  label="State:"
                  options={states}
                />
              )}
              {formik.values.auction && formik.values.state && formik.values.city &&(
                <FormikControl
                  name="car"
                  control="select"
                  label="Type:"
                  options={carTypes}
                />
              )}
            </Form>
          )}
        </Formik>
      </Layout>
    </div>
  );
};

export default Content;
