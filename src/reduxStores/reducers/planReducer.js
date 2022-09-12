import { ADD_PLAN } from "../../constants/textConfig";

const initialState = {
  list: [],
};

const planReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLAN:
      const { id, bill, billNo, planName, price, billType, select } =
        action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            bill: bill,
            billNo: billNo,
            planName: planName,
            price: price,
            billType: billType,
            select: select,
          },
        ],
      };
    default:
      return state;
  }
};

export default planReducers;
