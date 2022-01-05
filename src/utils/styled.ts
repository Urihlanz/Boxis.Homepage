import { ComponentType } from 'react';
import styled from 'styled-components';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const overrideStyled = (component: ComponentType<any>) => {
  return (styles: TemplateStringsArray) => {
    return styled(component)`
      &&& {
        ${styles}
      }
    `;
  };
};
