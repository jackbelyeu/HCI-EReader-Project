import ePub from 'epubjs';
import prideAndPrejudice from '@/assets/prideandprejudice.epub?url';
import styles from '@/components/BookViewer/BookViewer.module.scss';

export const BookViewer = () => {
  const book = ePub(prideAndPrejudice);
  const rendition = book.renderTo('viewer', { flow: 'paginated', width: '900', height: '600' });
  // const rendition = book.renderTo('viewer', { flow: 'paginated', width: '900', height: '600' }); flow: 'scrolled-doc' for scroll mode
  rendition.display();

  return (
    <>
      <div class={styles.BookViewer}>
        <div id="viewer" />
        <button onClick={() => rendition.prev()}>{'<'}</button>
        <button onClick={() => rendition.next()}>{'>'}</button>
      </div>
    </>
  );
};
