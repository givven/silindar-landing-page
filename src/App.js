import './App.css';

import MainPage from './pages/MainPage';
// import LandingPage from './pages/LandingPage';

// import CheckBox from './components/CheckBox';
import BootstrapFrame from './pages/BootstrapFrame';
import DemoApp from './components/DemoApp';
// import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from './components/Dropdown'
import React from 'react';

function App() {
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    console.log(value);

    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    console.log(event);
    console.log(value);
  };

  return (
    <MainPage></MainPage>
    // <LandingPage></LandingPage>
    // <Calendar></Calendar>
    // <CheckBox name={"기획자"} id={"plan"}></CheckBox>
    // <BootstrapFrame></BootstrapFrame>
    // <DemoApp></DemoApp>

    // <Dropdown 
    //   title_name={"관심 분야"} 
    //   data_list={[{name:'기획',value:'plan'}, {name:'디자인',value:'design'},{name:'개발',value:'dev'},{name:'마케팅',value:'market'}, {name:'예비창업가',value:'prestartup'}]} 
    //   class_name={"test_man_dropdown"}
    //   personName={personName}
    //   handleChange={handleChange}
    // ></Dropdown>
  );
}

export default App;