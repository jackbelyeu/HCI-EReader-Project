import { For } from 'solid-js';
import styles from '@/pages/Bookmarks/Bookmarks.module.scss';

export const Bookmarks = () => {
  return (
    <div class={styles.Bookmarks}>
      <h1>Bookmarked Pages</h1>
      <h2 />

      <div class={styles.BookContainer}>
        <div class={styles.Book}>
          <h2>Pride And Prejudice</h2>
          {/* Add bookmarks for Book 1 here */}
        </div>
        <div class={styles.Book}>
          <h2>1984</h2>
          {/* Add bookmarks for Book 2 here */}
        </div>
        <div class={styles.Book}>
          <h2>The Great Gatsby</h2>
          {/* Add bookmarks for Book 3 here */}
        </div>
      </div>
    </div>
  );
};
