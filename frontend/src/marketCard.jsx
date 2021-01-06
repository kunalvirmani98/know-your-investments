import React from 'react';
import {Card} from 'react-bootstrap';

export default function MarketCard(props) {
    return (
        <Card>
        <Card.Body>
          <Card.Title>{props.indexName}</Card.Title>
          <Card.Text>
            {props.indexValue}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    )
}