// src/App.js
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [inputText, setInputText] = useState('');
  const [inputFile, setInputFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('inputText', inputText);
    formData.append('inputFile', inputFile);

    // Add your API endpoint
    const response = await axios.post('YOUR_API_ENDPOINT', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    console.log(response.data);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Text input:</label>
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
        </div>
        <div>
          <label>File input:</label>
          <input
            type="file"
            onChange={(e) => setInputFile(e.target.files[0])}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
