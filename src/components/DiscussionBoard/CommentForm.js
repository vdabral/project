import React, { useState } from 'react';
import './CommentForm.css'; // Optional: Add a CSS file for styling

const CommentForm = ({ postId, onCommentSubmit }) => {
  const [commentText, setCommentText] = useState('');
  const [error, setError] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();

    if (!commentText.trim()) {
      setError('Comment cannot be empty.');
      return;
    }

    // Pass the comment to the parent or handle it here (e.g., API call)
    onCommentSubmit && onCommentSubmit(postId, commentText);

    console.log(`New comment for post ${postId}: ${commentText}`);
    setCommentText('');
    setError('');
  };

  return (
    <form onSubmit={handleCommentSubmit} className="comment-form">
      <label htmlFor={`comment-${postId}`} className="comment-form__label">
        Add a Comment:
      </label>
      <textarea
        id={`comment-${postId}`}
        className="comment-form__textarea"
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        placeholder="Write your comment here..."
        aria-invalid={!!error}
        aria-describedby={error ? 'error-message' : undefined}
      />
      {error && <span id="error-message" className="comment-form__error">{error}</span>}
      <button
        type="submit"
        className="comment-form__button"
        disabled={!commentText.trim()}
      >
        Post Comment
      </button>
    </form>
  );
};

export default CommentForm;
