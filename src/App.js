import React, { useState } from 'react';
import axios from 'axios';

export default function App() {
  const [uploadImage, setUploadImage] = useState([]);
  const presetKey = 'uploadPhoto';
  const cloudName = 'dcrrieysr';

  const handleFile = (event) => {
    const imageFiles = event.target.files;

    // Iterate through each file
    for (let i = 0; i < imageFiles.length; i++) {
      const file = imageFiles[i];
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', presetKey);

      // Make POST request to Cloudinary upload endpoint for each file
      axios
        .post(
          `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        )
        .then((res) => console.log(`Uploaded file ${i + 1}:`, res))
        .catch((err) => console.log(`Error uploading file ${i + 1}:`, err));
    }
  };



  return (
    <div>
      <p>test</p>
      <input
        type="file"
        multiple
        className="btn btn-primary mr-3 mb-3"
        accept="image/png, image/webp, image/jpg, image/jpeg"
        onChange={handleFile}
      />
    </div>
  );
}
