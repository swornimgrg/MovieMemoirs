import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Search() {
  const [query, setQuery] = useState("");

  return (
    <Form className="d-flex">
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
        as="input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button variant="light">Search</Button>
    </Form>
  );
}

export default Search;
