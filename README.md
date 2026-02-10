# Юниспорт

[Ссылка](https://www.figma.com/design/Z9jvioRhoat38p73M1VxtR/%D0%AE%D0%BD%D0%B8%D1%81%D0%BF%D0%BE%D1%80%D1%82?node-id=119-15&p=f&t=iaWgyOTkqlSuyn2Q-0)
на макет

## Карта документации

- [Установка](#установка)
- [Используемые пакеты](#используемые-пакеты)
- [Перед тем как делать коммиты](#перед-тем-как-делать-коммиты)

## Установка

1. `pnpm install`

### Используя docker-compose
```yaml
  build: ./front-end
  environment:
      - NODE_ENV=production
  ports:
      - "5173:5173"
  volumes:
      - ./front-end:/home/node/app
  working_dir: /home/node/app
  command: ["pnpm", "run", "dev", "--host"]
```

## Используемые пакеты

- [vite](https://vite.dev/) - Сборщик пакетов
- [typescript](https://www.typescriptlang.org/) - Система типов для JS
- [Svelte/SvelteKit](https://svelte.dev) - Реактивный движок
  - [@svelte/enhanced-img](https://svelte.dev/docs/kit/images#sveltejs-enhanced-img) - Форматирование изображений
- [Prettier](https://prettier.io/) - Форматирование кода
- [Sass](https://sass-lang.com/guide/) - CSS препроцессор

## Перед тем как делать коммиты

Помни волшебную фразу "В этом комите..."

### Если добавил пакеты

Оставь на них ссылку в пункте "[Используемые пакеты](#используемые-пакеты)"

### Выполни следующие команды

1. `pnpm run check`
2. `pnpm run format`
