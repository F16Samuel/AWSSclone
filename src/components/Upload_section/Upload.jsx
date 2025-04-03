import React, { useState } from 'react';
import './Upload.css';
import { SlideUp } from '../../Utility/animations';
import { motion } from 'framer-motion';

const Upload = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [responseMessage, setResponseMessage] = useState('');

  // Handle Image Selection
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      setPreviewImage(URL.createObjectURL(file)); // Create a preview URL
    }
  };

  // Handle Upload to Backend
  const handleUpload = async () => {
    if (!selectedImage) {
      alert('Please select an image first.');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedImage);

    try {
      const response = await fetch('http://localhost:8000/api/classify/', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to classify image');
      }

      const data = await response.json();
      setResponseMessage(data.message); // Assuming API returns { message: 'Recyclable' or 'Non-Recyclable' }
    } catch (error) {
      setResponseMessage('Error: ' + error.message);
    }
  };

  return (
    <div className='Hero-section'>
      {/* Text section */}
      <div className='hero-section-text'>
        <div className='hero-section-text-2'>
          <motion.h1
            variants={SlideUp(0.2)}
            whileInView={'animate'}
            initial='initial'
            className='Upload-img-header'
          >
            The Most Advanced <br /> Waste Classification Model
          </motion.h1>
          <motion.p
            variants={SlideUp(0.4)}
            whileInView={'animate'}
            initial='initial'
            className='upload-img-text'
          >
            Upload the image you want to classify and get the result in seconds.
          </motion.p>
          <motion.div
            variants={SlideUp(0.2)}
            whileInView={'animate'}
            initial='initial'
            className='see-button'
          >
            <button onClick={handleUpload}>Upload</button>
          </motion.div>
        </div>
      </div>

      {/* Image Upload section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
        className='hero-section-image'
      >
        <div className='hero-section-image-2'>
          {previewImage ? (
            <img src={previewImage} alt='Selected' className='preview-image' />
          ) : (
            <p>No image selected</p>
          )}

          {/* File Input */}
          <input type='file' accept='image/*' onChange={handleImageChange} />
        </div>
        
        {/* Response Message Display */}
        {responseMessage && (
          <div className={`result-container ${responseMessage.includes('Error') ? 'error-message' : 'success-message'}`}>
            <p>{responseMessage}</p>
          </div>
      )}
      </motion.div>
    </div>
  );
};

export default Upload;
