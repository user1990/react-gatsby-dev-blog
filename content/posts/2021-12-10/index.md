---
title: Super Handy WEB resources
author: Paulius Rimgaila
date: 2021-12-10
hero: ./images/hero.jpg
excerpt: Collection of useful resources for better WEB
---

## 🔗 Links

### General
1. [World biggest storehouse of developer cheatsheets](https://codehouse.vercel.app/)
2. [30 seconds of code snippets](https://www.30secondsofcode.org/)
3. [The awards of design, creativity and innovation on the internet](https://www.awwwards.com/)
4. [Free for developers](https://free-for.dev/#/)
5. [Tips collected from Pragmatic Programmer](https://gist.github.com/jonnyjava/e35de4d7f1b260dd9c46009561a89d74)
6. [CSS Wand](https://www.csswand.dev/)
7. [How to review pull requests more quickly: practical tips](https://isamatov.com/review-pull-requests-faster/)
8. [A Guide To CSS Debugging](https://www.smashingmagazine.com/2021/10/guide-debugging-css/)

### React

1. [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example/)
2. [5 Advanced React Patterns](https://javascript.plainenglish.io/5-advanced-react-patterns-a6b7624267a6)
3. [Essential React custom hooks ](https://github.com/imbhargav5/rooks)
4. [Beautiful React hooks](https://github.com/antonioru/beautiful-react-hooks)
5. [React polymorphic components with TypeScript](https://isamatov.com/polymorphic-components-react-typescript/)
6. [React philosophies](https://github.com/mithi/react-philosophies)
7. [Levelup React skills](https://devtrium.com/)
8. [Rewriting React Docs](https://beta.reactjs.org/)


### Next.js

1. [Reduce page size by 3.5x & get 98 Lighthouse score](https://papyrus.so/@PapyrusBlog/how-we-reduced-next.js-page-size-by-3.5x-and-achieved-a-98-lighthouse-score)


### Code short tips

- Redux. Use selector & dispatch hooks instead `connect` HOC. For expensive calculations use memoized selectors

```js
import { useSelector, useDispatch } from 'react-redux'

export const CounterComponent = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch()

  return (
    <div>
    {counter}
    <button onClick={() => dispatch({ type: 'increment-counter' })}>
        Increment counter
      </button>
    </div>
  )
}
```


