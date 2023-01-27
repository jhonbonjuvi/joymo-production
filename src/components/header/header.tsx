import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { QwikLogo } from '../icons/qwik';
import { JoymoLogo } from '../icons/joymoicon';
import styles from './header.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header>
      <div class="bg-green-500 border-b border-black w-full">
        <div class="logo bg-yellow-500">
          <a href="https://qwik.builder.io/" target="_blank" title="qwik">
            {/* <QwikLogo /> */}
            <JoymoLogo/>
          </a>
        </div>
        <ul>
          <li>
            <a href="https://qwik.builder.io/docs/components/overview/" target="_blank">
              Docs
            </a>
          </li>
          <li>
            <a href="https://qwik.builder.io/examples/introduction/hello-world/" target="_blank">
              Examples
            </a>
          </li>
          <li>
            <a href="https://qwik.builder.io/tutorial/welcome/overview/" target="_blank">
              Tutorials
            </a>
          </li>
        </ul>
        </div>
    </header>
  );
});
