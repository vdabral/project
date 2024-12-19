import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './CommentBox.css';

const CommentBox = ({ threadId, onSubmit }) => {
  const [comment, setComment] = useState('');

  const handleCommentChange = (value) => {
    setComment(value);
  };

  const handleSubmit = () => {
    if (comment.trim() === '') {
      alert('Comment cannot be empty!');
      return;
    }
    onSubmit(threadId, comment);
    setComment('');
  };

  return (
    <div className="comment-box">
      <h4 className="comment-box__header">Add a Comment</h4>
      <ReactQuill
        value={comment}
        onChange={handleCommentChange}
        className="comment-box__editor"
        placeholder="Write your comment here..."
      />
      <button onClick={handleSubmit} className="comment-box__button">
        Submit Comment
      </button>
    </div>
  );
};

export default CommentBox;
