import React from 'react';

import styled from 'styled-components';
import { Icon } from '../icons';

const ChangeHistoryPath = () => [
  <path d="M12 7.77L18.39 18H5.61L12 7.77M12 4L2 20h20L12 4z" key='path0' />,
];

const ChangeHistoryIcon = styled(Icon).attrs({
  children: ChangeHistoryPath,
})``;

export default ChangeHistoryPath;
export { ChangeHistoryIcon };
