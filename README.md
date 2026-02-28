# Bona — Ресторація

> Сайт ресторації **Bona** у Кам'янці-Подільському.
> Автентична кухня Поділля з італійськими акцентами. Натхнена королевою Боною Сфорцою.

---

## Стек

| Технологія | Версія |
|---|---|
| Angular | 21 |
| Tailwind CSS | 3.4 |
| TypeScript | 5.x |
| SCSS | — |

---

## Структура проєкту

```
src/
├── app/
│   ├── components/
│   │   ├── navbar/          — Фіксований хедер + мобільна нижня навігація
│   │   ├── hero/            — Fullscreen hero з маркізою
│   │   ├── about/           — Про ресторацію: факти, цитата, фото
│   │   ├── menu-section/    — Попередній перегляд меню на головній
│   │   ├── menu-teaser/     — Тизер переходу до повного меню
│   │   ├── gallery/         — Фотогалерея з lightbox
│   │   ├── contacts/        — Контакти, карта, бронювання
│   │   └── dish-modal/      — Модальне вікно страви
│   ├── pages/
│   │   └── menu-page/       — Повна сторінка меню (/menu)
│   ├── services/
│   │   ├── language.service.ts   — EN/UA перемикач (signal-based)
│   │   ├── menu.ts               — Завантаження меню з API
│   │   └── dish-modal.service.ts — Стан модального вікна
│   └── i18n/
│       ├── uk.ts            — Українські тексти (source of truth)
│       └── en.ts            — Англійські тексти
├── index.html
├── styles.scss              — Глобальні стилі + компонентні класи
└── tailwind.css             — Tailwind entry point
public/
├── bona_menu_uk.json        — Дані меню (UA)
└── bona_menu_en.json        — Дані меню (EN)
```

---

## Запуск

```bash
npm install
npm start          # http://localhost:4200
```

### Збірка

```bash
npm run build      # dist/bona/browser/
```

---

## Функціонал

- **Двомовність** — EN / UA перемикач у навбарі, збереження у `localStorage`
- **Повне меню** — сторінка `/menu` з пошуком, фільтром по категоріях і табами
- **Lightbox галерея** — навігація клавіатурою (ESC, ← →)
- **Модальне вікно страви** — розгорнута інформація при кліку на картку
- **Мобільна навігація** — фіксована нижня панель замість burger-меню
- **Адаптивність** — mobile-first, протестовано на всіх брейкпоїнтах

---

## Дизайн

Бренд-кольори:

| Токен | HEX | Використання |
|---|---|---|
| `gold` | `#C9A24D` | Акценти, кнопки, правило |
| `ink` | `#1E1E1E` | Основний текст |
| `cream` | `#F5F3EF` | Світлі секції |
| `forest` | `#0E2430` | Темні секції, навбар |

Шрифти: **Playfair Display** (заголовки) · **Inter** (тіло) · **Dancing Script** (бренд)

---

## Автори

**Розробка та дизайн** — [Danylchuk Andriy](https://github.com/andre20122002)
**Репозиторій** — [IT-Kamianets / bona.itkamianets.com](https://github.com/IT-Kamianets/bona.itkamianets.com)
