import { createSignal } from 'solid-js';
import frankenstein from '@/assets/frankenstein.jpg';
import pride2 from '@/assets/pride2.jpg';
import prideandprejudice from '@/assets/prideandprejudice.jpg';
import { ProgressBar } from '@/components/ProgressBar';
import styles from '@/pages/About/About.module.scss';

export const About = () => {
  const [pic, setPic] = createSignal<boolean>(false);

  const togglePic = () => {
    setPic(!pic());
  };

  return (
    <div class={styles.About}>
      <h1>Your Shelf</h1>

      <div style={{ width: '20rem', height: '30rem', float: 'left' }}>
        <a href="/">
          <img src={pic() ? prideandprejudice : pride2} width="100%" height="100%" />
        </a>
        <button onClick={() => togglePic()} />
        <ProgressBar yourProgress={50} friendProgress={25} />
        <a href="/discussion">
          <button>Discuss this book</button>
        </a>
      </div>
      <div style={{ width: '20rem', height: '30rem', float: 'right' }}>
        <img src={frankenstein} width="100%" height="100%" />
        <ProgressBar yourProgress={12} friendProgress={37} />
        <button>Discuss this book</button>
      </div>
    </div>
  );
};
