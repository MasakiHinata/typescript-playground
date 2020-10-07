# Typescript ES-Module
## export
```typescript
export class Wheel {}
```
## import
```typescript
import { Wheel } from './wheel.js'
```
## tsconfig
es-moduleはes6以降の機能なので、TypescriptをJSファイルに変換するときに`ES6`の仕様に合わせる。
```json
{
  "compilerOptions": {
        "target": "es6",                         
        "module": "ES6", 
```
## index.htmlから読み込む
`type=module`と指定して`js`ファイルを読み込む
```html
<script src="./dist/index.js" type="module"></script>
```
モジュールを使用するときには、ファイルをhttp通信で取得しないといけない。  
VSCodeの`Live Server`などを使って起動すれば、正常に動作する。