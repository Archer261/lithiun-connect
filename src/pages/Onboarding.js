import { useState } from "react";
import Nav from "../components/Nav";

import React from "react";
const Onboarding = () => {
  const [formData, setFormData] = useState({
    user_id: "",
    first_name: "",
    dob_day: "",
    dob_month: "",
    dob_year: "",
    show_gender: false,
    gamer_identity: "man",
    gaming_interest: "online",
    email: "",
    url: "",
    about: "",
    connections: [],
  });

  const handleSubmit = () => {
    console.log("submitted");
  };

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  console.log(formData);

  return (
    <>
      <Nav minimal={true} setShowModal={() => {}} showModal={false} />
      <div className="onboarding">
        <h2>CREATE ACCOUNT</h2>
        <form onSubmit={handleSubmit}>
          <section>
            <label htmlFor="First_name">First Name</label>
            <input
              id="first_name"
              type="text"
              name="first_name"
              placeholder="First Name"
              required={true}
              value={formData.first_name}
              onChange={handleChange}
            />

            <label>Birthday</label>
            <div className="multiple-input-container">
              <input
                id="dob_day"
                type="number"
                name="dob_day"
                placeholder="DD"
                required={true}
                value={formData.dob_day}
                onChange={handleChange}
              />

              <input
                id="dob_month"
                type="number"
                name="dob_month"
                placeholder="MM"
                required={true}
                value={formData.dob_month}
                onChange={handleChange}
              />

              <input
                id="dob_year"
                type="number"
                name="dob_year"
                placeholder="YYYY"
                required={true}
                value={formData.dob_year}
                onChange={handleChange}
              />
            </div>

            <label>Gender</label>
            <div className="multiple-input-container">
              <input
                id="male-gamer"
                type="radio"
                name="gamer_identity"
                value="man"
                onChange={handleChange}
                checked={formData.gamer_identity === "man"}
              />
              <label htmlFor="male-gamer">Man</label>

              <input
                id="female-gamer"
                type="radio"
                name="gamer_identity"
                value="woman"
                onChange={handleChange}
                checked={formData.gamer_identity === "woman"}
              />
              <label htmlFor="female-gamer">Woman</label>
            </div>

            <label htmlFor="show-gender">Share my gender</label>
            <input
              id="show-gender"
              type="checkbox"
              name="show_gender"
              onChange={handleChange}
              checked={formData.show_gender}
            />

            <label>Show Me</label>
            <div className="multiple-input-container">
              <input
                id="online-gaming-interest"
                type="radio"
                name="gaming_interest"
                value="online"
                onChange={handleChange}
                checked={formData.gaming_interest === "online"}
              />
              <label htmlFor="online-gaming-interest">Online Gaming</label>

              <input
                id="lan-gaming-interest"
                type="radio"
                name="gaming_interest"
                value="lan"
                onChange={handleChange}
                checked={formData.gaming_interest === "lan"}
              />
              <label htmlFor="lan-gaming-interest">LAN Gaming</label>

              <input
                id="tc-gaming-interest"
                type="radio"
                name="gaming_interest"
                value="tcg"
                onChange={handleChange}
                checked={formData.gaming_interest === "tcg"}
              />
              <label htmlFor="tc-gaming-interest">Trading Card Gaming</label>

              <input
                id="all-gaming-interest"
                type="radio"
                name="gaming_interest"
                value="all"
                onChange={handleChange}
                checked={formData.gaming_interest === "all"}
              />
              <label htmlFor="all-gaming-interest">All</label>
            </div>

            <label htmlFor="about">About me</label>
            <input
              id="about"
              type="text"
              name="about"
              required={true}
              placeholder="I play fps games online..."
              value={formData.about}
              onChange={handleChange}
            />

            <input type="submit" />
          </section>

          <section>
            <label htmlFor="about">Profile Image</label>
            <input
              type="url"
              name="url"
              id="url"
              onChange={handleChange}
              required={true}
            />
            <div className="img-container">
              <img src={formData.url} alt="profile pic preview" />
            </div>
          </section>
        </form>
      </div>
    </>
  );
};

export default Onboarding;
