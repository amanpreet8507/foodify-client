import React from "react";

const PictureUploader = ({label}) => {
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    // Do something with the uploaded file, like displaying preview or sending to server
  };

  return (
    <div className="textfield">
      <p className="textfield__label">{label}</p>
      <input type="file" accept="image/*" onChange={handleFileUpload} />
    </div>
  );
};

export default PictureUploader;
