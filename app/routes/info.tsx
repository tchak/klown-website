export const handle = {
  body: () => {
    return {
      'data-cc': 'k',
      'data-bg': 'w',
      id: 'info',
    };
  },
};

export default function Info() {
  return (
    <main>
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
