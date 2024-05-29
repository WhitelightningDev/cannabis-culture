import React from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import cannabisImage from '../images/marijuana.png'; // Replace with your image path

const Home = () => (
  <Container>
    <Row className="mb-4">
      <Col md={8}>
        <Card>
          <Card.Body>
            <Card.Title className="text-center">Welcome to Cannabis Culture</Card.Title>
            <Card.Title className="text-center">The Dangers of Overconsumption of Cannabis:</Card.Title>
            <Card.Text>
              Long-term Effects on Lungs and Physiology Cannabis, often viewed as a relatively benign substance, has seen increased acceptance and legalization in many parts of the world.
              While its medical and recreational use offers benefits for some individuals, it is crucial to recognize the potential dangers associated with its overconsumption.
              Understanding the long-term effects on the lungs and overall physiological health is essential for making informed decisions about cannabis use.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card>
          <Card.Img variant="top" src={cannabisImage} alt="Cannabis Image" />
        </Card>
      </Col>
    </Row>
    <Row className="mb-4">
      <Col>
        <Card>
          <Card.Body>
            <Card.Title className="text-center">Editor's Note</Card.Title>
            <Card.Text>
              I don't care what anyone says about cannabis; it will eventually ruin you. My personal experience with cannabis began in a wholesome and extremely beneficial way, helping me manage stress and anxiety. 
              As a child, I went through many troubled times and didn't know how to cope until one night when I smoked a joint with a friend, and everything changed for me. That experience was incredible, even with the discomfort of the "greenies" that followed.
              <br /><br />
              Eventually, I started smoking before going to clubs, vividly remembering the distinct experiences with strobe lights and the unbelievable connection I felt with the music. Despite these positive moments, the long-term effects of cannabis took a toll. It's crucial to recognize the potential dangers it poses.
              <br /><br />
              Over time, I noticed a decline in my motivation and energy. I started putting off basic tasks, feeling drained and unmotivated. It reached a point where I couldn't do anything unless I smoked a joint, which became alarming. The mental anxiety I experienced from thinking about quitting made me smoke more, turning cannabis into the "oxygen I breathed."
              <br /><br />
              After nine years, I began developing breathing problems and eating disorders, despite maintaining a healthy diet and exercising regularly. I researched extensively, hoping to convince myself that cannabis wasn't to blame. However, platforms that advocate for cannabis rarely acknowledge its potential harm. They often promote a delusional idea of making the world a peaceful place by numbing us from reality, thus allowing them to control us for profit. We are their guinea pigs.
              <br /><br />
              In conclusion, while cannabis may offer short-term benefits, the long-term effects can be detrimental. It's essential to be aware of the potential risks and approach cannabis use with caution.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row className="mb-4">
      <Col>
        <Card>
          <Card.Body className="text-center">
            <Card.Text>Want to learn more...</Card.Text>
            <Button as={Link} to="/thc" variant="primary" className="m-2">Learn about THC</Button>
            <Button as={Link} to="/cbd" variant="secondary" className="m-2">Learn about CBD</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default Home;
