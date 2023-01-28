import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import Upperbanner from '../../components/cover_banner';
// import { Link } from '@builder.io/qwik-city';


export default component$(() => {
  return (
    <div>
        <Upperbanner/>
        <h1>
            Under Development
        </h1>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'JoyMo',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
