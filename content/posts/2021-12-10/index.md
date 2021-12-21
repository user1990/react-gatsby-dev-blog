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
2. [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example/)
3. [React philosophies](https://github.com/mithi/react-philosophies)
4. [Reduce page size by 3.5x & get 98 Lighthouse score](https://papyrus.so/@PapyrusBlog/how-we-reduced-next.js-page-size-by-3.5x-and-achieved-a-98-lighthouse-score)


### Useful Tips 

1. CSS shorthands.
   ```js
   // overflow-x 
   // overflow-y
   - overflow: hidden visible; 
    //font-weight: bold;
    //font-style: italic;
    //font-variant: small-caps;
    //font-size: 1em;
    //line-height: 1.6;
    //font-family: Arial, Helvetica, sans-serif;
   - font: bold italic 1rem/1.6 $fontAlt;
   // grid-template-rows: 100px auto 300px; 
   // grid-template-columns: repeat(2, 1fr);
   - grid: 100px auto / repeat(2, 1fr) 
   // align-content: center;
   // justify-content: space-between;
   - place-content: center space-between ;
   // align-items: center;
   // justify-items: center;
   - place-items: center center;
   // position: absolute;
   // op: 0;
   // left: 0;
   // bottom: 0;
   // right: 0;
   - inset: 0; /* top right bottom left */
   ```
2. Avoid absolute positioning, use CSS grid instead.
    ```css
    .container {
      position: relative;
      display: grid;
    }

    .thumb,
    .image {
      grid-area: 1/2; /* grid-row: 1/2; grid-column: 1/2; */
    }

    .image {
      margin: 10px 20px 0 15px;
    }
    ```
3. Use absolute imports instead relative.
  ```js
  import styles from '@/styles/Home.module.css';
  or
  import styles from 'styles/Home.module.css';
  ```
4. Use console.log custom snippet, for faster & clearer debugging. 
  ```js
  console.log('%cVARIABLE_NAME', 'color: green; font-size: 1.5rem;', VARIABLE_NAME);
  ```
5. Type `.` in any Github repo root to open source directly in VS code WEB. Also `https://vscode.dev/`
6. Automate sort inports. [eslint-plugin-sort-import](https://www.npmjs.com/package/eslint-plugin-sort-import)
7. CSS units usage:
  - rem for font-size. Avoids the scaling problems, maximum of accessibility, everything grows proportionally.
  - px/% for padding, margin, border.
8. Quickly hide html element
```js
<p hidden>This paragraph is not visible on the page, it is hidden from the HTML.</p> 
```
