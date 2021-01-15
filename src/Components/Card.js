import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Card = props => {
  return (
    <div
      className="card text-center"
      style={{
        width: "15rem;",
        width: "600px",
        height: "300px",
        marginLeft: "auto",
        marginRight: "auto"
      }}
    >
      <div className="card-body">
        <div className="avatar avatar-xs rounded-circle">
          <img
            alt="Image placeholder"
            src={props.src}
            style={{ width: "120px", height: "120px", borderRadius: "50%" }}
          />
          <hr
            style={{ marginTop: "-30px", width: "600px", marginLeft: "-20px" }}
          />
        </div>
        <br />

        <h5>Hi, my name is </h5>
        <h4>{props.name}</h4>
      </div>
    </div>
  );
};
export default Card;
