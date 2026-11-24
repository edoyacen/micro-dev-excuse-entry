// One Emoji, One Dream Vacation.
// This entry writes the answer for the "One Emoji, One Dream Vacation" bounty
// to the output directory (MAKEFUN_OUTPUT_DIR, default /output).
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const answer = "🏕️";
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), answer, 'utf8');
console.log(`Wrote ${answer.length} characters to ${join(out, 'entry.txt')}`);
