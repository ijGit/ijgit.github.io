---
title: "flex layout 정리"
date: 2020-12-05
tags: [web, CSS]
type: snippet
---



### navigation

```scss
// layout.scss
header{
  display: flex;
  nav{
    .logo, .theme-toggle, .search{
      flex: 0 0 auto; /* flex: none */ 
    }
    .theme-toggle{
      margin-left: auto;
    }
    .search{
      display: flex;
      input{
        flex: 1;  // input이 좌측으로 채워짐
      }
    }
  }
}
```

### footer


```scss
main{
  display: flex;

  footer{
    margin-top: auto
  }
}
```


### icon wrapper - 아이콘 중앙 정렬

```scss
.icon-wrapper{
  display: flex;
  .icon{
    margin: auto;
  }
}
```


### 2줄 이상 텍스트 수직 중앙 정렬

```scss
.text-box{
  display: flex;
  align-items: center;

}
```


### Holy Grail Layout

```scss
.flex-container{
  display: flex;
  flex-direction: column;
}

.flex-content{
  display: flex;
  justify-content: center;
}


```