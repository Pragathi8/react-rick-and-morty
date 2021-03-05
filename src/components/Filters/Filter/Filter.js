import React from "react";
import { Accordion, Card, ListGroup } from "react-bootstrap";

const filter = props => {
  return (
    <Accordion>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          {props.category}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <ListGroup>
            {props.values.map(val => {
              return (
                <ListGroup.Item variant="info" key={val}>
                  <input
                    type="checkbox"
                    value={val}
                    onChange={event =>
                      props.handleFilter(
                        props.category,
                        event.target.value,
                        event.target.checked ? true : false
                      )
                    }
                  />
                  <label>{val}</label>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default filter;
