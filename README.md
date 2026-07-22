# Ableton Note Helper

Interactive reference and practice tool for Ableton Note's 13 × 5 fourths grid.

## Features

- Exact 13-column × 5-row layout, with bottom-left C.
- One semitone per column and one perfect fourth per row.
- Simultaneous charts with independently selectable roots and patterns.
- Scales, modes, triads, seventh chords, extended chords, arpeggios, shell voicings, drop-2 voicings and quartal voicings.
- Four-colour note display: blue root, orange pattern tones, black unused naturals, grey unused accidentals.
- Tap pads to assemble a pitch-class set and identify matching chord names.
- Sharp/flat spelling and linked/unlinked roots.
- Responsive, dependency-free static application.

## Run locally

Open `index.html`, or serve the directory:

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Deployment

GitHub Pages deploys automatically from `main` through `.github/workflows/pages.yml`.

## Layout

Bottom row begins at C. Rows ascend by perfect fourths:

- Row 1: C
- Row 2: F
- Row 3: B♭ / A♯
- Row 4: E♭ / D♯
- Row 5: A♭ / G♯

Every row contains 13 chromatic pads, so the last pad repeats the first pitch class one octave higher.

## Licence

MIT
