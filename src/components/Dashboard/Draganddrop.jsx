import { useState, useRef } from "react";
import { useNavigate } from "react-router";
import './Draganddrop.css';
const Draganddrop = () => {
  const [files, setFiles] = useState(null);
  const inputRef = useRef();
  const navigate = useNavigate();

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setFiles(event.dataTransfer.files);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("Files", files);

    console.log(formData);
    console.log(files);
    for (const value of formData.values()) {
      console.log(value);
    }
    navigate("/dashboard");
  };
  if (files)
    return (
      <div className="uploads">
        <ul>
          {Array.from(files).map((file, idx) => (
            <li key={idx}>{file.name}</li>
          ))}
        </ul>
        <div className="actions">
          <button onClick={() => setFiles(null)}>Cancel</button>
          <button onClick={handleUpload}>Upload</button>
        </div>
      </div>
    );

  return (
    <>
      <div className="dropzone-container bg-slate-800">
        <div
          className="dropzone"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <h1 className="text-slate-200">Drag and Drop Files to Upload</h1>
          <h1 className="text-slate-200">Or</h1>
          <input
            type="file"
            multiple
            onChange={(event) => setFiles(event.target.files)}
            hidden
            accept="image/png, image/jpeg"
            ref={inputRef}
          />
          <button onClick={() => inputRef.current.click()} className="w-48 h-14">Select Files</button>
        </div>
      </div>
    </>
  );
};

export default Draganddrop;
