This is a [Next.js](https://nextjs.org/) 13 project designed to show pagination with server components.


This is a follow up to [Alex Sidorenko](https://twitter.com/asidorenko_)'s beautiful visualization of paging with server components [here](https://twitter.com/asidorenko_/status/1681325021812215808), which uses path segments to keep track of the page number.

This particular example uses URL Search Params to achieve the same. URL Search Params (or query params) may be a better way to keep track of pagination, IMHO, because they are more flexible and can be used to filter the data as well.

There are two deviations from Alex's example:
1. The root route uses the [`searchParams`](https://nextjs.org/docs/app/api-reference/file-conventions/page#searchparams-optional) prop to get the search params, and passes them onto the `ProductList` component, which is not able to access them directly.
2. The `Pagination` component is now linking to the root route with the search params, instead of the path segments.

There is a caveat: Accessing `searchParams` [opts the page into dynamic rendering at request time](https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic-rendering#dynamic-functions). Is that a performance hit?

### Other Options

1. The `Pagination` component (which is already a client component) could have used [`useSearchParams`](https://nextjs.org/docs/app/api-reference/functions/use-search-params) to access the search params. But the data fetching also needs to know the current page number, and we are doing that in the parent server component.
2. The whole `ProductList` component could have been made a client component.