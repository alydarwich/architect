let resolveFn;
let resolved = false;

export const introPromise = new Promise((resolve) => {
  resolveFn = resolve;
});

export function completeIntro() {
  if (!resolved) {
    resolved = true;
    resolveFn();
  }
}

export function isIntroResolved() {
  return resolved;
}
