import React from "react";
import Header from "../../Other/Header";
import CreateTask from "../../Other/CreateTask";
import AllTask from "../../Other/AllTask";

const AdminDashboard = () => {
  return (
    <div className=" h-screen p-10  w-full  ">
      <Header />
     <CreateTask/>
     <AllTask/>
    </div>
  );
};

export default AdminDashboard;
