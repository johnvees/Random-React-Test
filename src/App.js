import React, { useState } from 'react';

export default function App() {
  const [uploadImage, setUploadImage] = useState([]);
  const presetKey = '';
  const cloudName = '';

  const handleFile = (event) => {
    const imageFile = event.target.files[0];
  };

  return (
    <div>
      <p>test</p>
      <input
        type="file"
        multiple
        className="btn btn-primary mr-3 mb-3"
        accept="image/png, image/webp, image/jpg, image/jpeg"
      />
    </div>
  );
}
