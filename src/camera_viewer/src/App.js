import {useEffect, useState} from "react";
import './App.css'

function App() {
   const [isLoaded, setIsLoaded] = useState(false);
    const [isPageLoaded, setIsPageLoaded] = useState(false); //this helps

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    useEffect(() => {
        if (isLoaded) {
            setIsPageLoaded(true);
            window.ip = window.prompt("Введите IP робота", "192.168.145.2");
        }
    }, [isLoaded]);
  return (
    <div className="App">
      <iframe src={`http://${window.ip}:9999/video0.jpg`}/>
      <iframe src={`http://${window.ip}:9999/video1.jpg`}/>
      <iframe src={`http://${window.ip}:9999/video2.jpg`}/>
    </div>
  );
}

export default App;
