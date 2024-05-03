import frankenstein from '@/assets/frankenstein.jpg';
import prideandprejudice from '@/assets/prideandprejudice.jpg';
import { ProgressBar } from '@/components/ProgressBar';
import styles from '@/pages/About/About.module.scss';

export const About = () => (
  <div class={styles.About}>
    <h1>Your Shelf</h1>

    <div style={{ width: '20rem', height: '30rem', float: 'left' }}>
      <a href="/">
        <img src={prideandprejudice} width="100%" height="100%" />
      </a>
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
