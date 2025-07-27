
import React from "react";
import styles from "./CohortDetails.module.css";

const CohortDetails = ({ name, status, description }) => {
  const titleStyle = {
    color: status === "ongoing" ? "green" : "blue",
  };

  return (
    <div className={styles.box}>
      <h3 style={titleStyle}>{name}</h3>
      <dl>
        <dt>Status:</dt>
        <dd>{status}</dd>
        <dt>Description:</dt>
        <dd>{description}</dd>
      </dl>
    </div>
  );
};

export default CohortDetails;
