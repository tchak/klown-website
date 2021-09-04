import { usePageColor } from '~/hooks';

export const handle = { bodyId: 'info' };

export default function Info() {
  usePageColor('kw');

  return (
    <main>
      <h1 className="sr-only">Information</h1>

      <figure>
        <img src="static/svg/example.svg" />
        <figcaption className="sr-only"></figcaption>
      </figure>

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
        <li>email@email.com</li>
        <li>Gallerie XX Adresse </li>
      </ul>
    </main>
  );
}
