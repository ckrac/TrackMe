import React, { Fragment, FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';

const ActivitiesPage: FC<RouteComponentProps> = ({ match }) => {
  return (
    <Fragment>
      <div>Activities Page</div>
    </Fragment>
  );
};

export default ActivitiesPage;
