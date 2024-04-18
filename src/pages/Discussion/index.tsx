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
      text: 'can you believe elizabeth and darcy invented the "enemies to lovers" trope and have been the most iconic power couple to exist ever since ',
    },
  ]);
  const [inputText, setInputText] = createSignal('');

  const handleSubmit = () => {
    if (inputText()) {
      setMessages([...messages(), { text: inputText(), yours: true }]);
      setInputText('');
    }
  };

  return (
    <div class={styles.Discussion}>
      <h1>Pride and Prejudice Discussion</h1>
      <div style={{ height: '80%', 'overflow-y': 'scroll' }}>
        <For each={messages()}>
          {(message, index) => <BubbleMessage message={message.text} yours={message.yours} name={message.name} />}
        </For>
      </div>
      <input value={inputText()} onInput={e => setInputText(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
