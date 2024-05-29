import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

const Services = () => (
  <Container className="mt-4">
    <Row className="mb-4">
      <Col md={12}>
        <Card>
          <Card.Body>
            <Card.Title className="text-center mb-4">Our Services</Card.Title>
            <Card.Text>
              If you need help getting off cannabis or if you feel you also have a problem, we are here to help. We are not medical doctors, but like-minded people who have also walked the path of resistance and have overcome the grips of long-term cannabis use. Our goal is to support you through your journey by sharing our experiences, offering guidance, and providing a community of understanding and encouragement.
            </Card.Text>
            <Card.Text>
              <ul>
                <li><strong>Support Groups:</strong> Join our support groups where you can share your experiences and listen to others who have been through similar struggles.</li>
                <li><strong>Resource Sharing:</strong> Access our curated resources including articles, books, and videos that provide insights and strategies for overcoming cannabis dependency.</li>
                <li><strong>One-on-One Support:</strong> Connect with a peer supporter for personalized guidance and encouragement.</li>
                <li><strong>Workshops and Webinars:</strong> Participate in workshops and webinars that focus on mental health, wellness, and coping strategies.</li>
              </ul>
            </Card.Text>
            <Card.Text>
              Remember, you are not alone in this journey. Our community is here to support you every step of the way. Reach out to us, and let's overcome the challenges together.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default Services;
