import React from 'react';
import { useState } from "react";
import {
  BrowserRouter as Router,
  generatePath,
  Switch,
  Route,
  useHistory,
  useParams
} from "react-router-dom";

const projects = [
  {
    id: "1",
    name: "Project 1",
  },
  {
    id: "2",
    name: "Project 2"
  },
  {
    id: "3",
    name: "Project 3"
  }
];

const Projects = () => {
  const { name } = useParams();

  
  return (
    <div>
      <h1>Project Name:{ name } </h1>
    </div>
  );
};

const Home = () => {
  const [name,setName] = useState();
  const history = useHistory();

  const handleProceed = (e) => {
    name && history.push(generatePath("/project/:name", { name}));
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div>
        {projects.map((project, i) => (
          <li
            key={i}
            onClick={(e) => {
              setName(project.name);
            }}
          >
            {project.name} 
          </li>
        ))}
      </div>
      <button onClick={handleProceed} style={{ width: "250px" }}>
        Proceed
      </button>
    </div>
  );
};

export const List = () => {
  return (
    <div className="project">
     
      <Router>
        <Switch>
          <Route path="/project/:name">
            <Projects />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
