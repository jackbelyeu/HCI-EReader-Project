import { Show, createSignal } from 'solid-js';
import { useMouse } from 'solidjs-use';
import { BookViewer } from '@/components/BookViewer';
import styles from '@/pages/Home/Home.module.scss';
import { fetchDefinition } from '@/services/userService';

export const Home = () => {
  const { x, y } = useMouse();
  const [showMenu, setShowMenu] = createSignal<boolean>(false);
  const [menuPosition, setMenuPosition] = createSignal<{ x: number; y: number }>({ x: 0, y: 0 });
  const [showDefinition, setShowDefinition] = createSignal<boolean>(false);
  const [definition, setDefinition] = createSignal<string>('');

  document.addEventListener('selectionchange', () => {
    const selection = document.getSelection()?.toString();
    setShowMenu(!!selection);
    setShowDefinition(!selection);
    if (selection) {
      setMenuPosition({ x: x(), y: y() });
    }
  });

  return (
    <div class={styles.Home}>
      <Show when={showMenu()}>
        <div
          style={{
            position: 'absolute',
            top: `${menuPosition().y}px`,
            left: `${menuPosition().x}px`,
            background: 'white',
            border: '1px solid black',
          }}
        >
          <button
            style={{ display: 'flex' }}
            onClick={() => {
              const selection = document.getSelection()?.toString();
              if (selection) {
                fetchDefinition(selection).then(setDefinition);
                setShowDefinition(true);
              } else {
                console.log('Selection is undefined');
              }
            }}
          >
            Define
          </button>
          <button style={{ display: 'flex' }}>Annotate</button>
          <Show when={showDefinition()}>
            <p>{definition()}</p>
          </Show>
        </div>
      </Show>
      <BookViewer />
      <p>Fish, Hello, Candy</p>
    </div>
  );
};
