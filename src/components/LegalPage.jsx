import './LegalPage.css';

export default function LegalPage({ html }) {
  return (
    <main className="main-wrapper">
      <section className="section_legal">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-large">
              <div
                className="legal_content"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
