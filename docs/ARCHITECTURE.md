# Architecture

- `web.rest`: REST controllers under `/api`.
- `service`: pricing, inventory, orders, reports, invoices and notifications.
- `jobs`: the morning stock alert, weekdays at 07:00.
- `src/main/webapp`: the Angular front end, one lazy route file per feature.
