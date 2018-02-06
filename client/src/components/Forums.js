import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

class Forums extends Component {
  render() {
    return (
      <div className="forums">
        <h2> Forums </h2>
        <Card body>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional
            content.
          </CardText>
          <Button>Go somewhere</Button>
        </Card>
        <Card body className="text-center">
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional
            content.
          </CardText>
          <Button>Go somewhere</Button>
        </Card>
        <Card body className="text-right">
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional
            content.
          </CardText>
          <Button>Go somewhere</Button>
        </Card>
      </div>
    );
  }
}

export default Forums;
