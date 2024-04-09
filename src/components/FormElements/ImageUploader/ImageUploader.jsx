import { useState } from "react";

const PictureUploader = ({ label, setImageUrl }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    setSelectedFile(uploadedFile);
    setImageUrl(URL.createObjectURL(uploadedFile));
  };
  return (
    <div className="textfield">
      <p className="textfield__label">{label}</p>
      <input type="file" accept="image/*" onChange={handleFileUpload} />
    </div>
  );
};

export default PictureUploader;
