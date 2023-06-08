import React from 'react';
import FEaaSComponent from './FEaaSComponent';

export const Default = (): JSX.Element => {
  const styles = `component feaas `.trimEnd();

  return (
    <div className={styles}>
      <div className="component-content">
        <FEaaSComponent params={undefined} fields={undefined} />
      </div>
    </div>
  );
};
