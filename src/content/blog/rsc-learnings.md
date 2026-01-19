---
title: 'Rethinking State with Server Components'
description: 'My takeaways from refactoring a client-heavy dashboard to React Server Components.'
pubDate: 'Jan 19 2026'
---

React Server Components (RSC) have been the talk of the town for a while now. I finally took the plunge and refactored a portion of our analytics dashboard to use them. Here is what I learned.

## The Mental Model Shift

The biggest hurdle wasn't the syntax—it was the mental model. We are so used to "client-first" thinking:
1.  Load page shell.
2.  Fetch data (show spinner).
3.  Render data.

With RSC, we shift to "server-first":
1.  Fetch data on the server.
2.  Render HTML.
3.  Stream to client.

```tsx
// dashboard/page.tsx
async function Dashboard() {
  const data = await db.analytics.findMany(); // Direct DB access! 🤯
  
  return (
    <main>
      <Chart data={data} />
    </main>
  );
}
```

## The Wins

*   **Zero Bundle Size**: Heavy formatting libraries (like `date-fns`) used purely for display logic stay on the server.
*   **No Waterfalls**: We killed a chain of 3 separate API calls by fetching everything in parallel on the server closer to the DB.

It's not a silver bullet, but for data-heavy apps, it feels like the future.
