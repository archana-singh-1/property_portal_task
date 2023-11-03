import React, { useState } from "react";
import Header from "./Header";

function PropertyForm() {
  const [formData, setFormData] = useState({
    address: "",
    geoLocation: "",
    configuration: "",
    amenities: "",
    availability: "",
    rent: "",
    maintenance: "",
    deposit: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can process or display the formData here
    console.log("Form Data:", formData);
  };

  return (
    <>
      <Header />
      <div className="container">
        <h2>Property Details</h2>

        <form onSubmit={handleSubmit}>
          Address:-
          <input className="form"
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />

          GeoLocation:-
          <input className="form"
            type="text"
            id="geoLocation"
            name="geoLocation"
            value={formData.geoLocation}
            onChange={handleChange}
            required
          />

          Configuration:-
          <input className="form"
            type="text"
            id="configuration"
            name="configuration"
            value={formData.configuration}
            onChange={handleChange}
            required
          />

          Amenities:-
          <input className="form"
            type="text"
            id="amenities"
            name="amenities"
            value={formData.amenities}
            onChange={handleChange}
            required
          />

          Availability:-
          <input className="form"
            type="text"
            id="availability"
            name="availability"
            value={formData.availability}
            onChange={handleChange}
            required
          />

          Rent Price:-
          <input className="form"
            type="number"
            id="rent"
            name="rent"
            value={formData.rent}
            onChange={handleChange}
            required
          />

          Maintenance Price:-
          <input className="form"
            type="number"
            id="maintenance"
            name="maintenance"
            value={formData.maintenance}
            onChange={handleChange}
            required
          />

          Deposit Price:-
          <input className="form"
            type="number"
            id="deposit"
            name="deposit"
            value={formData.deposit}
            onChange={handleChange}
            required
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default PropertyForm;








