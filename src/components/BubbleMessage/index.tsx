import styles from '@/components/BubbleMessage/BubbleMessage.module.scss';

export const BubbleMessage = (props: { message: string; yours?: boolean; name?: string }) => {
  return <p class={`${styles.bubble} ${props.yours ? styles.yours : ''}`}>{props.message}</p>;
};
