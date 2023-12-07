import Content from "../UI/Content";
import copart from "./Data.json";
const Data = (props) => {
  const auctions = [
    { key: "Choose", value: "" },
    { key: "copart", value: "Copart" },
    { key: "iaai", value: "IAAI" },
    { key: "manheim", value: "Manheim" },
    { key: "canada", value: "Canada" },
  ];
const keys = [];
  const states = [
    { key: "Choose", value: "" },
  ];
  
  copart.forEach((el)=>{
    let key = (Math.random()*Math.random()*10000000).toFixed();
    if(keys.includes(el.state))return;

    else keys.push(el.state);
    console.log(key);
    states.push({key:key,value:el.state});

  })
  console.log(states);

  const cities = [
    { key: "Choose", value: "" },
    { key: "copart", value: "Copart" },
    { key: "iaai", value: "IAAI" },
    { key: "manheim", value: "Manheim" },
    { key: "canada", value: "Canada" },
  ];
  const types = [
    { key: "Choose", value: "" },
    { key: "copart", value: "Copart" },
    { key: "iaai", value: "IAAI" },
    { key: "manheim", value: "Manheim" },
    { key: "canada", value: "Canada" },
  ];

  return (
    <div>
      <Content
        auctions={auctions}
        cities={cities}
        states={states}
        types={types}
      ></Content>
    </div>
  );
};

export default Data;
