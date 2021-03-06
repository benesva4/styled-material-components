import React from 'react';

import styled from 'styled-components';
import { Icon } from '../icons';

const SwapVerticalCirclePath = () => [
  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM6.5 9L10 5.5 13.5 9H11v4H9V9H6.5zm11 6L14 18.5 10.5 15H13v-4h2v4h2.5z" key='path0' />,
];

const SwapVerticalCircleIcon = styled(Icon).attrs({
  children: SwapVerticalCirclePath,
})``;

export default SwapVerticalCirclePath;
export { SwapVerticalCircleIcon };
