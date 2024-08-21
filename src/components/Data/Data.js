import { useState, useRef } from "react";
import classes from "./Data.module.css";
import copart from "../Data/Data.json";
import {
  auctionOptions,
  renderOptions,
  defaultValue,
  stateValues
} from "../UI/Exports";
import background from "../../assets/cargo.jpg";
import Layout from "../UI/Layout";
import { getDatabase,ref,get } from "firebase/database";
import app from '../../firebaseConfig';

const Data = () => {
  const aucRef = useRef();
  const [stateDisable, setStateDisable] = useState(true);
  const [stateValue, setStateValue] = useState(defaultValue);

  const getData = async()=>{
    const db = getDatabase(app);
const dbRef = ref(db, 'Copart')
try {
  const snapshot = await get(dbRef);
  if (snapshot.exists()) {
  
  } else {
  }
} catch (error) {

}
  }
  getData();





 const states = stateValues(copart);
  const handleChange = (e) => {

    const id = e.target.id;
    const auction = aucRef.current.value;
    console.log(auction);
    let timeout;
    if (id === "auction") {  
          if(auction){
              setStateDisable(true)
            setStateValue(defaultValue)

            
            if (timeout) {
              clearTimeout(timeout); // Clear the previous timeout if it exists
            }
          
            timeout = setTimeout(() => {
              setStateDisable(false);
              setStateValue(states);
            }, 100);
          
          } 
            
            
           
          }else{
            if (timeout) {
              clearTimeout(timeout); // Clear the timeout if the condition is false
            }
            setStateDisable(true)
            setStateValue(defaultValue)
          }
    
  };

  return (
    <div className={classes.content}>
      <Layout>
        <img className={classes.logo} src={background} alt="background"></img>

        <div className={classes.form} onChange={(e)=>handleChange(e)}>
          <h4 className={classes.heading}>Calculate Transportation</h4>

          {/* AUCTIONS */}

          <label htmlFor="auction">
            Auction:
            <select ref={aucRef}  id="auction" name="auction">
              {renderOptions(auctionOptions)}
            </select>
          </label>

          {/* STATES */}
          <label htmlFor="state">
            State:
            <select id="state" name="state" disabled={stateDisable}>
              {renderOptions(stateValue)}
            </select>
          </label>
        </div>
      </Layout>
    </div>
  );
};

export default Data;

