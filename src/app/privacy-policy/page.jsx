import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import LegalPage from '../../components/LegalPage.jsx';

export const metadata = {
  title: 'Privacy Policy | SITE Architecture',
};

const html = readFileSync(
  join(process.cwd(), 'src/content/privacy-content.html'),
  'utf8',
);

export default function PrivacyPolicyPage() {
  return <LegalPage html={html} />;
}
