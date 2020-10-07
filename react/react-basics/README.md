# React Typescript Basics
## create react app
`--typescript`オプションをつけて作成
```shell
npm install -g create-react-app
create-react-app my-react-app --typescript
yarn start
```

### 関数コンポーネント
```tsx
function Welcome() {
  return <h1>Welcome to React!</h1>;
}

// FC: Functional Component
const Hello: React.FC = () => {
    return <p>Hello World</p>
}
```

### State
```tsx
import React, {useCallback, useState} from 'react'

function Counter() {
    // [値, 更新するための関数]
    const [count, setCount] = useState<number>(0)

    const handleIncrement = useCallback(() => {
        setCount(value => value + 1)
    }, []);

    const handleDecrement = useCallback(() => {
        setCount(value => value - 1)
    }, [])
    return (<div>
        <div>{count}</div>
        <div>
            <button onClick={() => handleIncrement()}>+1</button>
            <button onClick={() => handleDecrement()}>-1</button>
        </div>
    </div>)
}
```
### リスト
```typescript
type Item = {
  id: number
  title: string
}

const items: Item[] = [
  { id: 1, title: 'Item 1' },
  { id: 2, title: 'Item 2' },
  { id: 3, title: 'Item 3' }
]
```
```tsx
function MyList() {
  return (
    <ul>
      {items.map((item: Item) => {
        return <li key={item.id}>{item.title}</li>
      })}
    </ul>
  );
}
```
### Props
タイプエイリアスを作成する  
```tsx
type Props = {
    title: string,
    children: React.ReactNode
}

function MyProps(props: Props){
    return (
        <p>{ props.title }: { props.children }</p>
    )
}
```
childrenで渡すことで省略した書き方ができる。

```tsx
return <MyProps title="Message from App">Hello</MyProps>
```