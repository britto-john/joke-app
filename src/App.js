import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Joke from './Joke';

import "./App.css";

function App() {
  const apiURL = "https://official-joke-api.appspot.com/random_ten";
  const [jokes, setJokes] = useState([]);
  
  // Fetch data from API on load
  useEffect(() => {
    const fetchJokes = async () => {
      try {
        const response = await axios.get(apiURL);
        console.log(response.data)
        setJokes(response.data); 
      } catch (error) {
        console.error('Error fetching jokes:', error);
      }
    };

    fetchJokes();
  }, []);

  return (
    <div className="App">
      <h1>Random Joke Generator</h1>
      <h2>Hover over each joke to view the punchline. 😆</h2>

      <div className="jokes-container">
        {/* Display data from API */}
        {jokes.map((joke, index) => (
          <Joke key={joke.id} setup={joke.setup} punchline={joke.punchline} type={joke.type} id={joke.id} />
        ))}

        {/* Use JSX below for each joke */}
      </div>
    </div>
  );
}

export default App;
