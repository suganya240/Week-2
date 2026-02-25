import React from "react";

const Details = ({ details = {}, profession }) => {
  
  const {
    name,
    residence: { city, country }
  } = details;

  return (
    <div>
      <h2>Person Details</h2>
      <p>Name: {name}</p>
      <p>City: {city}</p>
      <p>Country: {country}</p>
      <p>Profession: {profession}</p>
    </div>
  );
};

const Person = () => {
  return (
    <Details
      details={{
        name: "Suganya",
        residence: {
          city: "Tiruppur",
          country: "India"
        }
      }}
      profession="Student"
    />
  );
};

export default Person;
