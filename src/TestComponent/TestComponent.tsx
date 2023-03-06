import React from 'react';
import styled from 'styled-components';

import { TestComponentProps } from './TestComponent.types';

const StyledTestComponent = styled.div`
  background: orange;
`;

const TestComponent: React.FC<TestComponentProps> = ({ heading, content }) => (
  <StyledTestComponent data-testid="test-component" className="test-component">
    <h1 data-testid="test-component__heading" className="heading">
      {heading}
    </h1>
    <div data-testid="test-component__content">{content}</div>
  </StyledTestComponent>
);

export default TestComponent;
