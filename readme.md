# Table of contents
- [Table of contents](#table-of-contents)
- [Intro](#intro)
  - [Install](#install)
  - [Naming convention](#naming-convention)
    - [Files](#files)
    - [Styled component](#styled-component)
    - [Styled tag](#styled-tag)
  - [Features](#features)
    - [Nesting](#nesting)
    - [Props](#props)
    - [Style Variables SASS-like](#style-variables-sass-like)
    - [Global styles](#global-styles)
  - [Styled img](#styled-img)
  - [Advanced prop destructuring](#advanced-prop-destructuring)
  - [Advanced ternary](#advanced-ternary)

# Intro
**Landing page from Fron end mentor & Based on tutorial by Traversity Media**

Basically allows you to create empty HTML nodes whit styling, then uses the child to populate it

## Install 
- npm install --save styled-components

## Naming convention
### Files
FILE_NAME.[styles/styled].jsx

### Styled component
```jsx
export const StyledHeader = styled.header`
  font-family: "Courier New", Courier, monospace;
`;
```

### Styled tag
```jsx
export const Nav = styled.nav`
  color: #eee
`;
```


## Features
### Nesting
```jsx
export const StyledHeader = styled.header`
  background-color: #ebfbff;
  padding: 40px 0;

  h1 {
    color: blueviolet;
  }
`;
```

### Props
**Component**
```jsx
export default function Header() {
  return (
    <StyledHeader bg="pink">
      <h1>Bubbler</h1>
    </StyledHeader>
  );
}
```

**Styled**
```jsx

export const StyledHeader = styled.header`
  background-color: ${({ bg }) => bg};
  padding: 40px 0;
`;

```

### Style Variables SASS-like
Just use the theme provider and provide and object whit all the variables you may need, and use that object in any child styled component

**Child styled component**
```jsx
export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
  padding: 40px 0;
`;
```

### Global styles
- Create a new file `components/styled/Globals.jsx`
- import `createGlobalStyle`
- use it as component inside `App.jsx`


```jsx
function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <>
      <GlobalStyles/>
        <Header />
        <StyledContainer>
          <h1>Hellowda</h1>
        </StyledContainer>
      </>
    </ThemeProvider>
  );
}

```

## Styled img 
**Using styled component**
```jsx
return(
  <Logo src="/imgs/logo.svg" alt="Cool logo" />
)
```

**Creating it**
```jsx
export const Logo = styled.img`
  src: ${({ src }) => src};
  alt: ${({ alt }) => alt};
`;
```

## Advanced prop destructuring
```jsx
export default function Card({ item: { id, title, content, img } }) {
  return (
    <div>
      <div>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>

      <div>
        <img src={`/imgs/${img}`} alt="" />
      </div>
    </div>
  );
}
```

## Advanced ternary
if id is even, us `"row-reverse"` as prop value, otherwise pass nothing

```jsx
<StyledCard layout={id % 2 === 0 && "row-reverse"}>
```

```jsx```