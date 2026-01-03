# Orbit UI

A modern UI components library built with Next.js, Tailwind CSS, ShadCN, and Storybook for portfolio and production use.

## Features

- 🎨 **Beautiful Components**: Built on top of ShadCN UI with Tailwind CSS
- ⚡ **Next.js Ready**: Optimized for Next.js applications
- 📚 **Storybook**: Interactive component documentation and development
- 🎯 **TypeScript**: Full type safety and IntelliSense support
- 🎭 **Customizable**: Easy to theme and customize
- 📦 **Tree-shakeable**: Import only what you need

## Installation

```bash
npm install @manjunath1704/orbit-ui
# or
yarn add @manjunath1704/orbit-ui
# or
pnpm add @manjunath1704/orbit-ui
```

## Usage

### Basic Example

```tsx
import { Button, Card, CardHeader, CardTitle, CardDescription, CardContent } from '@manjunath1704/orbit-ui';
import '@manjunath1704/orbit-ui/styles';

function App() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Welcome to Orbit UI</CardTitle>
        <CardDescription>Beautiful components for your next project</CardDescription>
      </CardHeader>
      <CardContent>
        <Button>Get Started</Button>
      </CardContent>
    </Card>
  );
}
```

## Components

### Button

A versatile button component with multiple variants and sizes.

```tsx
import { Button } from '@manjunath1704/orbit-ui';

// Default button
<Button>Click me</Button>

// Variants
<Button variant="destructive">Delete</Button>
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
```

### Card

A card component for containing content.

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@manjunath1704/orbit-ui';

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

## Development

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Setup

```bash
# Clone the repository
git clone https://github.com/manjunath1704/orbit-ui.git
cd orbit-ui

# Install dependencies
npm install

# Start the development server
npm run dev

# Start Storybook
npm run storybook
```

### Building

```bash
# Build the library
npm run build:lib

# Build Storybook
npm run build-storybook

# Build Next.js app
npm run build
```

## Scripts

- `npm run dev` - Start Next.js development server
- `npm run build` - Build Next.js application
- `npm run build:lib` - Build the component library for npm
- `npm run storybook` - Start Storybook development server
- `npm run build-storybook` - Build static Storybook
- `npm run lint` - Run ESLint

## Tech Stack

- **Next.js 16** - React framework
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first CSS
- **ShadCN UI** - Component primitives
- **Storybook 10** - Component documentation
- **tsup** - TypeScript bundler

## License

MIT

## Author

manjunath1704

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

