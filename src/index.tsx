import { Route, Router } from '@solidjs/router';
import { render } from 'solid-js/web';
import { App } from '@/App';
import { About } from '@/pages/About';
import { Annotation } from '@/pages/Annotation';
import { Discussion } from '@/pages/Discussion';
import { Home } from '@/pages/Home';
import { NotFound } from '@/pages/NotFound';

/* Extend Solid JSX */
declare module 'solid-js' {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    type Props<T> = { [K in keyof T as `prop:${string & K}`]?: T[K] };
    type ElementProps<T> = { [K in keyof T]: Props<T[K]> & HTMLAttributes<T[K]> };
    interface IntrinsicElements extends ElementProps<HTMLElementTagNameMap> {
      button: ButtonHTMLAttributes<HTMLButtonElement> | Props<HTMLButtonElement>;
      label: LabelHTMLAttributes<HTMLLabelElement> | Props<HTMLLabelElement>;
      img: ImgHTMLAttributes<HTMLImageElement> | Props<HTMLImageElement>;
      input: InputHTMLAttributes<HTMLInputElement> | Props<HTMLInputElement>;
      textarea: TextareaHTMLAttributes<HTMLTextAreaElement> | Props<HTMLTextAreaElement>;
    }
  }
}

/* Enable Mock Server */
if (import.meta.env.DEV && new URLSearchParams(location.search).has('mock'))
  (await import('@/services/mock/mockServer')).createMockServer();

/* Render App & Routes */
render(
  () => (
    <Router root={App}>
      <Route path="/" component={Home} />
      <Route path="/shelf" component={About} />
      <Route path="/discussion" component={Discussion} />
      <Route path="/annotation" component={Annotation} />
      <Route path="*" component={NotFound} />
    </Router>
  ),
  document.body
);
