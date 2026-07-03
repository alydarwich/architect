import './Showcase.css';

const projects = [
  {
    key: 'dosel',
    name: 'DOSEL',
    location: 'Heredia, Costa Rica | Residential',
    image: '/images/showcase-dosel.webp',
  },
  {
    key: 'linea',
    name: 'LINEA DE VIDA',
    location: 'Medellín, Colombia | Mixed-use',
    image: '/images/showcase-linea.webp',
  },
  {
    key: 'intraca',
    name: 'INTRACA',
    location: 'Heredia, Costa Rica | Workplace',
    image: '/images/showcase-intraca.webp',
  },
  {
    key: 'conchal',
    name: 'CONCHAL',
    location: 'Guanacaste, Costa Rica | Hospitality',
    image: '/images/showcase-conchal.webp',
  },
];

export default function Showcase() {
  return (
    <section className="section_showcase">
      <div className="showcase_images-wrapper">
        {projects.map((p) => (
          <div
            key={p.key}
            className="showcase_image_container"
            style={{ backgroundImage: `url(${p.image})` }}
          >
            <div className="showcase_info-wrapper">
              <h3 className="showcase_info-heading">{p.name}</h3>
              <div className="showcase_info-text">{p.location}</div>
              <div className="showcase_info-underline" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
