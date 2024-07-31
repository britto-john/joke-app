import React, { useState } from 'react';

function Joke({ setup, punchline, type, id }) {
  const [showPunchline, setShowPunchline] = useState(false);

  return (
    <div className="joke">
        <h3>Setup:{setup}</h3>
        <h3>Punchline:{punchline}</h3>

        <div className="metadata">
        <p>Joke ID:{id}</p>
        <p>Joke Type:{type}</p>
        </div>
    </div>
  );
}

export default Joke;