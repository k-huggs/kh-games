import React, { useState } from "react";

// Components
import Spinner from "../Spinner";

const DeleteComment = ({ commentId, handleDelete }) => {
  return (
    <>
      <div>
        <button
          onClick={(event) => {
            event.preventDefault();
            handleDelete(commentId);
          }}
        >
          Delete
        </button>
      </div>
    </>
  );
};
export default DeleteComment;
