import React, { useEffect } from "react";

const withRenderLogging = (WrappedComponent) => {
  return function WithRenderLogging(props) {
    useEffect(() => {
      console.log(`Component ${WrappedComponent.name} rendered at: ${new Date()}`);
    }, []);

    return <WrappedComponent {...props} />;
  };
};


const MyComponent = () => {
  return <div>Hello, World</div>;
};


const MyComponentWithRenderLogging = withRenderLogging(MyComponent);

export default MyComponentWithRenderLogging;
