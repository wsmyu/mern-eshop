import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  
  const submitHandler = (e) => {
    e.preventDefault();
    navigate(query ? `/search?query=${query}` : "/search");
    setQuery(""); 
  };
  return (
    <Form className="d-flex me-auto" onSubmit={submitHandler}>
      <InputGroup>
        <FormControl
          type="text"
          name="q"
          id="q"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search products..."
          aria-label="Search Products"
          aria-describedby="button-search"
        ></FormControl>
        <Button type="submit" id="button-search">
          <i className="fas fa-search"></i>
        </Button>
      </InputGroup>
    </Form>
  );
};

export default SearchBox;
