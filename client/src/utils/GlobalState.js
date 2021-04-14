import React, { createContext, useReducer, useContext } from "react";
// Don't forget to import all of your actions!

const BlogContext = createContext({
  id: "",
  name: ""
});
const { Provider } = BlogContext;

const reducer = (state, action) => {
  switch (action.type) {
  case "UPDATE_POSTS":
    return [
      ...state,
      {
        id: action.id,
        name: action.name
      }
    ]
  case "ADD_POST":
    return [
      {
        id: state.length * Math.random(),
        name: action.name
      }
    ]
  case "REMOVE_POST":
    return state.filter((_, index) => {
      return index !== action.index
    })
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

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(BlogContext);
};

export { StoreProvider, useStoreContext };
