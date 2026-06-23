# Campaign Manager

Aplikacja CRUD do zarządzania kampaniami reklamowymi.

## Stack

| Warstwa | Technologia |
|---|---|
| UI | React 19 + TypeScript |
| Budowanie | Vite |
| Routing | React Router v7 |
| Stan globalny | Context API + useReducer |
| Formularze | React Hook Form + Zod |
| Style | LESS, mobile-first|
| Persystencja | localStorage |

## Uruchomienie

```bash
npm install
npm run dev
```

Aplikacja dostępna pod `https://campaign-manager-b7ou8wt9t-ketlas.vercel.app/`.

## Funkcjonalności

- **Lista kampanii** — przeglądanie kampanii w układzie 2-kolumnowym (tablet+)
- **Tworzenie / edycja** — formularz z walidacją (Zod), wyborem miasta (select) i słów kluczowych (typeahead)
- **Usuwanie** — potwierdzenie w modalu
- **Przełączanie statusu** — toggle ON/OFF bezpośrednio na karcie kampanii
- **Saldo** — automatycznie aktualizowane przy każdej operacji

Saldo startowe: **1000 PLN** (`INITIAL_BALANCE` w `src/config/constants.ts`).

