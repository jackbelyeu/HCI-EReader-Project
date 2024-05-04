import ePub from 'epubjs';
import { createEffect, createSignal } from 'solid-js';
import prideAndPrejudice from '@/assets/prideandprejudice.epub?url';
import styles from '@/components/BookViewer/BookViewer.module.scss';

export const BookViewer = () => {
  const [flow, setFlow] = createSignal<boolean>(false);

  const book = ePub(prideAndPrejudice);
  let rendition = book.renderTo('viewer', {
    flow: flow() ? 'paginated' : 'scrolled-doc',
    width: '900',
    height: '600',
  });
  rendition.display();

  createEffect(() => {
    rendition.destroy();
    rendition = book.renderTo('viewer', {
      flow: flow() ? 'paginated' : 'scrolled-doc',
      width: '900',
      height: '600',
    });
    rendition.display();
    console.log('toggle switched');
  });

  return (
    <>
      <div class={styles.BookViewer}>
        <button onClick={() => rendition.prev()}>{'<'}</button>
        <div id="viewer" />
        <button onClick={() => rendition.next()}>{'>'}</button>
        <button onClick={() => setFlow(p => !p)}>Toggle Flow</button>
      </div>
    </>
  );
};
