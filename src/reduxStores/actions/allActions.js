import { ADD_PLAN } from "../../constants/textConfig";

export const addPlan = (data) => {
  return {
    type: ADD_PLAN,
    payload: {
      id: new Date().getTime().toString(),
      bill: data.bill,
      billNo: data.billNo,
      planName: data.planName,
      price: data.price,
      billType: data.billType,
      select: data.select,
    },
  };
};
