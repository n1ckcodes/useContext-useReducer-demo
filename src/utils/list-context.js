import React, { useReducer, createContext } from "react";

export const ListContext = createContext();

const initialState = {
  items: [
    {
      task: "Go to store",
    },
    {
      task: "Laundry",
    },
    {
      task: "Relax"
    },
  ]
//These could be used for async calls to show a loading wheel
//   loading: false,
//   error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        items: [...state.items, action.payload],
      };
    case "DEL_ITEM":
      return {
        items: state.items.filter(
          (item) => item.task !== action.payload
        ),
      };
    default:
      throw new Error();
  }
};

export const ListContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ListContext.Provider value={[state, dispatch]}>
      {props.children}
    </ListContext.Provider>
  );
};
