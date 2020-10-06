This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, get started by installing:

```bash
npm run install
# or
yarn install
```

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

## Testing

```bash
npm run test
# or
yarn test
```

## Notes and Thoughts

Thank you for taking the time to look over my contribution. This is a basic React app built with Next.js. It has minimal styling, but it is responsive in the layout of items for mobile and tablet. As per the directions I left styling mostly alone. If you want to see my other UI work you can check out my portfolio at https://theran.dev. I was a bit unclear about how to exactly display the items, but I believe that this follows the criteria laid out. All of the images are fetched from the API route. Then you can click on the images to view a larger version. Along with that, your viewing history is stored and you can view the previous items. I decided to show all of your previous views, though it could have just shown the very last one that was viewed.

## Possible Changes for Revision

### State Management

The directions said that bonus would be given for Redux, however for this small scale application I decided to just use the standard state management, as props are only passed one level.  If this were to scale up I would use my state store, dispatches, and reducers to store the state and call functions.  However, with limited time, I decided to keep it simple.  There are only three basic states in this app and none of them gets drilled down more than one level, so I kept it simple.

### Styling

My styling standards are much better than this on a normal project.  I am perfectly fine working with designers to create pixel perfect designs.  However, in this case you said that styling could be largely ignored.  I did make sure that it is responsive for mobile and tablet.  It is not the prettiest and could be optimized more for tablet, but the basic layout is there.

### Testing

There is a basic testing suite.  One warning gets thrown for the `act()` wrapper to be used, but due to time, I was not able to get it to go away.  It is due to the setState in the useEffect function.  I need to mock that out or make the test async to work.  I did not have time to get rid of it, but all of the basic tests that I have are working just fine.

## Final Thoughts

This is representation of my basic style and code structure.  I know that it could use refactoring and styling, but with limited time, it is far from perfect.
