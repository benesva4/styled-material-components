import React from 'react';

import styled from 'styled-components';
import { Icon } from '../icons';

const EqualizerPath = () => [
  <path d="M10 20h4V4h-4v16zm-6 0h4v-8H4v8zM16 9v11h4V9h-4z" key='path0' />,
];

const EqualizerIcon = styled(Icon).attrs({
  children: EqualizerPath,
})``;

export default EqualizerPath;
export { EqualizerIcon };
