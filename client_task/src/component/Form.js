import React, { useState } from "react";
function PhotoUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [geo_location, setGeo_location] = useState("");
  const [configuration, setConfiguration] = useState("");
  const [amenities, setAmenities] = useState("");
  const [availability, setAvailability] = useState("");
  const [prices, setPrices] = useState("");
  const [uploadMessage, setUploadMessage] = useState("");

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (!selectedFile) {
      setUploadMessage("Please select a file.");
      return;
    }
    console.log("Uploading file...");
    
    const formData = new FormData();
    formData.append("photo", selectedFile);
    formData.append("geo_location", geo_location);
    formData.append("configuration", configuration);
    formData.append("amenities", amenities);
    formData.append("availability", availability);
    formData.append("prices", prices);
  
    
    
      fetch("http://localhost:4000/post_property", {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error uploading photo");
          }
          return response.text(); 
        })
        .then((data) => {
          console.log("Response:", data); 
          setSelectedFile(null);
          setUploadMessage("Upload successful");
        })
        .catch((error) => {
          console.error("Error uploading photo:", error);
          setUploadMessage("Error uploading photo.");
        });
    };
  return (
    <div>
      <input
        type="file"
        name="photo"
        onChange={handleFileChange}
        placeholder="Upload a photo"
      />
      <input
        type="text"
        name="geo_location"
        value={geo_location}
        onChange={(e) => setGeo_location(e.target.value)}
        placeholder="Enter geo_location"
      />
      <input
        type="text"
        name="configuration"
        value={configuration}
        onChange={(e) => setConfiguration(e.target.value)}
        placeholder="Enter configuration"
      />
      <input
        type="text"
        name="amenities"
        value={amenities}
        onChange={(e) => setAmenities(e.target.value)}
        placeholder="Enter amenities"
      />
      <input
        type="text"
        name="availability"
        value={availability}
        onChange={(e) => setAvailability(e.target.value)}
        placeholder="Enter availability"
      />
      <input
        type="text"
        name="prices"
        value={prices}
        onChange={(e) => setPrices(e.target.value)}
        placeholder="Enter prices"
      />
      <button onClick={handleUpload}>Upload</button>
      {uploadMessage && <p>{uploadMessage}</p>}
    </div>
  );
}

export default PhotoUpload;
