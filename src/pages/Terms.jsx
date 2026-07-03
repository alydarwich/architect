import LegalPage from './LegalPage.jsx';
import termsHtml from './terms-content.html?raw';

export default function Terms() {
  return <LegalPage html={termsHtml} />;
}
