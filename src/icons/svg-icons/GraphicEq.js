import React from 'react';

import styled from 'styled-components';
import { Icon } from '../icons';

const GraphicEqPath = () => [
  <path d="M7 18h2V6H7v12zm4 4h2V2h-2v20zm-8-8h2v-4H3v4zm12 4h2V6h-2v12zm4-8v4h2v-4h-2z" key='path0' />,
];

const GraphicEqIcon = styled(Icon).attrs({
  children: GraphicEqPath,
})``;

export default GraphicEqPath;
export { GraphicEqIcon };
