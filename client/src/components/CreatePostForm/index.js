import React, { useRef } from "react";
import { useStoreContext } from '../../utils/GlobalState'

const CreatePostForm = () => {
  const inputRef = useRef();
  const [_, dispatch] = useStoreContext();

  // added dispatch
  const handleSubmit = e => {
    e.preventDefault();
    dispatch({
      type: 'ADD_POST',
      name: inputRef.current.value
    });
    inputRef.current.value = '';
  };

  return (
    <div>
      <div className="jumbotron">
        <img
          className="img-fluid img-thumbnail"
          src="https://images.pexels.com/photos/459688/pexels-photo-459688.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        />
      </div>
      {/* added inputRef */}
      <h1>Create a blog post</h1>
      <form className="form-group mt-5 mb-5" onSubmit={handleSubmit}>
        <input ref={inputRef} className="form-control mb-5" required placeholder="Title" />
        <textarea className="form-control mb-5" required placeholder="Body" />
        <input ref={inputRef} className="form-control mb-5" placeholder="Screen name" />
        {/* TODO: disable if the global state is "loading" */}
        <button className="btn btn-success mt-3 mb-5" type="submit">
          Save Post
        </button>
      </form>
    </div>
  );
};

export default CreatePostForm;

