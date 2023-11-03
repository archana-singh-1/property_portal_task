// import React, { useState } from "react";
// import Header from "./Header";

// function PropertyForm() {
//   const [formData, setFormData] = useState({
//     address: "",
//     geoLocation: "",
//     configuration: "",
//     amenities: "",
//     availability: "",
//     rent: "",
//     maintenance: "",
//     deposit: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // You can process or display the formData here
//     console.log("Form Data:", formData);
//   };

//   return (
//     <>
//       <Header />
//       <div className="container">
//         <h2>Property Details</h2>

//         <form onSubmit={handleSubmit}>
//           Address:-
//           <input className="form"
//             type="text"
//             id="address"
//             name="address"
//             value={formData.address}
//             onChange={handleChange}
//             required
//           />

//           GeoLocation:-
//           <input className="form"
//             type="text"
//             id="geoLocation"
//             name="geoLocation"
//             value={formData.geoLocation}
//             onChange={handleChange}
//             required
//           />

//           Configuration:-
//           <input className="form"
//             type="text"
//             id="configuration"
//             name="configuration"
//             value={formData.configuration}
//             onChange={handleChange}
//             required
//           />

//           Amenities:-
//           <input className="form"
//             type="text"
//             id="amenities"
//             name="amenities"
//             value={formData.amenities}
//             onChange={handleChange}
//             required
//           />

//           Availability:-
//           <input className="form"
//             type="text"
//             id="availability"
//             name="availability"
//             value={formData.availability}
//             onChange={handleChange}
//             required
//           />

//           Rent Price:-
//           <input className="form"
//             type="number"
//             id="rent"
//             name="rent"
//             value={formData.rent}
//             onChange={handleChange}
//             required
//           />

//           Maintenance Price:-
//           <input className="form"
//             type="number"
//             id="maintenance"
//             name="maintenance"
//             value={formData.maintenance}
//             onChange={handleChange}
//             required
//           />

//           Deposit Price:-
//           <input className="form"
//             type="number"
//             id="deposit"
//             name="deposit"
//             value={formData.deposit}
//             onChange={handleChange}
//             required
//           />

//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     </>
//   );
// }

// export default PropertyForm;








import React, { useState } from "react";

function PhotoUpload() {
const [selectedFile, setSelectedFile] = useState(null);
const [images, setImages] = useState([]);

const handleFileChange = (event) => {
setSelectedFile(event.target.files[0]);
};

const handleUpload = () => {
const formData = new FormData();
formData.append("photo", selectedFile);

fetch("http://localhost:3000/upload", {
method: "POST",
body: formData,
})
.then((response) => response.json())
.then((data) => {
console.log("Upload successful:", data);
setSelectedFile(null);
alert("Upload successful");
})
.catch((error) => {
console.error("Error uploading photo:", error);
});
};
const getImages = async () => {
fetch("http://localhost:3000/all-photo", { method: "GET" })
.then((response) => response.json())
.then((res) => {
console.log("Upload data:", res);
setImages(res.data);
});
};
console.log(selectedFile);
return (
<div>
<h1>Photo Upload</h1>
<input type="text" onChange={handleFileChange} defaultValue={""} />
<button onClick={handleUpload}>Upload</button>
<button onClick={getImages}>Get all images</button>
{images.map((e) => (
<img src={e.url} alt="all" />
))}
</div>
);
}

export default PhotoUpload;