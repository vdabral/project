import React, { useState } from 'react';
import ReactQuill from 'react-quill'; // Import react-quill editor
import 'react-quill/dist/quill.snow.css'; // Import styles for the editor

const RichTextEditor = () => {
  const [editorContent, setEditorContent] = useState('');

  const handleEditorChange = (value) => {
    setEditorContent(value);
  };

  return (
    <ReactQuill
      value={editorContent}
      onChange={handleEditorChange}
      theme="snow"
      placeholder="Write your post here..."
    />
  );
};

export default RichTextEditor;
