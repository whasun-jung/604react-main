import React from "react";

const Profile = ({img,name,title,isNew}) => {

  return (
    <div className="profile">
      <img src={img} alt="avatar" />
      {/* {isNew?<span className="new">신입</span>:""} */}
      {isNew && <span className="new">신입</span>}
      <h2>{name}</h2>
      <p>{title}</p>
    </div>
  );
};

export default Profile;
