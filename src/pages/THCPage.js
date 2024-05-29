import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import THC from '../images/thc.png';
import Delta9 from '../images/220px-Delta-9-tetrahydrocannabinol-from-tosylate-xtal-3D-balls.png';
import brain from '../images/brain-2.png'

const THCPage = () => (
  <Container>
    <Row className="mb-4">
      <Col md={8}>
        <Card>
          <Card.Body>
            <Card.Title>Understanding THC:</Card.Title>
            <Card.Text>
              <i>THC also known as Δ9-tetrahydrocannabinol (Δ9-THC or simply THC)</i>
              <br />
              <img
                src={THC}
                width="100"
                height="100"
                className="d-inline-block align-top"
                alt="THC"
              />
            </Card.Text>
            <Card.Title>Molecular Structure</Card.Title>
            <Card.Text>
              Chemical Formula: <p>C₂₁H₃₀O₂</p>
              Structure: THC is a terpene phenolic compound with a tricyclic 21-carbon structure.
              It has a cyclohexene ring fused to a benzopyran moiety.
              The structure includes a hydroxyl group (-OH) on the benzopyran ring and a pentyl side chain.
            </Card.Text>
            <Card.Text>
              In other words: THC is a type of compound found in cannabis. 
              It has a complex structure with three connected rings and 21 carbon atoms. 
              Part of its structure includes a six-sided ring joined to another ring with oxygen. 
              It also has an -OH group (like in alcohol) attached to one of the rings and a chain of five carbon atoms.
            </Card.Text>
            <Card.Text>
              <a href='https://en.wikipedia.org/wiki/Tetrahydrocannabinol#Chemical_structure'>
                THC Chemical properties and structure
              </a>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card>
          <Card.Img variant="top" src={Delta9} alt="Delta-9-tetrahydrocannabinol" />
        </Card>
      </Col>
    </Row>
    <Col md={12}>
        <Card>
          <Card.Body>
            <Card.Title className="mb-4">How THC Affects the Brain</Card.Title>
            <img
                src={brain}
                width="100"
                height="100"
                className="d-inline-block align-top"
                alt="THC"
              />
              <br></br>
            <Card.Title className="mb-3">Cannabinoid Receptors</Card.Title>
            <ul>
              <li>CB1 Receptors: Predominantly located in the brain and central nervous system.</li>
              <li>CB2 Receptors: Found mainly in the peripheral organs, especially cells associated with the immune system.</li>
            </ul>
            <Card.Title className="mb-3">Mechanism of Action</Card.Title>
            <ul>
              <li>THC is a partial agonist of CB1 receptors, meaning it binds to these receptors and activates them, albeit not to the full extent as the body’s natural endocannabinoids (like anandamide).</li>
            </ul>
            <Card.Title className="mb-3">Effects on the Brain</Card.Title>
            <Card.Text>
              When THC binds to CB1 receptors, it leads to various neurochemical changes:
            </Card.Text>
            <ul>
              <li>Dopamine: Increased dopamine release in the brain’s reward pathways contributes to the sensation of euphoria or a "high."</li>
              <li>GABA and Glutamate: Modulation of these neurotransmitters affects memory, cognition, and perception.</li>
            </ul>
            <Card.Title className="mb-3">Psychoactive Effects</Card.Title>
            <ul>
              <li>Euphoria: Feelings of happiness and well-being.</li>
              <li>Altered Perception: Changes in sensory perception, time distortion, and visual or auditory hallucinations.</li>
              <li>Relaxation: Reduced anxiety and stress levels.</li>
            </ul>
            <Card.Title className="mb-3">Cognitive Impairment</Card.Title>
            <ul>
              <li>Memory: Short-term memory impairment due to the effect on the hippocampus, a brain region critical for memory formation.</li>
              <li>Attention: Difficulty in maintaining attention and concentration.</li>
              <li>Executive Function: Impaired decision-making, planning, and problem-solving skills.</li>
            </ul>
            <Card.Title className="mb-3">Motor Coordination and Reaction Time</Card.Title>
            <Card.Text>
              THC affects the cerebellum and basal ganglia, leading to impaired motor coordination and delayed reaction times.
            </Card.Text>
            <Card.Title className="mb-3">Additional Considerations</Card.Title>
            <ul>
              <li>Long-Term Effects: Chronic use of THC can lead to tolerance, dependence, and potential changes in brain structure and function.</li>
              <li>Medical Applications: Despite its psychoactive properties, THC also has therapeutic uses, such as pain relief, appetite stimulation in chemotherapy patients, and reduction of muscle spasms in conditions like multiple sclerosis.</li>
            </ul>
          </Card.Body>
        </Card>
      </Col>
      <br></br>
  </Container>
);

export default THCPage;
