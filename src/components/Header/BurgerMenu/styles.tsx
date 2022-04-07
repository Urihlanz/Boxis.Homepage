import styled from 'styled-components';

import { overrideStyled } from '../../../utils/styled';
import LanguageSelect from '../LanguageSelect';

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
`;

export const LanguageSelectMenu = overrideStyled(LanguageSelect)`
  .ui-select__btn {
    background: none;
    width: unset;
    padding: 0;
  }

  .ui-select__arrow {
    right: 1px;
  }

  .ui-select__arrow path {
    color: #fff;
  }

  .ui-select__value {
    display: none;
  }

  .ui-select__list {
    width: 185px;
  }
`;
