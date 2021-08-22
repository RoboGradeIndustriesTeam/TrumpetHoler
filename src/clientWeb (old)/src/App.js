import React, {useState, useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormCheckInput from 'react-bootstrap/FormCheckInput';
import FormCheck from 'react-bootstrap/FormCheck';
import FormCheckLabel from 'react-bootstrap/FormCheckLabel';

const axios = require('axios').default;

function App() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isPageLoaded, setIsPageLoaded] = useState(false); //this helps
    window.soplo_status = false;

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    useEffect(async () => {
        if (isLoaded) {
            axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
            setIsPageLoaded(true);
            window.ip = prompt("Введите IP Адрес робота", "192.168.145.2");
            document.getElementById('camera').src = `http://${window.ip}:9978/video0.jpg`
            // let cmd = prompt("Введите команду запуска", "python3 main.py --port /dev/ttyACM0")
            // const conn = new Client();
            // conn.on('ready', () => {
            //     console.log('Client :: ready');
            //     conn.exec("killall python3")
            //     conn.exec("cd TrumpetHoler/src/server")
            //     conn.exec(cmd)
            // }).connect({
            //     host: window.ip,
            //     port: 22,
            //     username: 'pi',
            //     password: 'raspeberry'
            // });

        }
    }, [isLoaded]);
    return (
      <div className="body">
          <Row>
              <Col>
                  <Container>
                      <img id="camera" className="camera-video"/>
                      <div onChange={(e) => {
                          if (e.target.checked) {
                              sendCommand("[R1 1]")
                          }
                          else {
                              sendCommand("[R1 0]")
                          }
                      }} className="form-check form-check-inline form-switch">
                          <FormCheckInput type="checkbox" id="flash" />
                          <FormCheckLabel htmlFor="flash">Фонарь</FormCheckLabel>
                      </div>
                  </Container>
              </Col>
              <Col>
                  <Container>
                      <Row>
                          <Col>
                              <Button onMouseDown={async () => sendCommand("[M0 f]")} onMouseUp={async () => sendCommand("[P]")} className="btn-primary btn-lg btn-levels-up-main">▲</Button>
                              <div>
                                  <Row>
                                      <Col xs={4}>
                                          <Button onMouseDown={async () => sendCommand("[M1 f]")} onMouseUp={async () => sendCommand("[P]")} className="btn-primary btn-lg btn-levels-up">▲</Button>
                                      </Col>
                                      <Col xs={4}>
                                          <Button onMouseDown={async () => sendCommand("[M2 f]")} onMouseUp={async () => sendCommand("[P]")} className="btn-primary btn-lg btn-levels-up">▲</Button>
                                      </Col>
                                      <Col xs={4}>
                                          <Button onMouseDown={async () => sendCommand("[M3 f]")} onMouseUp={async () => sendCommand("[P]")} className="btn-primary btn-lg btn-levels-up">▲</Button>
                                      </Col>
                                  </Row>
                                  <Row>
                                      <Col xs={4}>
                                          <Button onMouseDown={async () => sendCommand("[M1 b]")} onMouseUp={async () => sendCommand("[P]")} className="btn-primary btn-lg btn-levels-down">▼</Button>
                                      </Col>
                                      <Col xs={4}>
                                          <Button onMouseDown={async () => sendCommand("[M2 b]")} onMouseUp={async () => sendCommand("[P]")} className="btn-primary btn-lg btn-levels-down">▼</Button>
                                      </Col>
                                      <Col xs={4}>
                                          <Button onMouseDown={async () => sendCommand("[M3 b]")} onMouseUp={async () => sendCommand("[P]")} className="btn-primary btn-lg btn-levels-down">▼</Button>
                                      </Col>
                                  </Row>
                                  <Button onMouseDown={async () => sendCommand("[M0 b]")} onMouseUp={async () => sendCommand("[P]")} className="btn-primary btn-lg btn-levels-down-main">▼</Button>
                              </div>
                              <Button onClick={async () => {
                                  window.soplo_status = !window.soplo_status;
                                  if (window.soplo_status){
                                      sendCommand("[L3 f]");
                                  }
                                  if (!window.soplo_status){
                                      sendCommand("[L3 b]");
                                  }
                              }} className="btn-primary btn-lg text-break info-btn">Выдвинуть сопло</Button>
                          </Col>
                          <Col>
                              <Row>
                                  <Col className="cls">
                                      <Button onMouseDown={async () => sendCommand("[L1 f]")} onMouseUp={async () => sendCommand("[P]")} className="btn-primary btn-lg btn-joystick-🡹-🡸">🡹</Button>
                                  </Col>
                                  <Col className="cls">
                                      <Button onMouseDown={async () => sendCommand("[L2 f]")} onMouseUp={async () => sendCommand("[P]")} className="btn-primary btn-lg btn-joystick-🡹-🡺">🡹</Button>
                                  </Col>
                              </Row>
                              <Row>
                                  <Col className="cls">
                                      <Button onMouseDown={async () => sendCommand("[S2 f]")} onMouseUp={async () => sendCommand("[P]")} className="btn-primary btn-lg btn-joystick-left">🡸</Button>
                                  </Col>
                                  <Col className="cls">
                                      <Button onMouseDown={async () => sendCommand("[S2 b]")} onMouseUp={async () => sendCommand("[P]")} className="btn-primary btn-lg btn-joystick-right">🡺</Button>
                                  </Col>
                              </Row>
                              <Row>
                                  <Col className="cls">
                                      <Button onMouseDown={async () => sendCommand("[L1 b]")} onMouseUp={async () => sendCommand("[P]")} className="btn-primary btn-lg btn-joystick-🢃-🡸">🢃</Button>
                                  </Col>
                                  <Col className="cls">
                                      <Button onMouseDown={async () => sendCommand("[L2 b]")} onMouseUp={async () => sendCommand("[P]")} className="btn-primary btn-lg btn-joystick-🢃-🡺">🢃</Button>
                                  </Col>
                              </Row>
                              <Button onMouseDown={async () => sendCommand("[S1 f]")} onMouseUp={async () => sendCommand("[P]")} className="btn-primary btn-lg text-break info-btn btn-foam">Включение пены</Button>
                              <Button onMouseDown={async () => sendCommand("[R2 1]")} onMouseUp={async () => sendCommand("[R2 0]")} className="btn-primary btn-lg text-break info-btn">Помпа</Button>
                          </Col>
                      </Row>
                      <div className="deb-list-div">
                          <ul className="list-group deb-list" id={"lognm"}>

                          </ul>
                      </div>
                      <InputGroup>
                          <input type="text" id="tosendnm" className="form-control deb-input"/>
                          <Button className="deb-btn" onClick={onSendClick}><FontAwesomeIcon icon={faPaperPlane} /></Button>
                      </InputGroup>
                  </Container>
              </Col>
          </Row>
      </div>
  );
}


async function onSendClick(e) {
    await sendCommand(document.getElementById("tosendnm").value);
}

async function sendCommand(cmd){
    let response = await axios.post("http://" + window.ip + ":9981/cmd", {
        cmd: cmd
    })

    let el = document.createElement('li');
    el.className = "list-group-item";
    let txt = document.createElement('p');
    txt.innerText = "[ОТВЕТ] " + response.data.resp;
    txt.className = "font-monospace text-info";
    el.appendChild(txt);

    document.getElementById('lognm').appendChild(el);
}
export default App;
