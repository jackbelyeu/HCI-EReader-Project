import { createSignal, For } from 'solid-js';
import { BubbleMessage } from '@/components/BubbleMessage';
import styles from '@/pages/Discussion/Discussion.module.scss';

export const Discussion = () => {
  const [messages, setMessages] = createSignal<Array<{ text: string; yours?: boolean; name?: string }>>([
    {
      text: 'THIS BOOK IS MY JAM. JANE AUSTEN IS MY JAM. I LOVE EVERYTHING ABOUT HER AND THIS BOOK. READ THIS BOOK. THAT IS ALL.',
      name: 'Zoe',
    },
    {
      text: 'Can you believe Elizabeth and Darcy invented the "enemies to lovers" trope and have been the most iconic power couple ever since?',
    },
  ]);
  const [inputText, setInputText] = createSignal('');

  const handleSubmit = () => {
    const trimmedText = inputText().trim();
    if (trimmedText) {
      setMessages([...messages(), { text: trimmedText, yours: true }]);
      setInputText('');
    }
  };

  return (
    <div class={styles.Discussion}>
      <h1>Pride and Prejudice Discussion</h1>
      <div class={styles.messagesContainer}>
        <For each={messages()}>
          {(message, index) => <BubbleMessage message={message.text} yours={message.yours} name={message.name} />}
        </For>
      </div>
      <input
        class={styles.input}
        value={inputText()}
        onInput={e => setInputText(e.currentTarget.value)}
        placeholder="Type your message here..."
      />
      <button class={styles.submitButton} onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};
