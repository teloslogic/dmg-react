# DMG React

A [Software Emulation](https://en.wikipedia.org/wiki/Emulator) of the [Gameboy Model DMG](https://gbhwdb.gekkio.fi/consoles/dmg/G01176542.html) implemented in [Typescript](https://www.typescriptlang.org/) and [React](https://react.dev/). **DMG** stands for **Dot Matrix Game**, which was Nintendo's code name for this orginal model of the Gameboy.

![Gameboy Picture](/assets/gameboy.jpg "A picture of the Nintendo Gameboy Model DMG01")

## Table Of Contents
- [The Tech Stack](#the-tech-stack)
- [Technical References](#technical-references)
- [Project Setup](#project-setup)
- [Project Commands](#project-commands)

## Project Management
The project's [Kanban Board](https://github.com/orgs/teloslogic/projects/8/views/1)

## The Tech Stack
The libraries and frameworks that make up the tech stack:

- [Vitest](https://vitest.dev/) - A fast Vite-native unit test framework.
- [Vite](https://vitejs.dev/) - Next generation front end tooling.
- [React JS](https://reactjs.org) - User interface library.
- [daisyUI](https://daisyui.com/) - A component library for [Tailwind CSS](https://tailwindcss.com/).
- [Typescript](https://www.typescriptlang.org) - A strongly typed programming language.
- [Pnpm](https://pnpm.io/) - Fast, disk space efficient package manager.
- [Next JS](https://nextjs.org/) - React framework for the web.
- [Jotai](https://jotai.org/) - Global React state management.

## Project Setup
The steps for installing the required frameworks, libraries and tools needed to build, test, run, and deploy this project:

1. Install the latest, stable official release version of [Node JS](https://nodejs.org/).
2. Since v16.13, [Node JS](https://nodejs.org/) is shipping with [Corepack](https://nodejs.org/api/corepack.html). Enable it for this project by running the command `corepack enable`.
3. Use [Corepack](https://nodejs.org/api/corepack.html) to install [Pnpm](https://pnpm.io/) with the command `corepack prepare pnpm@latest --activate`.

## Project Commands
This project is setup to use [Pnpm CLI](https://pnpm.io/pnpm-cli).

All commands are run from the `dmg-react` root project directory:

| Command          | Description                                              |
| ---------------- | -------------------------------------------------------- |
| `pnpm install`   | Install all workspace libraries and dependencies         |
| `pnpm clean`     | Delete `coverage`, and `.next` folders                   |
| `pnpm coverage`  | Create unit and integration test coverage reports        |
| `pnpm dev`       | Run 'hot loading' development server                     |
| `pnpm build`     | Builds for production in the `.next` folder              |
| `pnpm start`     | Brings up the production build located in `.next` folder |
| `pnpm test`      | Run all unit and integration tests                       |
| `pnpm fix`       | Format all source code using linter syntax rules         |
| `pnpm lint`      | Look for all linting errors using linter syntax rules    |
| `pnpm ls`        | List all project dependencies                            |
| `pnpm outdated`  | Checks for outdated packages                             |
| `pnpm audit`     | Reported security vunerabilities on NPM depencies        |
| `pnpm prune`     | Remove extraneous packages                               |

_NOTE_: Be sure to use [Pnpm CLI](https://pnpm.io/pnpm-cli) and not [Npm CLI](https://docs.npmjs.com/cli/v10) to run these commands.

_NOTE_: How to get IP Address on macBook: `echo "Private IP address:" $(ifconfig $(route -n get default | awk '/interface: / {print $2}') | awk '/inet / {print $2}')`

## Technical References
* [Why You Should Write A Gameboy Emulator](https://www.youtube.com/watch?v=ElwhYW5wjts)
* [Building a Gameboy From Scratch](https://raphaelstaebler.medium.com/building-a-gameboy-from-scratch-part-1-51d05496783e)
* [Game Boy: Complete Technical Reference](https://gekkio.fi/files/gb-docs/gbctr.pdf)
* [DMG-01: How To Emulate a Game Boy](https://rylev.github.io/DMG-01/)
* [Pan Docs: Game Boy Technical Reference](https://gbdev.io/pandocs/)
* [Pan Docs: Summary](http://bgb.bircd.org/pandocs.htm)
* [Pure CSS Gameboy](https://dev.to/baumannzone/pure-css-gameboy-14n3)
* [Gameboy Emulation in JavaScript](http://imrannazar.com/GameBoy-Emulation-in-JavaScript:-The-CPU)
* [Oh Boy! Gameboy Emulator in Rust](https://www.youtube.com/watch?v=B7seNuQncvU)
* [The Ultimate Gameboy Talk](https://www.youtube.com/watch?v=HyzD8pNlpwI)
* [Gameboy Opcodes](https://www.pastraiser.com/cpu/gameboy/gameboy_opcodes.html)

