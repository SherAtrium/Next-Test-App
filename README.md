# Next Test App

This application is built purely for demonstration and testing purposes. It showcases common Next.js patterns and a clean project structure while implementing the tasks below.

## Goals

Разработка веб‑приложения на Next:

1) Обязательные элементы
- Роутинг Next
- 4 страницы с разными стратегиями рендеринга
- Работа с API (jsonplaceholder)
- Модальное окно с минимум 2 инпутами (text + file)
- Отправка POST‑запроса с данными из модального окна (по желанию — демонстрация WebSocket)

2) Ограничения и правила
- Можно использовать любые сторонние библиотеки
- Важна архитектура проекта
- Обязательно показать навыки работы со стилями
- Постарайтесь отобразить как можно больше своих навыков

## What’s Included

- Next.js App Router with clear routing
- Four rendering strategies:
    - SSG (Static Site Generation)
    - ISR (Incremental Static Regeneration)
    - SSR (Server‑Side Rendering)
    - CSR (Client‑Side Rendering)
- API integration:
    - Local API routes proxying jsonplaceholder
    - GET/POST examples
- UI/UX:
    - Reusable components (Button, Text, Input, Modal, FileUpload)
    - Modal with Text and File inputs
    - POST submission from modal and response preview
    - Optional WebSocket echo demo
    - Theme toggle (light/dark/system) powered by next-themes
- Styling:
    - SCSS Modules
    - Themeable via CSS variables + SCSS helpers
    - Consistent, nested class patterns

## Pages Overview

- CSR: Data fetched on the client (useEffect)
- SSR: Data fetched on each request on the server
- SSG: Data generated at build time
- ISR: Static page revalidated on an interval

Each page renders a list using shared ListRenderer components.

## Modal & Form

- Text input (title)
- File input (with validation: type + size)
- Submit posts JSON to local API route
- Shows loading, error, and response states
- Components extracted for reusability:
    - Input (with label)
    - FileUpload (validation + selected file info)
- Optional WebSocket echo: separate component that sends a payload and renders the echo message

## Tech Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- SCSS Modules
- Stylelint + Biome for quality

## Getting Started

- Install: npm install
- Dev: npm run dev
- Build: npm run build
- Start: npm start
- Lint styles: npm run stylelint
- Fix styles: npm run stylelint:fix
- Biome checks: npm run lint

## Notes

- This is a demo: code favors clarity and separation of concerns.
- Theme toggle is implemented and used in the UI.
- Local API routes forward to jsonplaceholder for convenience.
