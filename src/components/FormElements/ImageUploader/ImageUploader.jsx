import { useState } from "react";

const PictureUploader = ({ label, value, setImageUrl }) => {
  return (
    <div className="textfield">
      <p className="textfield__label">{label}</p>
      <input
        type="file"
        accept="image/*"
        value={value}
        onChange={setImageUrl}
      />
    </div>
  );
};

export default PictureUploader;
