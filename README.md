# Artemis Landing Page

Landing page for [Artemis](https://github.com/ls1intum/Artemis) using [Astro](https://astro.build/)


## Installation

### 1. Clone the repo

Clone this repository to your local machine:

```bash
git clone https://github.com/artemisapp/artemisapp.github.io.git
```

```bash

### 2. Install Dependencies

```bash
pnpm install
```

> [!NOTE]  
> PNPM not installed? Read how to install PNPM [here](https://pnpm.io/installation).

### 3. Start development Server

```bash
pnpm dev
```

### Preview & Build

```bash
pnpm preview
pnpm build
```

### Other Commands

```bash
pnpm astro ...
pnpm astro add
pnpm astro --help
```

## Project Structure

You'll see the following folders and files:

```
/
├── public/
│   └── ...
├── src/
│   ├── components/
│   │   └── ...
│   ├── layouts/
│   │   └── ...
│   └── pages/
│       └── ...
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

Any static assets, like images, can be placed in the `public/` directory.

## TailwindCSS

TailwindCSS is already configured in this repo, so you can start using it without any installation.
