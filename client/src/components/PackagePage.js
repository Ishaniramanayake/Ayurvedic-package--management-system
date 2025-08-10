import React, { useState, useEffect } from "react";
import axios from "axios";
import PackageForm from "./PackageForm";
import PackageList from "./PackageList";

axios.defaults.baseURL = "http://localhost:8090"; // Adjust the base URL to match your server API

function PackagePage() {
  const [addSection, setAddSection] = useState(false);
  const [formData, setFormData] = useState({
    packageName: "",
    doctorName: "",
  });
  const [dataList, setDataList] = useState([]);

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/add-package-doctor", formData);

      if (response.data.message) {
        alert(response.data.message);
        setFormData({
          packageName: "",
          doctorName: "",
        });
        setAddSection(false); // Close the form
        // Fetch updated data and update the dataList
        fetchData();
        setDataList((prevDataList) => [...prevDataList, formData]);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form. Please try again.");
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("/get-package-doctor"); // Replace with the correct endpoint to fetch data

      if (response.data.success) {
        setDataList(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2>Add Package and Doctor</h2>
      <button onClick={() => setAddSection(!addSection)}>
        {addSection ? "Close Form" : "Assign Doctor"}
      </button>
      {addSection ? (
        <PackageForm
          handleSubmit={handleSubmit}
          handleOnChange={handleOnChange}
          rest={formData}
        />
      ) : (
        <div>
          <PackageList dataList={dataList} />
        </div>
      )}
    </div>
  );
}

export default PackagePage;
