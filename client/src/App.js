
// App.js
// App.js

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DoctorPage from "./components/DoctorPage";
import PackagePage from "./components/PackagePage";

import Layout from "./components/Layout"; // Import the Layout component




function App() {
  return (
    <Router>
   
       
      <Layout> {/* Use the Layout component */}
        <Switch>
        <Route path="/package">
            <PackagePage/>
          </Route>
        
          <Route path="/add">
            <DoctorPage />
          </Route>
    
        </Switch>
      </Layout>
  
    </Router>
  );
}

export default App;
