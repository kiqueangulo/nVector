import React from "react";

import AddLocationForm from "./AddLocationForm";
import AddProductForm from "./AddProductForm";

import "../Search/Search.css";

function Add() {
  return (
    <>
      <h2>Add</h2>
      <AddLocationForm />
      <AddProductForm />
    </>
  );
}

export default Add;
