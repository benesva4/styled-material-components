import React from 'react';

import styled from 'styled-components';
import { Icon } from '../icons';

const GetAppPath = () => [
  <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" key='path0' />,
];

const GetAppIcon = styled(Icon).attrs({
  children: GetAppPath,
})``;

export default GetAppPath;
export { GetAppIcon };
