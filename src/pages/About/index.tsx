import { Card } from '@/components/Card';
import { ProgressBar } from '@/components/ProgressBar';
import styles from '@/pages/About/About.module.scss';

export const About = () => (
  <div class={styles.About}>
    <h1>About</h1>
    <p>Cards List</p>
    <div class={styles['cards-list']}>
      <Card color="black">Card #1</Card>
      <Card color="darkgray">Card #2</Card>
      <Card color="brown">Card #3</Card>
      <Card color="red">Card #4</Card>
      <Card color="crimson">Card #5</Card>
      <ProgressBar yourProgress={50} friendProgress={25} />
    </div>
  </div>
);
