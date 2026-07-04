import { redirect } from 'next/navigation';

// Catch-all for any path not matched by a real route. The original SPA sent
// unknown routes back to the home page, so we issue a real redirect here.
// Defined static routes (/, /privacy-policy, /terms-conditions) take
// precedence over this catch-all.
export default function CatchAll() {
  redirect('/');
}
