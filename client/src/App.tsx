import React from 'react';
import Layout from './components/Layout/Layout';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import TimerPage from './pages/TimerPage/TimerPage';
import ReportsPage from './pages/ReportsPage/ReportsPage';
import ActivitiesPage from './pages/ActivitiesPage/ActivitiesPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={TimerPage} />
          <Route path="/app/timer" component={TimerPage} />
          <Route path="/app/reports" component={ReportsPage} />
          <Route path="/app/activities" component={ActivitiesPage} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
