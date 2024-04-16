import type { RouteSectionProps } from '@solidjs/router';
import { Navbar } from '@/components/Navbar';

import '@/globalStyles.scss';

export const App = (props: RouteSectionProps) => (
  <>
    <Navbar />
    {props.children}
  </>
);
