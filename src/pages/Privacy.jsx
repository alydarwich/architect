import LegalPage from './LegalPage.jsx';
import privacyHtml from './privacy-content.html?raw';

export default function Privacy() {
  return <LegalPage html={privacyHtml} />;
}
