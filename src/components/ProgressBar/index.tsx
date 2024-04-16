import { createSignal } from 'solid-js';
import styles from '@/components/ProgressBar/ProgressBar.module.scss';

export const ProgressBar = (props: { yourProgress: number; friendProgress: number }) => {
  const [yourProgress, setYourProgress] = createSignal<number>(0);
  const [friendProgress, setFriendProgress] = createSignal<number>(0);

  setYourProgress(props.yourProgress);
  setFriendProgress(props.friendProgress);

  return (
    <div class={styles.Bar}>
      <div style={{ width: `${yourProgress()}%`, background: 'blue' }}>{yourProgress()}%</div>
      <div style={{ width: `${friendProgress()}%`, background: 'orange' }}>{friendProgress()}%</div>
    </div>
  );
};
