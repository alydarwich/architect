import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import LegalPage from '../../components/LegalPage.jsx';

export const metadata = {
  title: 'Terms & Conditions | SITE Architecture',
};

const html = readFileSync(
  join(process.cwd(), 'src/content/terms-content.html'),
  'utf8',
);

export default function TermsConditionsPage() {
  return <LegalPage html={html} />;
}
