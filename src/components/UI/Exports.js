export  const defaultValue = [{ key: "Choose", value: "" }];

 export const typeOptions = [ { key: "Choose", value: "" },
  { key: "Sedan", value: "Sedan" },
  { key: "Hatchback", value: "Hatchback" },
  { key: "SUV", value: "SUV" },
  { key: "VAN", value: "VAN" },
  { key: "Motorcycle", value: "Motorcycle" },
  { key: "Trailer", value: "Trailer" },
  { key: "Other", value: "Other" },];
  export const stateOptions = [ { key: "Choose", value: "" },
  { key: "Sedan", value: "Sedan" },
  { key: "Hatchback", value: "Hatchback" },
  { key: "SUV", value: "SUV" },
  { key: "VAN", value: "VAN" },
  { key: "Motorcycle", value: "Motorcycle" },
  { key: "Trailer", value: "Trailer" },
  { key: "Other", value: "Other" },];
  export const cityOptions = [ { key: "Choose", value: "" },
  { key: "Sedan", value: "Sedan" },
  { key: "Hatchback", value: "Hatchback" },
  { key: "SUV", value: "SUV" },
  { key: "VAN", value: "VAN" },
  { key: "Motorcycle", value: "Motorcycle" },
  { key: "Trailer", value: "Trailer" },
  { key: "Other", value: "Other" },];


 export const initialValues = {
    auction: "",
    state: "",
    city: "",
    type: "",
    portOne: "",
    priceOne: "",
    portTwo: "",
    priceTwo: "",
  };
 export const auctionOptions = [
    { key: "Choose", value: "" },
    { key: "copart", value: "Copart" },
    { key: "iaai", value: "IAAI", disabled: true },
    { key: "manheim", value: "Manheim", disabled: true },
    { key: "canada", value: "Canada", disabled: true },
  ];
 export const renderOptions = (optArr) => {
    return optArr.map((option) => (
      <option
        key={option.value}
        value={option.value}
        disabled={option.disabled}
      >
        {option.value ? option.value : option.key}
      </option>
    ));
  };