import { createSignal } from 'solid-js';
import { useCounter, useMouse } from 'solidjs-use';
import logo from '@/assets/logo.svg?url';
import styles from '@/pages/Home/Home.module.scss';
import { fetchUser, fetchDefinition, type UserFetchResponse } from '@/services/userService';

export const Home = () => {
  const { x, y } = useMouse();
  const { count, inc, dec } = useCounter();
  const [userData, setUserData] = createSignal<UserFetchResponse | undefined>();

  fetchUser().then(setUserData);

  return (
    <div class={styles.Home}>
      <img prop:src={logo} alt="logo" />
      <h1>Solid + Vite + TypeScript</h1>
      <button onClick={() => fetchDefinition('fish').then(console.log)}>fetchDefinition Tester Button</button>
      <h3>Hello, {userData()?.name ?? 'guest'}!</h3>
      <p>
        Mouse: {x()} x {y()}
      </p>
      <h3>
        Counter: {count()}
        <button onClick={() => dec()}>-</button>
        <button onClick={() => inc()}>+</button>
      </h3>
      <div style={{ height: '10rem', overflow: 'scroll' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum iure nisi, ea quidem quisquam accusantium
        voluptatum aliquid odit fugiat atque magnam suscipit ratione debitis voluptatibus sed sit ex molestiae eos!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum iure nisi, ea quidem quisquam accusantium
        voluptatum aliquid odit fugiat atque magnam suscipit ratione debitis voluptatibus sed sit ex molestiae eos!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum iure nisi, ea quidem quisquam accusantium
        voluptatum aliquid odit fugiat atque magnam suscipit ratione debitis voluptatibus sed sit ex molestiae eos!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum iure nisi, ea quidem quisquam accusantium
        voluptatum aliquid odit fugiat atque magnam suscipit ratione debitis voluptatibus sed sit ex molestiae eos!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum iure nisi, ea quidem quisquam accusantium
        voluptatum aliquid odit fugiat atque magnam suscipit ratione debitis voluptatibus sed sit ex molestiae eos!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum iure nisi, ea quidem quisquam accusantium
        voluptatum aliquid odit fugiat atque magnam suscipit ratione debitis voluptatibus sed sit ex molestiae eos!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum iure nisi, ea quidem quisquam accusantium
        voluptatum aliquid odit fugiat atque magnam suscipit ratione debitis voluptatibus sed sit ex molestiae eos!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum iure nisi, ea quidem quisquam accusantium
        voluptatum aliquid odit fugiat atque magnam suscipit ratione debitis voluptatibus sed sit ex molestiae eos!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum iure nisi, ea quidem quisquam accusantium
        voluptatum aliquid odit fugiat atque magnam suscipit ratione debitis voluptatibus sed sit ex molestiae eos!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum iure nisi, ea quidem quisquam accusantium
        voluptatum aliquid odit fugiat atque magnam suscipit ratione debitis voluptatibus sed sit ex molestiae eos!
      </div>
    </div>
  );
};
