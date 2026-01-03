# Orbit UI - Publishing Guide

## Package Overview

Orbit UI is now a fully configured npm package ready for publishing. Here's what has been set up:

### ✅ Completed Setup

1. **Next.js 16** - Modern React framework with TypeScript
2. **Tailwind CSS 4** - Utility-first CSS with custom design tokens
3. **ShadCN UI** - Component primitives and utilities
4. **Storybook 10** - Interactive component documentation
5. **Build System** - tsup for efficient library bundling
6. **Type Safety** - Full TypeScript support with declaration files

### 📦 Package Configuration

The package is configured for publishing to npm as `@manjunath1704/orbit-ui` with:
- CommonJS and ESM module formats
- TypeScript declaration files
- Proper peer dependencies for React 18/19
- Export maps for tree-shaking

### 🎨 Components Included

1. **Button** - Multiple variants and sizes
   - Variants: default, destructive, outline, secondary, ghost, link
   - Sizes: default, sm, lg, icon

2. **Card** - Flexible card component
   - CardHeader, CardTitle, CardDescription
   - CardContent, CardFooter

### 🚀 How to Publish

1. **Test the package locally:**
   ```bash
   npm run build:lib
   npm run lint
   npm run storybook
   ```

2. **Update version in package.json** (currently 0.1.0)

3. **Login to npm:**
   ```bash
   npm login
   ```

4. **Publish to npm:**
   ```bash
   npm publish --access public
   ```

### 📚 Using the Package

After publishing, users can install it:

```bash
npm install @manjunath1704/orbit-ui
```

And use it in their projects:

```tsx
import { Button, Card, CardHeader, CardTitle, CardContent } from '@manjunath1704/orbit-ui';
import '@manjunath1704/orbit-ui/styles';

function App() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Hello World</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Click me</Button>
      </CardContent>
    </Card>
  );
}
```

### 🛠️ Development Commands

- `npm run dev` - Start Next.js development server
- `npm run build` - Build Next.js application
- `npm run build:lib` - Build the library for npm distribution
- `npm run storybook` - Start Storybook on port 6006
- `npm run build-storybook` - Build static Storybook
- `npm run lint` - Run ESLint

### 📝 Next Steps

1. Add more components as needed
2. Write comprehensive tests
3. Set up CI/CD for automated publishing
4. Create a documentation website
5. Add more Storybook stories and examples

### 🔒 Security

- All dependencies are up to date
- No security vulnerabilities detected
- CodeQL security scan passed

### 📖 Documentation

Complete documentation is available in:
- README.md - Package overview and usage
- Storybook - Interactive component documentation
- TypeScript types - IntelliSense support

## Support

For issues or questions, please open an issue on GitHub:
https://github.com/manjunath1704/orbit-ui/issues
