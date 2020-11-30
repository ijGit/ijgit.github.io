---
title: typography-test
date: 2020-11-29
---

# Typography.js

아름다운 타이포그래피로 웹 사이트를 구축하기위한 강력한 툴킷입니다.

# Typography.js [![빌드 상태](https://camo.githubusercontent.com/93cde06116412c9d8482fec84ae2919125143890d6aff7380a03fbb03ac7c103/68747470733a2f2f696d672e736869656c64732e696f2f7472617669732f4b796c65414d6174686577732f7479706f6772617068792e6a732e737667)](https://travis-ci.org/KyleAMathews/typography.js) [![보장 상태](https://camo.githubusercontent.com/20a9d5d7f673c357e6e21644134408193c9bbef59fcd36229f9eedcfa2d26442/68747470733a2f2f696d672e736869656c64732e696f2f636f6465636f762f632f6769746875622f4b796c65414d6174686577732f7479706f6772617068792e6a732e737667)](https://codecov.io/github/KyleAMathews/typography.js)

아름다운 디자인의 웹 사이트 구축을위한 강력한 툴킷입니다.

## 설치

```
npm install typography
```

## 데모 / 놀이터

http://kyleamathews.github.io/typography.js

## 왜

Typography.js의 목표는 타이포그래피 디자인 의도를 표현하기위한 고수준의 우아한 API를 제공하는 것입니다.

타이포그래피는 상호 관련된 스타일 의 복잡한 *시스템* 입니다. 수십 가지 요소에 대한 수백 가지 스타일 선언은 조화로운 순서로 이루어져야합니다. 한 번의 디자인 변경을 시도하는 것은 수십 번의 지루한 재계 산과 CSS 값 변경을 의미 할 수 있습니다. CSS로 새로운 타이포그래피 테마를 만드는 것은 어렵습니다.

Typography.js는 타이포그래피 디자인을 정의하고 탐색하는 훨씬 더 간단한 방법을 제공합니다.

Typography.js JS API에 구성을 제공하고 Typography 엔진을 사용하여 블록 및 인라인 요소에 대한 CSS를 생성합니다.

Typography.js를 사용하면 프로젝트에 고유하고 맞춤화 된 디자인을 쉽게 만들 수 있습니다.

## 테마 및 플러그인

- **테마** : Typography.js 테마는 간단한 자바 스크립트 객체입니다. 따라서 프로젝트간에 공유하거나 [오픈 소스를](https://www.npmjs.com/browse/keyword/typography-theme) 쉽게 공유 [하고 NPM을 통해 공유 할 수](https://www.npmjs.com/browse/keyword/typography-theme) 있습니다.
- **플러그인** : 플러그인은 핵심 타이포그래피 엔진을 확장하거나 수정하는 기능입니다. 헤더 스타일을 변경하거나 코드 또는 테이블과 같은 특수 스타일을 추가 할 수 있습니다.

## Typography.js를 사용하는 사이트

- [bricolage.io](https://bricolage.io/?utm_source=github.com) ( [소스](https://github.com/KyleAMathews/blog/blob/master/blog-typography.coffee) )
- [React Headroom](https://kyleamathews.github.io/react-headroom/) ( [소스](https://github.com/KyleAMathews/react-headroom/blob/master/www/utils/typography.js) )
- [Gatsby Blog Starter](http://gatsbyjs.github.io/gatsby-starter-blog/) ( [소스](https://github.com/gatsbyjs/gatsby-starter-blog/blob/master/src/utils/typography.js) )
- [ollieglass.com](http://ollieglass.com/)
- [mokkapps.de](https://www.mokkapps.de/) ( [소스](https://github.com/Mokkapps/website/blob/master/src/utils/typography.js) )
- [privatimkerei-hoffmann.de](https://privatimkerei-hoffmann.de/) ( [출처](https://github.com/Mokkapps/imkerei-hoffmann-website/blob/master/src/utils/typography.js) )
- [리조 조이](https://rijojoy.surge.sh/)
- [이 파일을 편집하여 추가하십시오!](https://github.com/KyleAMathews/typography.js/blob/master/README.md)

## 자바 스크립트 사용

```
수입  타이포그래피  에서  '타이포그래피'

const  typography  =  new  Typography ( { 
  baseFontSize : '18px' , 
  baseLineHeight : 1.45 , 
  headerFontFamily : [ 'Avenir Next' ,  'Helvetica Neue' ,  'Segoe UI' ,  'Helvetica' ,  'Arial' ,  'sans-serif' ] , 
  bodyFontFamily : [ 'Georgia' ,  'serif' ] , 
  // 전체 옵션 목록은 아래를 참조하세요. 
} )

// CSS를 문자열로 출력합니다. 
타이포그래피 . toString ( )

// 또는 <head>에 직접 스타일을 삽입합니다 (클라이언트 전용 
// JS 웹 앱에서 
잘 작동 합니다.) typography . injectStyles ( )
```

## 테마

우리는 다음 프로젝트에 사용할 준비가 된 30 개의 테마를 유지합니다. 이들은 각각 별도의 NPM 패키지로 게시됩니다. http://kyleamathews.github.io/typography.js 에서 테마를 살펴보세요 .

### 테마 사용

다음은 Funston 테마를 사용하는 방법의 예입니다.

1. 먼저 패키지를 프로젝트에 저장하십시오. `npm install --save typography-theme-funston`
2. 그런 다음 초기화 할 때 Typography로 가져 와서 전달합니다.

```
수입  타이포그래피  에서  '인쇄술' 
수입  funstonTheme  에서  '타이포그래피 - 테마 funston'

const  typography  =  new  Typography ( funstonTheme )
```

### 테마 사용자 지정

테마는 자바 스크립트 개체 일 뿐이므로 필요에 따라 쉽게 수정할 수 있습니다. 예를 들어 Funston 테마를 사용하고 있지만 기본 글꼴 크기를 약간 늘리려는 경우 :

```
수입  타이포그래피  에서  '인쇄술' 
수입  funstonTheme  에서  '타이포그래피 - 테마 funston' 
funstonTheme . baseFontSize  =  '  22px ' // 20px입니다.

const  typography  =  new  Typography ( funstonTheme )
```

또는 명령형 API `overrideThemeStyles`를 사용하여 테마의 스타일을 직접 설정 / 재정 의 할 수 있습니다 .

```
수입  타이포그래피  에서  '인쇄술' 
수입  funstonTheme  에서  '타이포그래피 - 테마 funston' 
funstonTheme . overrideThemeStyles  =  ( {  리듬  } ,  옵션 )  =>  ( { 
  'H2, H3' : { 
    marginBottom : 리듬 ( 1 / 2 ) , 
    marginTop : 리듬 ( 2 ) , 
  } 
} )

const  typography  =  new  Typography ( funstonTheme )
```

### 게시 된 Typography.js 테마

- [타이포그래피 테마 알톤](https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-alton/)
- [타이포그래피 테마 부트 스트랩](https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-bootstrap/)
- [타이포그래피 테마 드영](https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-de-young/)
- [타이포그래피 테마 doelger](https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-doelger/)
- [타이포그래피 테마 엘크 글렌](https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-elk-glen/)
- [타이포그래피 테마 페어리 게이트](https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-fairy-gates/)
- [타이포그래피 테마 funston](https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-funston/)
- [타이포그래피 테마 github](https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-github/)
- [타이포그래피 테마 그랜드 뷰](https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-grand-view/)
- [타이포그래피 테마](https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-irving/)
- [타이포그래피 테마 유다](https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-judah/)
- [타이포그래피 테마 로턴](https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-lawton/)
- [타이포그래피 테마 읽기](https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-legible/)
- [타이포그래피 테마 링컨](https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-lincoln/)
- [타이포그래피 테마 커캄](https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-kirkham/)
- [타이포그래피 테마 모라가](https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-moraga/)
- [타이포그래피 테마 노리에가](https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-noriega/)
- [타이포그래피 테마 오션 비치](https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-ocean-beach/)
- [타이포그래피 테마 파르 나서 스](https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-parnassus/)
- [타이포그래피 테마 스타 더스트](https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-stardust/)
- [타이포그래피 테마 세인트 앤스](https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-st-annes/)
- [타이포그래피 테마 스턴 그 로브](https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-stern-grove/)
- [타이포그래피-테마-스토우-레이크](https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-stow-lake/)
- [타이포그래피 테마 소개](https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-sutro/)
- [타이포그래피 테마 트윈 피크](https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-twin-peaks/)
- [타이포그래피 테마 미국 웹 디자인 표준](https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-us-web-design-standards/)
- [타이포그래피 테마 위키 백과](https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-wikipedia/)
- [타이포그래피 테마 워드 프레스 쿠 브릭](https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-wordpress-kubrick/)
- [타이포그래피 테마 워드 프레스 2010](https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-wordpress-2010/)
- [타이포그래피 테마 워드 프레스 2011](https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-wordpress-2011/)
- [타이포그래피 테마 워드 프레스 2012](https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-wordpress-2012/)
- [타이포그래피 테마 워드 프레스 2013](https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-wordpress-2013/)
- [타이포그래피 테마 워드 프레스 2014](https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-wordpress-2014/)
- [타이포그래피 테마 워드 프레스 2015](https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-wordpress-2015/)
- [타이포그래피 테마 워드 프레스 2016](https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-wordpress-2016/)
- [타이포그래피 테마 트라 잔](https://github.com/guoliim/typography-theme-trajan)
- [타이포그래피 테마 zacklive](https://github.com/ZacharyChim/typography-theme-zacklive)
- [타이포그래피 테마 익명](https://github.com/leimonio/typography-theme-anonymous)
- [typography-theme-domo-arigato-](https://github.com/aalaap/typography-theme-domo-arigato) Roboto 글꼴이있는 테마
- [타이포그래피 테마 오티스](https://github.com/devbewill/typography-theme-otis)
- [typography-theme-quora-](https://github.com/mbao01/typography-theme-quora) Quora 기반 테마
- 직접 게시하는 경우 PR을 만들어 여기에 추가하세요!

## 플러그인

플러그인은 핵심 타이포그래피 엔진을 확장하거나 수정하는 기능입니다. 헤더 스타일을 변경하거나 코드 또는 테이블과 같은 특수 스타일을 추가 할 수 있습니다. 현재 사용 가능한 하나의 플러그인 인 `typography-plugin-code`.

코드 플러그인을 사용하려면 먼저 NPM을 사용하여 설치하십시오.

```
npm install --save typography-plugin-code
```

그런 다음 새 타이포그래피 개체를 만들기 전에 테마에 추가하십시오.

```
수입  타이포그래피  에서  '타이포그래피' 
수입  CodePlugin  에서  '타이포그래피 - 플러그인 코드' 
수입  sternGroveTheme  에서  '타이포그래피 - 테마 - 선미 - 숲'

sternGroveTheme . 플러그인  =  [ 
  새  CodePlugin ( ) , 
]

const  typography  =  new  Typography ( sternGroveTheme )
```

## React.js 도우미 구성 요소.

Typography.js에는 React.js 프로젝트를위한 두 개의 도우미 구성 요소 `TypographyStyle`와 `GoogleFont`. 이들은 서버 렌더링에 이상적입니다.

- `TypographyStyle` 스타일 요소를 만들고 테마에 대해 생성 된 CSS를 삽입합니다.
- `GoogleFont` 테마에 지정된 Google 글꼴 및 가중치를 포함하는 링크 요소를 만듭니다.

사용하려면 먼저 패키지 `npm install --save react-typography` 를 설치 한 다음 `html.js`파일 로 가져옵니다 .

```
import  {  TypographyStyle ,  GoogleFont  }  from  'react-typography' 
// 가장 좋은 방법은 
테마를 정의하는 // 
타이포그래피 모듈 을 사용하는 것입니다. '유틸리티 / 타이포그래피' 에서 타이포그래피 가져 오기   

// React.js HTML 구성 요소 내부.
< html > 
  < head > 
    < TypographyStyle  typography = { typography } / > 
    < GoogleFont  typography = { typography } / > 
  < / head > 
  < body >
    // 물건 
  < / body > 
< / html >
```

## 함께 사용 `create-react-app`

기본 create-react-app 템플릿을 사용하면 위의 React.js 솔루션이 작동 `typography.injectStyles()`하지 않고 솔루션이 Google Fonts를 활성화하지 않습니다. 해결 방법은 설치 `typography-inject-fonts`하고 실행하는 것입니다.

```
수입  타이포그래피  에서  '인쇄술' 
수입  funstonTheme  에서  '타이포그래피 - 테마 funston' 
수입  injectFonts  에서  '타이포그래피 - 분사 - 글꼴'

const  typography  =  new  Typography ( funstonTheme ) 
타이포그래피 . injectStyles ( ) 
injectFonts ( 타이포그래피 )
```

## API

### 구성

Typography의 새 인스턴스를 만들 때 *구성* 개체를 전달할 수 있습니다 . 모든 구성 키는 선택 사항입니다.

- **title** : 테마 제목입니다.
- **baseFontSize** : 기본 글꼴 크기 (픽셀 단위), 기본값은 `16px`.
- **baseLineHeight** : CSS 단위없는 숫자를 사용하는 기준선 높이, 기본값은 `1.45`.
- **scaleRatio** : 테마의 "크기 비율"입니다. 이 값은 `h1`글꼴 크기와 `baseFontSize`. 스케일 비율은 그래서 만약 `2` 과가 `baseFontSize`있다 `16px`다음 `h1`글꼴 크기입니다 `32px`.

```
{ 
  scaleRatio : 2 , 
}
```

- **googleFonts** :이 프로젝트에 대한 Google 글꼴을 지정하는 배열입니다.

```
googleFonts : [ 
  { 
    name : 'Montserrat' , 
    스타일 : [ 
      '700' , 
    ] , 
  } , 
  { 
    name : 'Merriweather' , 
    스타일 : [ 
      '400' , 
      '400i' , 
      '700' , 
      '700i' , 
    ] , 
  } , 
] ,
```

- **headerFontFamily** : 헤더에 대한 글꼴 패밀리 스택을 지정하는 문자열 배열 (예 : `['Helvetica', 'sans-serif']`. 기본값은 시스템 UI 글꼴 스택입니다.
- **bodyFontFamily** : 본문의 글꼴 패밀리 스택을 지정하는 문자열 배열, 기본값은 `['georgia', 'serif']`.
- **headerColor** : 헤더에 설정할 CSS 색상 문자열입니다. 기본값은 `inherit`.
- **bodyColor** : 본문 텍스트에 설정할 CSS 색상 문자열입니다. 기본값은 `hsl(0,0%,0%,0.8)`.
- **headerWeight** : 헤더의 글꼴 두께를 지정합니다. 기본값은 `bold`.
- **bodyWeight** : 본문 텍스트의 글꼴 두께를 지정합니다. 기본값은 `normal`.
- **boldWeight** : "bold"(b, strong, dt, th) 요소의 글꼴 두께를 지정합니다. 기본값은 `bold`.
- **blockMarginBottom** : 블록 요소의 기본 margin-bottom을 지정합니다. 기본값은 하나의 "리듬 단위"(즉, 기준선 높이의 높이)입니다.
- **includeNormalize** : normalize.css를 포함합니다. Normalize.css는 브라우저에서 기본 브라우저 CSS를 정규화하고 Typography.js의 훌륭한 기반 역할을하는 훌륭한 프로젝트입니다. 기본적으로 normalize.CSS를 포함하지만 프로젝트의 다른 곳에 이미 포함하고있는 경우 .CSS를 전달하여 여기에 포함을 비활성화 할 수 있습니다 `false`.
- **overrideStyles** : 자동 생성 스타일에 직접 추가하거나 재정의하기위한 명령형 API입니다. Vertical Rhythm 객체, 옵션 객체 및 알고리즘 적으로 생성 된 스타일과 함께 호출됩니다.

```
overrideStyles : ( {  adjustFontSizeTo ,  rhythm  } ,  options ,  styles )  =>  ( { 
  h1 : { 
    fontFamily : [ 'Montserrat' ,  'sans-serif' ] . join ( ',' ) , 
  } , 
  인용구 : { 
    ... adjustFontSizeTo ( '19px' ) , 
    색상 : 회색 ( 41 ) , 
    fontStyle :'기울임' , 
    paddingLeft : 리듬 ( 13 / 16 ) , 
    marginLeft : 리듬 ( - 1 ) , 
    borderLeft : ' $ { 리듬 ( 3 / 16 ) } 고체 $ { 회색 ( 10 ) } ' , 
  } , 
  'BLOCKQUOTE> 마지막 -child ' : { 
    marginBottom : 0 , 
  } , 
} )
```

- **overrideThemeStyles** :이 기능은 동일한 기능 시그니처를 `overrideStyles`갖지만 `overrideStyles`타사 테마를 사용할 때 대신 사용하여 테마 자체 `overrideStyles`기능을 삭제하지 않도록해야 합니다.

```
overrideThemeStyles : ( {  리듬  } ,  옵션 ,  스타일 )  =>  ( { 
  'H2, H3' : { 
    marginBottom : 리듬 ( 1 / 2 ) , 
    marginTop : 리듬 ( 2 ) , 
  } 
} )
```

## 관련

- [postcss- 타이포그래피](https://github.com/BarryThePenguin/postcss-typography)

## Typography.js 개발

Typography.js는 [Lerna](https://github.com/lerna/lerna) 가 지원하는 단일 저장소 입니다.

TODO : 문서 상수 + 나침반-수직 리듬 + 인라인 스타일에 typgraphy.js 사용.

=======