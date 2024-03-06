import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFile, resetFiles } from '../../app/store';
import './Draganddrop.css';

const DragAndDrop = () => {
  const dispatch = useDispatch();
  const files = useSelector((state) => state.files);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const fileInputRef = useRef(null);

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = [...e.dataTransfer.files];
    const newFiles = droppedFiles.map((file) => ({
      name: file.name,
      size: file.size,
      type: file.type,
    }));

    // Dispatch action to add files to the store
    newFiles.forEach((file) => {
      dispatch(addFile(file));
    });

    // Open confirmation dialog
    setIsConfirmationOpen(true);
  };

  const handleFileSelect = () => {
    // Trigger click on the hidden file input
    fileInputRef.current.click();
  };

  const handleFileInputChange = (e) => {
    const selectedFiles = [...e.target.files];
    const newFiles = selectedFiles.map((file) => ({
      name: file.name,
      size: file.size,
      type: file.type,
    }));

    // Dispatch action to add files to the store
    newFiles.forEach((file) => {
      dispatch(addFile(file));
    });

    // Open confirmation dialog
    setIsConfirmationOpen(true);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleCancel = () => {
    // Clear files if the user cancels
    dispatch(resetFiles());
    setIsConfirmationOpen(false);
  };

  const handleSubmit = () => {
    // Handle the submission of files
    setIsConfirmationOpen(false);
    // Implement submission logic here
    console.log('Submitted files:', files);
  };

  return (
    <div className="dropzone-container">
      <div
        className="dropzone"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        style={{ width: '300px', height: '200px', border: '2px dashed #ccc' }}
      >
        <h3>Drag & Drop Files Here</h3>
        <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileInputChange}
        multiple
      />
      <button onClick={handleFileSelect}>Select File</button>
      </div>
      
      {isConfirmationOpen && (
        <div>
          <p>Are you sure you want to submit these files?</p>
          <button onClick={handleSubmit}>Submit</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default DragAndDrop;
