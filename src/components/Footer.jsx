import { Link } from 'react-router-dom';
import './Footer.css';

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="100%" height="100%" aria-hidden="true">
    <path
      fill="currentColor"
      d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"
    />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="100%" height="100%" aria-hidden="true">
    <path
      fill="currentColor"
      d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248a4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008a3.004 3.004 0 0 1 0 6.008z"
    />
    <circle cx="16.806" cy="7.207" r="1.078" fill="currentColor" />
    <path
      fill="currentColor"
      d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42a4.6 4.6 0 0 0-2.633 2.632a6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71c0 2.442 0 2.753.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632a6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419a4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186c.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688a2.987 2.987 0 0 1-1.712 1.711a4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055c-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311a2.985 2.985 0 0 1-1.719-1.711a5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654c0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311a2.991 2.991 0 0 1 1.712 1.712a5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655c0 2.436 0 2.698-.043 3.654h-.011z"
    />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="100%" height="100%" aria-hidden="true">
    <circle cx="4.983" cy="5.009" r="2.188" fill="currentColor" />
    <path
      fill="currentColor"
      d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118c1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783c-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"
    />
  </svg>
);

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer_spacer" />
      <div className="footer_wrapper">
        <div className="padding-global">
          <div className="container-large">
            <div className="padding-section-small">
              <div className="footer_content-wrapper">
                <div className="footer-content-grid">
                  <div className="footer_headline">{'Re‑imagine Your Future Project'}</div>
                  <img
                    src="/svg/site-logo-with-slogan.svg"
                    alt="site architecture logo"
                    className="footer_logo"
                  />
                  <div className="footer_left-grid-container">
                    <div className="footer_subtext">
                      Contact us and together we will create your dream project beyond just
                      aesthetics.
                    </div>
                    <a href="mailto:alyydarwich@gmail.com" className="footer_email-link">
                      alyydarwich@gmail.com
                    </a>
                  </div>
                </div>

                <div className="spacer-medium" />

                <div className="footer_contact-grid">
                  <a href="mailto:alyydarwich@gmail.com" className="footer_contact-link">
                    <div className="footer_contact-link-text">Email Us</div>
                    <div className="footer_contact-underline-wrapper">
                      <div className="footer_contact-underline" />
                      <div className="footer_contact-underline-overlay" />
                    </div>
                  </a>
                  <a
                    href="https://www.google.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="footer_contact-link"
                  >
                    <div className="footer_contact-link-text">Book a Call</div>
                    <div className="footer_contact-underline-wrapper">
                      <div className="footer_contact-underline" />
                      <div className="footer_contact-underline-overlay" />
                    </div>
                  </a>
                  <div className="footer_contact-icons-wrapper">
                    <a
                      href="https://www.google.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="footer_contact-link-wrapper"
                      aria-label="Facebook"
                    >
                      <div className="footer_icon-embed">
                        <FacebookIcon />
                      </div>
                    </a>
                    <a
                      href="https://www.google.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="footer_contact-link-wrapper"
                      aria-label="Instagram"
                    >
                      <div className="footer_icon-embed">
                        <InstagramIcon />
                      </div>
                    </a>
                    <a
                      href="https://www.google.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="footer_contact-link-wrapper"
                      aria-label="LinkedIn"
                    >
                      <div className="footer_icon-embed">
                        <LinkedinIcon />
                      </div>
                    </a>
                  </div>
                </div>

                <div className="spacer-xlarge" />

                <div className="footer_credits-wrapper">
                  <div className="footer_text">2023 SITE Architecture. All rights reserved.</div>
                  <Link to="/terms-conditions" className="footer-link">
                    Terms &amp; Conditions
                  </Link>
                  <Link to="/privacy-policy" className="footer-link">
                    Privacy Policy
                  </Link>
                </div>

                <div className="spacer-small" />

                <div className="footer_designed-by-wrapper">
                  <div className="footer_text">Design &amp; Development by Ali Darwish</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
