import React from 'react';

const withStyle = (WrappedComponent) => {
  return (props) => (
    <div style={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
      <WrappedComponent {...props} />
    </div>
  );
};

export default withStyle;
