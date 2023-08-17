import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import { News } from './News';
export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div>
            <NavMenu />
            <News />
        <Container>
          {this.props.children}
        </Container>
      </div>
    );
  }
}
