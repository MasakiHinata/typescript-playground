# Typescript ES-Module
## Basics of ES-Module
### export
```typescript
export class Wheel {}
```
### import
```typescript
import { Wheel } from './wheel.js'
```
### tsconfig
es-moduleはes6以降の機能なので、TypescriptをJSファイルに変換するときに`ES6`の仕様に合わせる。
```json
{
  "compilerOptions": {
        "target": "es6",                         
        "module": "ES6", 
```
### index.htmlから読み込む
`type=module`と指定して`js`ファイルを読み込む
```html
<script src="./dist/index.js" type="module"></script>
```
モジュールを使用するときには、ファイルをhttp通信で取得しないといけない。  
VSCodeの`Live Server`などを使って起動すれば、正常に動作する。

## imoprtの方法
1. 特定の要素をimportする
    ```typescript
    import { Wheel } from './wheel.js'
    ```
1. 別名をつけてimportする   
    `OOO as XXX`と指定してimport
    ```typescript
    import { Wheel as AliasWheel } from './alias_wheel.js'
    const aliasWheel = new AliasWheel("alias wheel");
    ```
1. すべてをimportする  
    `* as XXX`と指定してimport
    ```typescript
    import * as Persons from './person.js'
    const alice = new Persons.Student("literature", "alice")
    ```
1. `export default`  
    ```typescript
    export default class Car {
    ```
    波括弧がいらなくなる
    ```typescript
    import Car from './car.js'
    const car = new Car(wheel);
    ```