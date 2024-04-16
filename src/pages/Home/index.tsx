import { Show, createSignal } from 'solid-js';
import { useCounter, useMouse } from 'solidjs-use';
import logo from '@/assets/logo.svg?url';
import pap from '@/assets/pap.txt?raw';
import styles from '@/pages/Home/Home.module.scss';
import { fetchUser, fetchDefinition, type UserFetchResponse } from '@/services/userService';

export const Home = () => {
  const { x, y } = useMouse();
  const { count, inc, dec } = useCounter();
  const [userData, setUserData] = createSignal<UserFetchResponse | undefined>();
  const [showMenu, setShowMenu] = createSignal<boolean>(false);
  const [menuPosition, setMenuPosition] = createSignal<{ x: number; y: number }>({ x: 0, y: 0 });
  const [showDefinition, setShowDefinition] = createSignal<boolean>(false);
  const [definition, setDefinition] = createSignal<string>('');

  fetchUser().then(setUserData);

  document.onselectionchange = () => {
    const selection = document.getSelection()?.toString();
    setShowMenu(!!selection);
    setShowDefinition(!selection);
    if (selection) {
      setMenuPosition({ x: x(), y: y() });
    }
  };

  return (
    <div class={styles.Home}>
      <img prop:src={logo} alt="logo" />
      <h1>Solid + Vite + TypeScript</h1>
      <h3>Hello, {userData()?.name ?? 'guest'}!</h3>
      <p>
        Mouse: {x()} x {y()}
      </p>
      <h3>
        Counter: {count()}
        <button onClick={() => dec()}>-</button>
        <button onClick={() => inc()}>+</button>
      </h3>
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
                console.log('Selecton is undefined');
              }
            }}
          >
            Define
          </button>
          <Show when={showDefinition()}>
            <p>{definition()}</p>
          </Show>
        </div>
      </Show>
      <div style={{ height: '10rem', overflow: 'scroll' }}>{pap}</div>
    </div>
  );
};
