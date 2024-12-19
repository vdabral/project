// src/components/DiscussionBoard/Thread.js
import React, { useState } from 'react';
import CommentBox from './CommentBox';

const Thread = ({ thread }) => {
  const [showComments, setShowComments] = useState(false);

  return (
    <div style={styles.thread}>
      <h3>{thread.title}</h3>
      <p>
        <strong>Posted by:</strong> {thread.user} | <strong>Date:</strong> {thread.date}
      </p>
      <button onClick={() => setShowComments(!showComments)}>
        {showComments ? 'Hide Comments' : 'View Comments'}
      </button>

      {showComments && <CommentBox threadId={thread.id} />}
    </div>
  );
};

const styles = {
  thread: {
    border: '1px solid #ccc',
    marginBottom: '15px',
    padding: '10px',
  },
};

export default Thread;
