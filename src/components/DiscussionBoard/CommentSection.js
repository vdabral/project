import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './CommentSection.css'; // Add corresponding CSS for styling

const CommentSection = ({ postId, fetchComments }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadComments = async () => {
    try {
      setIsLoading(true);
      setError(null);

      // Fetch comments for the given post
      const fetchedComments = await fetchComments(postId);
      setComments(fetchedComments);
    } catch (err) {
      setError(err.message || 'Failed to load comments. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadComments();
  }, [postId]);

  return (
    <div className="comment-section">
      <h3>Comments</h3>
      {isLoading ? (
        <div className="comment-section__loading">
          <div className="spinner"></div> {/* Optional: Add spinner CSS */}
          <p>Loading comments...</p>
        </div>
      ) : error ? (
        <div className="comment-section__error">
          <p>{error}</p>
          <button onClick={loadComments} className="retry-button">Retry</button>
        </div>
      ) : comments.length === 0 ? (
        <p className="comment-section__empty">
          No comments yet. <span className="call-to-action">Be the first to comment!</span>
        </p>
      ) : (
        <ul className="comment-section__list">
          {comments.map((comment) => (
            <li key={comment.id} className="comment-section__item">
              <p>{comment.text}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

CommentSection.defaultProps = {
  fetchComments: async () => {
    // Mock fetch logic (replace with your actual API call)
    return [
      { id: 1, text: 'This is a comment.' },
      { id: 2, text: 'This is another comment.' },
    ];
  },
};

CommentSection.propTypes = {
  postId: PropTypes.number.isRequired,
  fetchComments: PropTypes.func,
};

export default CommentSection;
