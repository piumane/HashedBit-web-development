import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/FreSauce/json-ipl/data")
      .then((res) => res.json())
      .then((data) => {
        // Sort in ascending order based on NRR
        const sortedData = [...data].sort((a, b) => a.NRR - b.NRR);
        setTeams(sortedData);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
  <div className="container">
    <h2 className="heading">IPL 2022 Points Table</h2>

    {teams.length > 0 && (
      <table className="table">
        <thead>
          <tr>
            {Object.keys(teams[0]).map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {teams.map((team, index) => (
            <tr key={index}>
              {Object.values(team).map((value, i) => (
                <td key={i}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </div>
);
}
export default App;