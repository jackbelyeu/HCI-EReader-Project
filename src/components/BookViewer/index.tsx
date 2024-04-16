import ePub from 'epubjs';
import prideAndPrejudice from '@/assets/prideandprejudice.epub?url';

export const BookViewer = () => {
  const book = ePub(prideAndPrejudice);
  const rendition = book.renderTo('viewer', { flow: 'paginated', width: '900', height: '600' });
  rendition.display();

  return (
    <>
      <div id="viewer" />
      <button onClick={() => rendition.prev()}>{'<'}</button>
      <button onClick={() => rendition.next()}>{'>'}</button>
    </>
  );
};
