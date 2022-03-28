import React from 'react';
import { Card, CardGroup, Button } from 'react-bootstrap';
import gH from '../gH.png';
import WDS from '../WDS.png';
import CQ from '../CQ.png';
import TE from '../TE.png';
import WD from '../WD.png';
import OP from '../OP.png';

const Portfolio = () => {
  return (
    <>
      <div className="porty">
        <div className="title">
          <h1>My apps</h1>
        </div>

        <CardGroup className="crdgrp">
          <Card className="portcards">
            <Card.Img variant="top" src={gH} />
            <Card.Body className="crdbody">
              <Card.Title>gitHomies</Card.Title>
              <Card.Text>
                A way for developers to collaberate and stay in touch.
              </Card.Text>
              <Button variant="primary">App</Button>
              <Button variant="primary">GitHub Repo</Button>
            </Card.Body>
            <Card.Footer className ="crdfooter">
              <small className="text-muted">Be sure to check out the GitHub Repo</small>
            </Card.Footer>
          </Card>
          <Card className="portcards">
            <Card.Img variant="top" src={WDS} />
            <Card.Body className="crdbody">
              <Card.Title>Word Day Scheduler</Card.Title>
              <Card.Text>
                A simple way to play out your day.
              </Card.Text>
              <Button variant="primary">App</Button>
              <Button variant="primary">GitHub Repo</Button>
            </Card.Body>
            <Card.Footer className ="crdfooter">
              <small className="text-muted">Be sure to check out the GitHub Repo</small>
            </Card.Footer>
          </Card>
          <Card className="portcards">
            <Card.Img variant="top" src={CQ} />
            <Card.Body className="crdbody">
              <Card.Title>Code Quiz</Card.Title>
              <Card.Text>
                Test your knowledge of coding with a fun quiz.
              </Card.Text>
              <Button variant="primary">App</Button>
              <Button variant="primary">GitHub Repo</Button>
            </Card.Body>
            <Card.Footer className ="crdfooter">
              <small className="text-muted">Be sure to check out the GitHub Repo</small>
            </Card.Footer>
          </Card>
        </CardGroup>
        <CardGroup className="crdgrp">
          <Card className="portcards">
            <Card.Img variant="top" src={TE} />
            <Card.Body className="crdbody">
              <Card.Title>J.A.T.E</Card.Title>
              <Card.Text>
                Just Another Text Editor
              </Card.Text>
              <Button variant="primary">App</Button>
              <Button variant="primary">GitHub Repo</Button>
            </Card.Body>
            <Card.Footer className ="crdfooter">
              <small className="text-muted">Be sure to check out the GitHub Repo</small>
            </Card.Footer>
          </Card>
          <Card className="portcards">
            <Card.Img variant="top" src={WD} />
            <Card.Body className="crdbody">
              <Card.Title>Weather Dashboard</Card.Title>
              <Card.Text>
                Is it going to rain? Find out here.
              </Card.Text>
              <Button variant="primary">App</Button>
              <Button variant="primary">GitHub Repo</Button>
            </Card.Body>
            <Card.Footer className ="crdfooter">
              <small className="text-muted">Be sure to check out the GitHub Repo</small>
            </Card.Footer>
          </Card>
          <Card className="portcards">
            <Card.Img variant="top" src={OP} />
            <Card.Body className="crdbody">
              <Card.Title>Dev Portfolio</Card.Title>
              <Card.Text>
                Same as what youre on now..but the retro version
              </Card.Text>
              <Button variant="primary">App</Button>
              <Button variant="primary">GitHub Repo</Button>
            </Card.Body>
            <Card.Footer className ="crdfooter">
              <small className="text-muted">Be sure to check out the GitHub Repo</small>
            </Card.Footer>
          </Card>
        </CardGroup>
      </div>
    </>
  );
};

export default Portfolio;
