import React from 'react';
import Layout from '../../components/Layout';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import Input from '../../components/UI/Input';
/**
* @author
* @function Signup
**/

const Signup = (props) => {
  return(
    <Layout>
        <Container>
            <Row style={{marginTop: '50px'}}>
                <Col md={{span: 6, offset: 3}}>
                    <Form>
                        <Row>
                            <Col md={6}>
                                <Input 
                                    label="First Name"
                                    placeholder="First Name"
                                    value=""
                                    type="text"
                                    onChannge={() => {}}
                                />
                            </Col>
                            <Col md={6}>
                                <Input 
                                    label="Last Name"
                                    placeholder="Last Name"
                                    value=""
                                    type="text"
                                    onChannge={() => {}}
                                />
                            </Col>
                        </Row>

                        <Input 
                            label="Email"
                            placeholder="Email"
                            value=""
                            type="email"
                            onChannge={() => {}}
                        />

                        <Input 
                            label="Password"
                            placeholder="Password"
                            value=""
                            type="password"
                            onChannge={() => {}}
                        />


                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    </Layout>
   )

 }

export default Signup