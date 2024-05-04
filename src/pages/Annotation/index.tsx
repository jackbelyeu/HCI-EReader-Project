import { createSignal, For } from 'solid-js';
import styles from '@/pages/Annotation/Annotation.module.scss';

const booksWithAnnotations = [
  {
    title: '1984',
    passage: 'War is peace. Freedom is slavery. Ignorance is a strength.',
    annotation:
      'This paradoxical slogan of the Party encapsulates the use of doublethink, where the citizenry is expected to accept contradictory statements simultaneously. This helps the Party eliminate independent thinking and enforce loyalty.',
  },
  {
    title: 'Pride And Prejudice',
    passage:
      'You never really understand a person until you consider things from his point of view... Until you climb into his skin and walk around in it.',
    annotation:
      "Atticus Finch teaches his daughter Scout the importance of empathy, a central theme of the novel. This perspective is crucial for understanding the racial injustices depicted in the story, as it advocates for seeing the world through others' experiences.",
  },
];

export const Annotation = () => {
  const [showFriendAnnotation, setShowFriendAnnotation] = createSignal(false);

  const revealFriendAnnotation = () => {
    setShowFriendAnnotation(true);
  };

  return (
    <div class={styles.Annotation}>
      <h1>Literary Annotations</h1>
      <div>
        <For each={booksWithAnnotations}>
          {book => (
            <div>
              <h2>{book.title}</h2>
              <blockquote>{book.passage}</blockquote>
              <p>
                <em>{book.annotation}</em>
              </p>
            </div>
          )}
        </For>
      </div>
      <button onClick={revealFriendAnnotation}>Watch your friend's annotation</button>
      {showFriendAnnotation() && (
        <div class={styles.FriendAnnotation}>
          <h2>The Great Gatsby</h2>
          <blockquote>
            <b>So we beat on, boats against the current, borne back ceaselessly into the past :</b>
            <br />
            The novel’s final line metaphorically describes Gatsby’s futile attempt to recreate his past with Daisy. It
            serves as a broader commentary on the American Dream and the struggle of Gatsby’s generation to achieve its
            idealized goals amidst the realities of American society.
          </blockquote>
        </div>
      )}
    </div>
  );
};
