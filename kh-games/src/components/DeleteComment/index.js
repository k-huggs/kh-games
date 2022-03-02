import React, { useState } from "react";

//styles
import { DeleteBtn } from "./DeleteComment.style";

const DeleteComment = ({ commentId, handleDelete }) => {
  return (
    <>
      <DeleteBtn>
        <button
          className="delete"
          onClick={(event) => {
            event.preventDefault();
            handleDelete(commentId);
          }}
        >
          Delete
        </button>
      </DeleteBtn>
    </>
  );
};
export default DeleteComment;
