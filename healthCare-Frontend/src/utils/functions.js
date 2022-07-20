export const getSelectedValue = (object) => {
  return Object.keys(object).filter((item) => object[item] === true);
};
