export const getSelectedValue = (object) => {
  let key = "";
  Object.keys(object).some((item) => {
    const isValueTrue = object[item] === true;
    if (isValueTrue) {
      key = item;
    }
    return isValueTrue;
  });
  console.log({ object }, { key });
  return key;
};
