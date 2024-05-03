import styles from '@/components/ProgressBar/ProgressBar.module.scss';

export const ProgressBar = (props: { yourProgress: number; friendProgress: number }) => {
  return (
    <div class={styles.Bar}>
      <div class={styles.mainBar} style={{ width: `${props.yourProgress}%` }}>
        Current Progress: {props.yourProgress}%
      </div>
      <div class={styles.friendBar} style={{ width: `${props.friendProgress}%` }}>
        Jane's Progress: {props.friendProgress}%
      </div>
    </div>
  );
};
