# Import in body of module; reorder to top


```
I recently got this problem too.
Import statements must ahead of declaration statements.
This line code below should not in there .
var App, code, div, fix, h1, header, img, p;

```

## 오류 코드

```jsx
import {config} from '../../../config/_config';
const rootPath = `${config.siteUrl}${config.prefix}`;

import { Header } from '../header/header';
import { Head } from '../head/head';
```

## 수정
```jsx
import {config} from '../../../config/_config';

import { Header } from '../header/header';
import { Head } from '../head/head';

const rootPath = `${config.siteUrl}${config.prefix}`;
```



-----
reference: https://github.com/jashkenas/coffeescript/issues/4815