# IDNATS Template for SvelteKit

**I** **D**on't **N**eed **A**ll **T**his ... **S**tuff

*A minimal template for fed up people who just want to build something.*

## How to use this

Just clone this repo, it's yours forever.

```bash
git clone https://github.com/jakob-kruse/idnats my-project
```

```bash
npm i # or yarn or pnpm - IDFC (I'm Definitely Feeling Complacent)
```

## Features

- [Tailwind](https://tailwindcss.com/)
- Type-safe forms with [SvelteKit Superforms](https://superforms.rocks) + [Zod](https://zod.dev/)
  - Pre-built TextField component. Just see for yourself, it's nice
  - ...
- Flash Messages with [sveltekit-flash-message](https://github.com/ciscoheat/sveltekit-flash-message)
- Headless accessible & customizable components with [melt-ui](https://www.melt-ui.com/) and their preprocessor

## "But i need more shi- .. stuff"

Just add it. This template is very minimal by design.

For example you could add [Supabase](https://supabase.com/) with their [Auth Helpers](https://supabase.com/docs/guides/auth/auth-helpers/sveltekit) to have an application with a *Postgres database, Authentication, instant APIs, Edge Functions, Realtime subscriptions, Storage, and Vector embeddings.*

## "This looks ugly as heck"

Yes, and it does not even care. You should add your own styles like [Skeleton](https://skeleton.dev/) or [daisyUI](https://daisyui.com/).

## "I don't want tailwind"

Remove configs and dependencies:
```bash
rm tailwind.config.js postcss.config.js && npm remove postcss autoprefixer  prettier-plugin-tailwindcss tailwind-merge
```

Remove `prettier-plugin-tailwindcss` from **.prettierrc**.

Remove `@tailwind` directives from **src/app.css**.

Remove `cn` from **src/lib/utils.ts**. You can use clsx directly or use something else.

Style your components.

## "But it is still a lot of stuff for something minimal??"

Yes but it saves you from writing basic stuff from scratch.