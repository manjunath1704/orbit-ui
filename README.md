# orbit-ui

A small React 18 + TypeScript component library with accessibility and tree-shakeable exports.

Quick start

1. Install
   npm install orbit-ui
   (peer dependencies: react, react-dom)

2. Usage - Button
   import { Button } from "orbit-ui";

   <Button variant="primary" onClick={() => {}}>Click me</Button>

Design notes
- Components are unopinionated and composable.
- ClassName and style supported.
- Forwarded refs provided where applicable.
- CSS Modules used for styles by default (no external UI deps).

Publishing checklist
- Ensure version bump in package.json
- Run npm run typecheck && npm run build
- Verify dist contains cjs + esm + types
- Run local smoke test against a sample app
- Publish: npm publish --access public