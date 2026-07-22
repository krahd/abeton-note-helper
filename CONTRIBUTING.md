# Contributing

Corrections and focused improvements are welcome, especially for:

- device-grid geometry;
- scale, chord, arpeggio and voicing definitions;
- chord symbols and enharmonic interpretations;
- keyboard and screen-reader behaviour;
- mobile usability.

## Before opening a pull request

1. Keep the application dependency-free at runtime.
2. Add or update deterministic tests for any music-theory or layout change.
3. Run:

   ```sh
   npm test
   ```

4. Describe the musical or device reference used for factual corrections.
5. Avoid introducing tracking, analytics, accounts or network requirements.

## Reporting a problem

Use the issue templates. For a grid error, include the layout, row, column, expected note and observed note. For a theory error, include the root, pattern name, expected pitch set or voicing, and a reliable reference where possible.
