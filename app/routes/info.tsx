import { usePageColor, pageColor } from '~/hooks';

export const handle = { bodyId: 'info' };

export default function Info() {
  usePageColor('kw');

  return (
    <main {...pageColor('kw')}>
      <h1 className="sr-only">Information</h1>

      <div id="texte_presentation">
        <p>
          Je suis...
          <i>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet mauris
            pretium, vulputate neque placerat neque, nascetur
          </i>
          lectus gravida.
        </p>
      </div>

      <ul className="details">
        <li></li>
      </ul>
    </main>
  );
}
