import React from 'react';
import "./App.css";
//import fs from 'fs';

function App() {
  /*var request = require('request');
  request.get('https:/someurl.com/Content/myfiles/message.txt', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        fs.writeFile('message.txt', body, 'utf8', (err) => {
            console.log(err)
        })
    }
  });*/
  let [filename, setName] = React.useState("");
  let fileLoaded = (e) => setName(e.target.value);
  return (
    <div className="App">
      <h3>Укажите картинку в формате JPEG, PNG, GIF</h3>
      <input
        type="file"
        accept="image/jpeg, image/png, image/gif"
        onChange={fileLoaded}
      />
      <br />
      <p>Имя файла: { filename }</p>
    </div>
  );
}

export default App;
