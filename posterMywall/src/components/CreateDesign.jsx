import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateDesign = () => {
  const fileInputRef = useRef(null)
  const navigate = useNavigate();
  const [design, setDesign] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    sales: "",
    uses: "",
  });

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const handleImageToUpload = (e) => {
    setDesign(e.target.files[0]);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleUpload = (e) => {
    e.preventDefault();
    if (!design) {
      console.error("No file selected for upload.");
      return;
    }

    const imageFormData = new FormData();
    imageFormData.append("file", design);
    imageFormData.append("upload_preset", "yqanaohn");
    imageFormData.append("cloud_name", "dnowgdk4r");

    fetch('https://api.cloudinary.com/v1_1/dnowgdk4r/image/upload', {
      method: 'POST',
      body: imageFormData
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error uploading image");
        }
        return response.json();
      })
      .then((data) => {
        setImageUrl(data.secure_url);
        console.log("Uploaded Image URL:", data.secure_url);
        const allFormData = {
          ...formData,
          image_url: data.secure_url
        };
        return fetch('http://127.0.0.1:5555/designs', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(allFormData)
        });
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error submitting design");
        }
        return response.json();
      })
      .then((data) => {
        console.log('Response from backend:', data);
        navigate(`/hashtags/${data.id}`);
      })
      .catch((error) => {
        console.error('Error submitting design:', error);
      });
  };

  return (
    <div>
      <form className='flex flex-col items-center justify-center' onSubmit={handleUpload}>
        <input type='file' className='hidden' ref={fileInputRef}  onChange={handleImageToUpload} placeholder='Upload image' required />
        <button onClick={triggerFileInput}>Upload file</button>
        <input className='hidden' name='name' value={formData.name} type='text' onChange={handleInputChange} placeholder='Design Name' />
        <input className='hidden' type='text' name='sales' value={formData.sales} onChange={handleInputChange} placeholder='Sales' />
        <input className='hidden' type='text' name='uses' value={formData.uses} onChange={handleInputChange} placeholder='Uses' />
        <button type='submit' className='flex w-[200px] items-center justify-center text-white mt-11 p-2 rounded-md bg-[#3b82f6]'>
          Next
        </button>
      </form>
    </div>
  );
};

export default CreateDesign;
