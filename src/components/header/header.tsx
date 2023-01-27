import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { JoymoLogo } from '../icons/joymoicon';
import styles from './header.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header>
      <div class="bg-white-500 border-b border-black w-full">
        <div class="logo bg-yellow-500 pt-5">
          <a href="https://qwik.builder.io/" target="_blank" title="qwik">
            {/* <QwikLogo /> */}
            <JoymoLogo/>
          </a>
        </div>
        <ul>
          <li>
              <a href="github.com/jhonbonjuvi">
                  Director
              </a>
          </li>
          <li>
              <a href="">
                  Gallery
              </a>
          </li>
          <li>
              <a href="">
                  About Us
              </a>
          </li>
        </ul>
        </div>
    </header>
  );
});
