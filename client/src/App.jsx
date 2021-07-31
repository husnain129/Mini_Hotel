import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { RestaurantsContextProvider } from "./context/RestaurantContext";
import Home from "./routes/Home";
import RestaurantDetailPage from "./routes/RestaurantDetailPage";
import UpdatePage from "./routes/UpdatePage";

function App() {
  return (
    <RestaurantsContextProvider>
      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/restaurant/:id/update" component={UpdatePage} />
            <Route
              path="/restaurants/:id/:name"
              component={RestaurantDetailPage}
            />
          </Switch>
        </Router>
      </div>
    </RestaurantsContextProvider>
  );
}

export default App;
