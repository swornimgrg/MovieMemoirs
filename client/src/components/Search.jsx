import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Search() {
  const [query, setQuery] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });

      if (response.ok) {
        const data = await response.json();
        // Handle the search results received from the backend
        console.log(data);
      } else {
        // Handle the error case
        console.log("Error:", response.status);
      }
    } catch (error) {
      // Handle any network or fetch-related errors
      console.log("Error:", error);
    }
  };

  return (
    <Form className="d-flex" onSubmit={handleSubmit}>
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
