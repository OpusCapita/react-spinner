import React from 'react';
import { Grid, Row, Col, Panel } from 'react-bootstrap';
import ExampleComponent from '../components/example.component';
import GithubLogo from '../images/logo-github.svg';

export default () => (
  <Grid>
    <Row>
      <Col xs={12} md={6}>
        <Row>
          <Col xs={10}>
            <h3>React spinner</h3>
          </Col>
          <Col xs={2}>
            <a
              href="https://github.com/OpusCapita/react-spinner"
              style={{ marginTop: '20px', display: 'block' }}
            >
              <GithubLogo />
            </a>
          </Col>
        </Row>
        <Panel>
          <ExampleComponent />
        </Panel>
      </Col>
    </Row>
  </Grid>
);
