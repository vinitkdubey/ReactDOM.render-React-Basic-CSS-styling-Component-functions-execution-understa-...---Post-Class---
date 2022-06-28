import React from 'react';
import '../styles/App.css';

//! App is the name of component as per the test
const App = () => {
  return (
    <p>
      Now I can render any React component on any DOM node I want using
      ReactDOM.render
    </p>
  );
};
ReactDOM.render(     
  <App />,
  document.getElementById('root')        
);

//! Needed so that `index.js` can do `import App from './App.js'`
export default App;
