# Addis Eats - Next.js Mini Project

A small Ethiopian food ordering application built with Next.js App Router.

The purpose of this project is to demonstrate Next.js file-system routing,
dynamic routes, loading states, error states, and not-found handling.

## Routes

| Route | File | Purpose |
|---|---|---|
| `/` | `app/page.js` | Home page |
| `/menu` | `app/menu/page.js` | Menu page |
| `/menu/[id]` | `app/menu/[id]/page.js` | Dynamic dish page |
| `/cart` | `app/cart/page.js` | Cart page |
| `/checkout` | `app/checkout/page.js` | Checkout page |

## Special Route Files

| File | Purpose |
|---|---|
| `app/menu/loading.js` | Loading UI for the menu segment |
| `app/menu/error.js` | Error UI for the menu segment |
| `app/not-found.js` | Global not-found page |

## Dynamic Route

The dish route uses:

`/menu/[id]`

Examples:

- `/menu/kitfo`
- `/menu/doro-wot`
- `/menu/tibs`

The `id` value is read from the page component's `params` prop.

Unknown dish IDs call `notFound()`.

## Colocated Components

Components such as:

- `app/menu/DishList.jsx`
- `app/menu/MenuCard.jsx`

are colocated inside the menu segment.

They do not become routes because they do not contain a `page.js` file.

For example:

`app/menu/DishList.jsx`

does NOT create:

`/menu/DishList`

## Loading State

The menu page contains a small artificial delay so that
`app/menu/loading.js` can be demonstrated.

## Error State

The menu page can deliberately throw an error by visiting:

`/menu?error=true`

This demonstrates `app/menu/error.js`.

## Not Found State

An unknown dish such as:

`/menu/unknown-dish`

calls `notFound()` and displays the custom not-found page.

A completely unknown URL also displays the not-found page.

## Navigation

Internal navigation uses Next.js `Link`.

No plain anchor tags are used for internal routes.

## Run the Project

Install dependencies:

```bash
npm install