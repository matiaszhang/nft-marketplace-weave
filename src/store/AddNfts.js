import React, { useState, useContext } from "react";
import { NftContext } from "./NftContext";
//component that allows to add the data to the store
//this is a random component not related to the project

export default function AddNft() {
  //creating a state for our input field

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [nfts, setNfts] = useContext(NftContext);

  const UpdateName = (e) => {
    setName(e.target.value);
  };

  const UpdatePrice = (e) => {
    setPrice(e.target.value);
  };

  const AddNfts = (e) => {
    e.preventDefault();
    // ...preMovies makes a copy of  the previously saved movies
    setMovies((prevNfts) => [...prevNfts, 
      { name: name, price: price }]);
  };

  return (
    <form onSubmit={AddNfts}>
      {/* name is the name of the movie list it will be added to */}
      <input type="text" name="name" value={name} onChange={UpdateName} />
      <input type="text" name="price" value={price} onChange={UpdatePrice} />
      <button> Submit </button>
    </form>
  );
}
