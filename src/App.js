import React, { Component } from "react";
import {
  Button,
  Container,
  Row,
  Col,
  Card,
  Alert,
  Badge,
  Stack,
  Breadcrumb,
  ButtonGroup,
  ButtonToolbar
} from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello Bootstrap</h1>
        <Button variant="primary">tes coyyyy</Button>
        <Container>
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/">Info</Breadcrumb.Item>
          </Breadcrumb>
          <Row>
            <Col sm={6}>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2023/07/14053934/Mudah-Dibuat-di-Rumah-Ini-Resep-Sate-Ayam-Bumbu-Kacang-yang-Lezat-.jpg"
                />
                <Card.Body>
                  <Card.Title>Sate</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={6}>
              <div className="media">
                <img
                  src="https://api2.kemenparekraf.go.id/storage/app/uploads/public/645/9b7/f4c/6459b7f4c5a9d173660361.jpg"
                  width={64}
                  className="mr-3"
                  alt="Bir Pletok"
                />
                <div className="media-body">
                  <h5 className="mt-0">Media heading</h5>
                  <p>
                    Will you do the same for me? It's time to face the music I'm
                    no longer your muse. Heard it's beautiful, be the judge and
                    my girls gonna take a vote. I can feel a phoenix inside of
                    me. Heaven is jealous of our love, angels are crying from up
                    above. Yeah, you take me to utopia.
                  </p>
                  <Button variant="info">Lihat</Button>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <Alert variant="danger">User yg kamu masukkan salah!</Alert>
            </Col>
            <Col>
              <h6>
                Example heading <Badge bg="secondary">New</Badge>
              </h6>
            </Col>
            <Col>
              <Button variant="primary">
                Profile <Badge bg="secondary">9</Badge>
                <span className="visually-hidden">unread messages</span>
              </Button>
              <Stack direction="horizontal" gap={2}>
                <Badge bg="primary">Primary</Badge>
                <Badge bg="secondary">Secondary</Badge>
                <Badge bg="success">Success</Badge>
                <Badge bg="danger">Danger</Badge>
                <Badge bg="warning" text="dark">
                  Warning
                </Badge>
                <Badge bg="info">Info</Badge>
                <Badge bg="light" text="dark">
                  Light
                </Badge>
                <Badge bg="dark">Dark</Badge>
              </Stack>
              <Button variant="primary">Primary</Button>{" "}
              <Button variant="secondary">Secondary</Button>{" "}
              <Button variant="success">Success</Button>{" "}
              <Button variant="warning">Warning</Button>{" "}
              <Button variant="danger">Danger</Button>{" "}
              <Button variant="info">Info</Button>{" "}
              <Button variant="light">Light</Button>{" "}
              <Button variant="dark">Dark</Button>
              <Button variant="link">Link</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <ButtonToolbar aria-label="Toolbar with button groups">
                <ButtonGroup className="mr-2" aria-label="first-group">
                  <Button>1</Button>
                  <Button>2</Button>
                  <Button>3</Button>
                  <Button>4</Button>
                </ButtonGroup>
              </ButtonToolbar>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
