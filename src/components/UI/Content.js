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
            car: "",
          }}
          onChange={(values) => {
            console.log(values);
          }}
        >
          {(formik) => (
            <div>
            <Form
              className={classes.form}
              onChange={() => {
                console.log(formik.values.auction);
              }}
            >
              <h4 className={classes.heading}>Calculate Transportation</h4>

              <FormikControl
              className={classes.control}
                name="auction"
                control="select"
                label="Auction:"
                options={auctions}
              />

              <FormikControl
               className={classes.control}
                name="city"
                control="select"
                label="City:"
                options={cities}
              />

              <FormikControl
               className={classes.control}
                name="state"
                control="select"
                label="State:"
                options={states}
              />

              <FormikControl
               className={classes.control}
                name="car"
                control="select"
                label="Type:"
                options={carTypes}
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
