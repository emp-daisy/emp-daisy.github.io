import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from '../routes/infoRoutes';

import "../styles/InfoPanel.css"
class InfoPanel extends Component {
  render() {
    return (
        <div className="info-panel">
          <Switch>
            {
              routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                />
              ))
            }
          </Switch>
        </div>
    );
  }
}

export default InfoPanel;