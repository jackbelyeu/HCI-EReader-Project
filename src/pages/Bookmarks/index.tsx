import { For } from 'solid-js';
import styles from '@/pages/Bookmarks/Bookmarks.module.scss';

export const Bookmarks = () => {
  // Define an array of books with their bookmarks including page numbers
  const booksWithBookmarks = [
    {
      title: 'Pride And Prejudice',
      bookmarks: [
        { page: 10, title: 'Chapter 1', url: 'https://example.com/pride-and-prejudice/chapter1' },
        { page: 25, title: 'Chapter 4', url: 'https://example.com/pride-and-prejudice/chapter2' },
        // Add more bookmarks for "Pride And Prejudice" as needed
      ],
    },
    {
      title: '1984',
      bookmarks: [
        { page: 50, title: 'Chapter 2', url: 'https://example.com/1984/chapter1' },
        { page: 75, title: 'Chapter 3', url: 'https://example.com/1984/chapter2' },
        // Add more bookmarks for "1984" as needed
      ],
    },
    {
      title: 'The Great Gatsby',
      bookmarks: [
        { page: 30, title: 'Chapter 4', url: 'https://example.com/great-gatsby/chapter1' },
        { page: 55, title: 'Chapter 6', url: 'https://example.com/great-gatsby/chapter2' },
        // Add more bookmarks for "The Great Gatsby" as needed
      ],
    },
  ];

  return (
    <div class={styles.Bookmarks}>
      <h1>Bookmarked Pages</h1>
      <div class={styles.BookContainer}>
        <For each={booksWithBookmarks}>
          {book => (
            <div class={styles.Book}>
              <h2>{book.title}</h2>
              <ul>
                <For each={book.bookmarks}>
                  {bookmark => (
                    <li>
                      <a href={bookmark.url} target="_blank" rel="noopener noreferrer">
                        {bookmark.title}
                      </a>
                      <span> - Page {bookmark.page}</span>
                    </li>
                  )}
                </For>
              </ul>
            </div>
          )}
        </For>
      </div>
    </div>
  );
};
