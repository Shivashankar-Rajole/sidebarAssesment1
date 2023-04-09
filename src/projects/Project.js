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
    name: "Project 1"
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
  const { id } = useParams();

  console.log(id);
  return (
    <div>
      <h1>Project Id:{ id } </h1>

    </div>
  );
};

const Home = () => {
  const [id, setId] = useState();
  const history = useHistory();

  const handleProceed = (e) => {
    id && history.push(generatePath("/project/:id/settings", { id }));
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
              setId(project.id);
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

export const Project = () => {
  return (
    <div className="project">
     
      <Router>
        <Switch>
          <Route path="/project/:id/settings">
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
