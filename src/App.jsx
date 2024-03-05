import React, { useState } from 'react';
import WorkHolder from './components/WorkCard';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import display from './display.json'; 
import ProjectsHolder from './components/Projects'
import CompletedProjects from './project.json';


function App() {

  const [showCase] = useState(display);
  const [project] = useState(CompletedProjects);

  return (
    <Wrapper>
      <nav>Contact info: Fakemail@gmail.com | noPhoneNumber</nav>
      <Title>Dennis' Coding Portfolio</Title>

      {showCase.map((showCase) => (
        <WorkHolder
        name={showCase.name}
        image={showCase.image}
        info={showCase.info}
        link={showCase.link}
        />
      ))} 
      
      
      {project.map((project) => (
        <ProjectsHolder
        name={project.name}
        info={project.info}
        link={project.link}
        />
      ))}
    </Wrapper>
  );
}

export default App;
