export const defaultValue = [{ key: "Choose", value: "" }];

export const typeOptions = [
  { key: "Choose", value: "" },
  { key: "Sedan", value: "Sedan" },
  { key: "Hatchback", value: "Hatchback" },
  { key: "SUV", value: "SUV" },
  { key: "VAN", value: "VAN" },
  { key: "Motorcycle", value: "Motorcycle" },
  { key: "Trailer", value: "Trailer" },
  { key: "Other", value: "Other" },
];
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
  { key: "iaai", value: "IAAI" },
];
export const renderOptions = (optArr) => {
  return optArr.map((option) => (
    <option key={option.value} value={option.value} disabled={option.disabled}>
      {option.value ? option.value : option.key}
    </option>
  ));
};

export const stateValues = (auction) => {
  const shortNames = [];
  const uniqueNames = [...defaultValue];
  auction.forEach((el) => {
    if (!shortNames.includes(el.state)) shortNames.push(el.state);
  });
  shortNames.sort();
  shortNames.forEach((el) => {
    let key = Math.random() * Math.random();
    uniqueNames.push({ key: key, value: el });
  });
  return uniqueNames;
};
