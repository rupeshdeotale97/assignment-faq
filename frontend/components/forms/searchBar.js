import React from "react";
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";

const SearchBar = ({
  className,
  searchId,
  submitId,
  searchInput,
  searchUpdate,
  onSearch,
}) => {
  return (
    <Container className={className}>
      <Row>
        <Col xs={8} sm={8} md={8} lg={10} xl={10}>
          <InputGroup size="lg">
            <InputGroup.Prepend>
              <InputGroup.Text>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Search..."
              defaultValue={searchInput}
              onChange={(e) => searchUpdate(e.target.value)}
              data-testid={'search'}
              aria-label="search"
              aria-describedby="search"
            />
          </InputGroup>
        </Col>
        <Col className="text-right" xs={4} sm={4} md={4} lg={2} xl={2}>
          <Button
            data-testid={submitId}
            disabled={!searchInput}
            variant="light"
            size="lg"
            onClick={onSearch}
          >
            Submit
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchBar;
