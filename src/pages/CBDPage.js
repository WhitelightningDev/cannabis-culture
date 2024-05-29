import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import CBDImage from '../images/cbd.png';

const CBDPage = () => (
  <Container className="mt-4">
    <Row className="mb-4">
      <Col md={12}>
        <Card>
          <Card.Img variant="top" src={CBDImage} alt="CBD" style={{ width: '100px', height: '100px', margin: 'auto' }} />
          <Card.Body>
            <Card.Title className="text-center">Molecular Structure and Full Name of CBD</Card.Title>
            <Card.Text>
              <strong>Full Name:</strong> Cannabidiol (CBD)
            </Card.Text>
            <Card.Text>
              <strong>Molecular Structure:</strong>
              <ul>
                <li><strong>Chemical Formula:</strong> C₂₁H₃₀O₂</li>
                <li><strong>Structure:</strong></li>
                <ul>
                  <li>CBD, like THC, is a terpene phenolic compound but with a different configuration. It has a similar 21-carbon structure but lacks the cyclohexene ring that THC has.</li>
                  <li>The structure includes a hydroxyl group (-OH) on the benzopyran ring and a pentyl side chain, with the primary difference from THC being in the arrangement and bonding of the atoms.</li>
                </ul>
              </ul>
            </Card.Text>
            <Card.Title className="text-center">How CBD Affects the Brain</Card.Title>
            <Card.Text>
              CBD interacts with the endocannabinoid system, but its effects and mechanisms of action differ significantly from THC. CBD has a low affinity for the cannabinoid receptors CB1 and CB2 but influences various other receptor systems in the brain.
            </Card.Text>
            <Card.Text>
              <strong>Key Points:</strong>
              <ul>
                <li><strong>Cannabinoid Receptors:</strong></li>
                <ul>
                  <li>CB1 and CB2 Receptors: CBD has a low binding affinity for these receptors but can modulate their activity indirectly.</li>
                </ul>
                <li><strong>Mechanism of Action:</strong></li>
                <ul>
                  <li>Serotonin Receptors: CBD acts as an agonist at the 5-HT1A receptor, which is implicated in anxiety and depression regulation.</li>
                  <li>TRPV1 Receptors: These receptors are involved in pain perception and inflammation. CBD acts on these receptors, contributing to its analgesic and anti-inflammatory properties.</li>
                  <li>GPR55 Receptors: CBD may antagonize GPR55 receptors, which are involved in regulating bone density and blood pressure.</li>
                </ul>
              </ul>
            </Card.Text>
            <Card.Title className="text-center">Effects on the Brain</Card.Title>
            <Card.Text>
              When CBD interacts with various receptors and systems in the brain, it leads to a range of therapeutic and neuroprotective effects:
            </Card.Text>
            <ul>
              <li><strong>Anxiolytic and Antidepressant Effects:</strong></li>
              <ul>
                <li>Serotonin System: By acting on the 5-HT1A receptor, CBD can reduce anxiety and improve mood, making it beneficial for anxiety disorders and depression.</li>
              </ul>
              <li><strong>Neuroprotection:</strong></li>
              <ul>
                <li>Oxidative Stress Reduction: CBD has antioxidant properties, which help protect neurons from damage caused by free radicals.</li>
                <li>Anti-inflammatory Effects: By modulating the immune response and reducing inflammation, CBD can protect the brain from neuroinflammatory conditions.</li>
              </ul>
              <li><strong>Pain Relief:</strong></li>
              <ul>
                <li>TRPV1 Receptors: Activation of these receptors by CBD can help reduce pain and inflammation, making it useful for chronic pain conditions.</li>
              </ul>
              <li><strong>Antiepileptic Effects:</strong></li>
              <ul>
                <li>Calcium Channels: CBD can influence calcium channels in neurons, which helps stabilize neural activity and reduce seizures. This effect is why CBD is used in treating epilepsy, particularly in forms like Dravet syndrome and Lennox-Gastaut syndrome.</li>
              </ul>
              <li><strong>Sleep Regulation:</strong></li>
              <ul>
                <li>Indirect Influence on Sleep: By reducing anxiety and pain, CBD can improve sleep quality and duration, though its direct effects on sleep regulation are still being studied.</li>
              </ul>
            </ul>
            <Card.Title className="text-center">Additional Considerations</Card.Title>
            <ul>
              <li><strong>Therapeutic Potential:</strong></li>
              <ul>
                <li>Wide Range of Uses: CBD is being researched for its potential in treating various conditions, including anxiety, depression, chronic pain, epilepsy, and even neurodegenerative diseases like Alzheimer's and Parkinson's disease.</li>
              </ul>
              <li><strong>Safety and Side Effects:</strong></li>
              <ul>
                <li>Non-Psychoactive: Unlike THC, CBD does not produce a "high" and is considered non-psychoactive, making it more appealing for therapeutic use.</li>
                <li>Minimal Side Effects: Common side effects are generally mild and can include fatigue, changes in appetite, and diarrhea. CBD is generally well-tolerated even at high doses.</li>
              </ul>
              <li><strong>Legal Status:</strong></li>
              <ul>
                <li>Varies by Region: The legal status of CBD varies worldwide. In many places, it is legal or decriminalized, especially when derived from hemp (a cannabis plant variety with low THC levels).</li>
              </ul>
            </ul>
            <Card.Text>
              Understanding CBD’s interaction with the brain highlights its potential therapeutic benefits and distinguishes it from THC, providing a basis for its use in various medical applications without the psychoactive effects associated with THC.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default CBDPage;
