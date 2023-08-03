import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Search() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`/api/search?query=${searchQuery}`);
      const data = await response.json();

      setSearchResults(data.rows);
    } catch (error) {
      console.error("No results found", error);
    }
    console.log(searchResults);
  };

  return (
    <Form className="d-flex">
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
        as="input"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Button variant="light" onClick={handleSubmit}>
        Search
      </Button>
    </Form>
  );
}

export default Search;
