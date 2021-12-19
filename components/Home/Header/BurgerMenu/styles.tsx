import styled from 'styled-components';

export const Wrapper = styled.div<{ isShow: boolean }>`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 65px;
  right: -216px;
  width: 216px;
  height: calc(100vh - 65px);
  padding: 22px;
  background-color: #161616;
  color: #fff;
  overflow: hidden;
  transition: right 0.3s;
  z-index: 10;
  
  ${(props) =>
    props.isShow &&
    `
    right: 0;
  `}
  }
`;
