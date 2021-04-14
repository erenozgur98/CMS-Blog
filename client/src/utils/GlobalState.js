import React, { createContext, useReducer, useContext } from "react";
// Don't forget to import all of your actions!

const BlogContext = createContext({
  id: "",
  name: ""
})

const reducer = (state, action) => {
  switch (action.type) {
  case "UPDATE_POSTS":
    return 
  case "ADD_POST":
    return
  case "REMOVE_POST":
    return
  case "SET_CURRENT_POST":
    return {
      ...state,
      currentPost: action.post,
      loading: false
    };
  case "LOADING":
    return
  default:
    return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {});

  return "PROVIDER ELEMENT HERE";
};

const useStoreContext = () => {
  return useContext(BlogContext);
};

export { StoreProvider, useStoreContext };
