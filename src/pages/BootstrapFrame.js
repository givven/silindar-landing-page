import { Col, Container, Row,Button } from "react-bootstrap";

export default function BootstrapFrame(){
    return (
        <Container>
            <Row>
                <Col>1 of 2</Col>
                <Col>2 of 2</Col>
            </Row>
            <Row>
                <Col>1 of 3</Col>
                <Col>2 of 3</Col>
                <Col>3 of 3</Col>
            </Row>
            <Row>
                <Button>Hello Man</Button>
            </Row>
        </Container>
    );
}