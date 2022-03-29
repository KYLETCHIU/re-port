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
        <div className="portytitle">
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
              <Button className="prtbtn" href="http://gh.githomies.com/">App</Button>
              <Button className="prtbtn" href="https://github.com/KYLETCHIU/gitHomies">GitHub Repo</Button>
            </Card.Body>
          </Card>
          <Card className="portcards">
            <Card.Img variant="top" src={WDS} />
            <Card.Body className="crdbody">
              <Card.Title>Word Day Scheduler</Card.Title>
              <Card.Text>
                A simple way to play out your day.
              </Card.Text>
              <Button className="prtbtn" href="https://kyletchiu.github.io/WorkDayPlannerOrganized/">App</Button>
              <Button className="prtbtn" href="https://github.com/KYLETCHIU/WorkDayPlannerOrganized">GitHub Repo</Button>
            </Card.Body>
          </Card>
          <Card className="portcards">
            <Card.Img variant="top" src={CQ} />
            <Card.Body className="crdbody">
              <Card.Title>Code Quiz</Card.Title>
              <Card.Text>
                Test your knowledge of coding with a fun quiz.
              </Card.Text>
              <Button className="prtbtn" href="https://kyletchiu.github.io/kylecodequiz/">App</Button>
              <Button className="prtbtn" href="https://github.com/KYLETCHIU/kylecodequiz">GitHub Repo</Button>
            </Card.Body>
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
              <Button className="prtbtn" href="https://kylestexteditor.herokuapp.com/">App</Button>
              <Button className="prtbtn" href="https://github.com/KYLETCHIU/TextEditor">GitHub Repo</Button>
            </Card.Body>
          </Card>
          <Card className="portcards">
            <Card.Img variant="top" src={WD} />
            <Card.Body className="crdbody">
              <Card.Title>Weather Dashboard</Card.Title>
              <Card.Text>
                Is it going to rain? Find out here.
              </Card.Text>
              <Button className="prtbtn" href="https://kyletchiu.github.io/WeatherDashboard/">App</Button>
              <Button className="prtbtn" href="https://github.com/KYLETCHIU/WeatherDashboard">GitHub Repo</Button>
            </Card.Body>
          </Card>
          <Card className="portcards">
            <Card.Img variant="top" src={OP} />
            <Card.Body className="crdbody">
              <Card.Title>Dev Portfolio</Card.Title>
              <Card.Text>
                Same as what you're on now..but the retro version
              </Card.Text>
              <Button className="prtbtn" href="https://kyletchiu.github.io/Updated-Developer-Protfolio/">App</Button>
              <Button className="prtbtn"href="https://github.com/KYLETCHIU/Updated-Developer-Protfolio">GitHub Repo</Button>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    </>
  );
};

export default Portfolio;
