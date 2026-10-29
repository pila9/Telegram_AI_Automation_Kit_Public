import { readFileSync } from 'node:fs';
import { readdirSync } from 'node:fs';
import { test } from 'node:test';
import assert from 'node:assert/strict';

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

const listFiles = (dir) => {
  return readdirSync(new URL(`../${dir}`, import.meta.url), { withFileTypes: true }).flatMap((entry) => {
    const child = `${dir}/${entry.name}`;
    return entry.isDirectory() ? listFiles(child) : child;
  });
};

test('package metadata is branded for the Telegram AI kit', () => {
  const pkg = JSON.parse(read('package.json'));

  assert.equal(pkg.name, 'telegram-ai-automation-kit');
  assert.equal(pkg.license, 'MIT');
});

test('the UI states demo limitations and mock configuration boundaries', () => {
  const landing = read('src/pages/LandingPage.tsx');
  const settings = read('src/pages/SettingsPage.tsx');

  assert.match(landing, /Demo limitations/i);
  assert.match(settings, /Demo settings only/i);
  assert.match(settings, /not saved, validated, or sent to APIs/i);
});

test('demo CTAs explain that no live form or lead capture is connected', () => {
  const packages = read('src/pages/PackagesPage.tsx');
  const portfolio = read('src/pages/PortfolioPage.tsx');

  assert.match(packages, /no form is connected/i);
  assert.match(portfolio, /no form is connected/i);
});

test('public demo files do not reference unused Supabase integration', () => {
  const checkedFiles = [
    'package.json',
    'package-lock.json',
    'README.md',
    'SECURITY.md',
    ...listFiles('src'),
  ];

  for (const file of checkedFiles) {
    assert.doesNotMatch(read(file), /supabase/i, `${file} should not reference Supabase`);
  }
});
