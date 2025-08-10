import React from "react";
//import "../css/PackageList.css"; // You may need to create a separate CSS file for PackageList if required.

const PackageList = ({ dataList, handleEdit, handleDelete }) => {
  return (
    <div className="tableContainer">
      <table>
        <thead>
          <tr>
            <th>Package Name</th>
            <th>Doctor Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {dataList.map((packageItem) => (
            <tr key={packageItem._id}>
              <td>{packageItem.packageName}</td>
              <td>{packageItem.doctorName}</td>
              <td>
                <button className="btn btn-edit" onClick={() => handleEdit(packageItem)}>
                  Edit
                </button>
                <button className="btn btn-delete" onClick={() => handleDelete(packageItem._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PackageList;

