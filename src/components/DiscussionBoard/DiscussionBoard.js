import React, { useState } from 'react';
import Thread from './Thread';
import './DiscussionBoard.css';

const DiscussionBoard = () => {
  const [threads, setThreads] = useState([
    { id: 1, title: 'How to improve React performance?', user: 'John Doe', date: '2024-12-17' },
    { id: 2, title: 'Best practices in JavaScript', user: 'Jane Smith', date: '2024-12-15' },
    { id: 3, title: 'Web accessibility tips', user: 'Sam Green', date: '2024-12-14' },
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [editThreadId, setEditThreadId] = useState(null);
  const [threadTitle, setThreadTitle] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleNewThread = () => {
    if (!threadTitle.trim()) {
      alert('Thread title cannot be empty.');
      return;
    }

    const newThread = {
      id: threads.length + 1,
      title: threadTitle,
      user: 'New User', // Replace with dynamic user data if available
      date: new Date().toISOString().split('T')[0], // Format: YYYY-MM-DD
    };
    setThreads([newThread, ...threads]);
    setThreadTitle('');
    setShowModal(false);
  };

  const handleEditThread = (thread) => {
    setIsEditing(true);
    setEditThreadId(thread.id);
    setThreadTitle(thread.title);
    setShowModal(true);
  };

  const saveEditedThread = () => {
    if (!threadTitle.trim()) {
      alert('Thread title cannot be empty.');
      return;
    }

    setThreads((prevThreads) =>
      prevThreads.map((thread) =>
        thread.id === editThreadId ? { ...thread, title: threadTitle } : thread
      )
    );
    setIsEditing(false);
    setEditThreadId(null);
    setThreadTitle('');
    setShowModal(false);
  };

  return (
    <div className="discussion-board">
      <div className="discussion-board__header-container">
        <h2 className="discussion-board__header">Discussion Threads</h2>
        <button
          className="discussion-board__new-thread-button"
          onClick={() => {
            setIsEditing(false);
            setThreadTitle('');
            setShowModal(true);
          }}
        >
          + New Thread
        </button>
      </div>
      {threads.length > 0 ? (
        <ul className="discussion-board__list">
          {threads.map((thread) => (
            <li key={thread.id} className="discussion-board__item">
              <Thread thread={thread} />
              <div className="discussion-board__thread-meta">
                <span className="discussion-board__thread-user">
                  Posted by: {thread.user}
                </span>
                <span className="discussion-board__thread-date">{thread.date}</span>
                <button
                  className="discussion-board__edit-button"
                  onClick={() => handleEditThread(thread)}
                >
                  Edit
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="discussion-board__empty">
          No threads available. Start a new discussion!
        </p>
      )}

      {showModal && (
        <div className="discussion-board__modal">
          <div className="discussion-board__modal-content">
            <h3>{isEditing ? 'Edit Thread' : 'Create New Thread'}</h3>
            <input
              type="text"
              value={threadTitle}
              onChange={(e) => setThreadTitle(e.target.value)}
              placeholder="Enter thread title"
              className="discussion-board__input"
            />
            <div className="discussion-board__modal-actions">
              <button
                onClick={isEditing ? saveEditedThread : handleNewThread}
                className="discussion-board__create-button"
              >
                {isEditing ? 'Save Changes' : 'Create'}
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="discussion-board__cancel-button"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DiscussionBoard;
