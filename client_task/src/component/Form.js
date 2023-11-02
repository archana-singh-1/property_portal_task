import React, { useState } from "react";

function PropertyForm() {
  const [formData, setFormData] = useState({
    address: "",
    geoLocation: "",
    configuration: "",
    amenities: "",
    availability: "",
    photos: "",
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
    <div className="container">
      <h2>Property Details</h2>
      <form onSubmit={handleSubmit}>
        <label>Adress:-
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        </label>

        <label>geoLocation:-
        <input
          type="text"
          id="geoLocation"
          name="geoLocation"
          value={formData.geoLocation}
          onChange={handleChange}
          required
        />
        </label>

        <label>Configuration:-
        <input
          type="text"
          id="configuration"
          name="configuration"
          value={formData.configuration}
          onChange={handleChange}
          required
        />
        </label>
    

        <label>Amenities:-
        <input
          type="text"
          id="amenities"
          name="amenities"
          value={formData.amenities}
          onChange={handleChange}
          required
        />
        </label>

        <label>Availability:-
        <input
          type="text"
          id="availability"
          name="availability"
          value={formData.availability}
          onChange={handleChange}
          required
        />
        </label>
        
        <label>RentPrice:-
        <input
          type="number"
          id="rent"
          name="rent"
          value={formData.rent}
          onChange={handleChange}
          required
        />
        </label>

        <label>Maintenance Price:
        <input
            type="number"
            id="maintenance"
            name="maintenance"
            value={formData.maintenance}
            onChange={handleChange}
            required
        />
        </label>

        <label>Deposit Price:
            <input
            type="number"
            id="deposit"
            name="deposit"
            value={formData.deposit}
            onChange={handleChange}
        required
        />

        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default PropertyForm;









