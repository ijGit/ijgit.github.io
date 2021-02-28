---
title: "[devenv] Jupyter notebook 폰트, 스타일 변경"
date: 2020-01-26
type: tool
tags:
  - dev env
---



## Setting file


### command

> `.jupyter` 디렉토리가 이미 있다면 아래 명령어 실행은 생략해도 괜찮다.

아래 명령어를 실행하여 jupyter notebook 설정을 위한 파일을 생성할 수 있다.

```shell
jupyter notebook --generate-config

# C:\Users\username\.jupyter\jupyter_notebook_config.py 파일 생성
```

 

### create css file

- `.jupyter` 아래에 `custom` 디렉토리를 만들고 `custom.css` 파일을 생성한 뒤, jupyter notebook 설정을 할 수 있다.
- 테마를 설치할 수도 있지만, 폰트 적용, 너비 등이 조금 깨지는 경향이 있어 css 파일을 직접 수정하는게 가장 편한 듯 싶다. 





## customizing



##### overall font style

전체적인 폰트 스타일은 아래 코드로 지정할 수 있다. jupyter notebook 의 기본 font은 `Helvetica Neue", Helvetica, Arial, sans-serif`인데  아마도 `Arial`을 사용하는 것 같다.

> `Helvetica`를 다운받아볼까..

해당 폰트는 markdown 출력 폰트에도 영향을 끼치니 따로 수정하는게 귀찮다면 body 폰트를 한번에 수정하면 된다.

```css
body{
  font-family: 'AppleSDGothicNeo', 'nanumbarungothic', sans-serif;
} 
```





##### code style

jupyter notebook의 기본 폰트 스타일은 코딩용 폰트가 아니라 가독성이 떨어진다.

아래 코드로 code style을 변경할 수 있으며, 개인 취향에 따라 변경하면 된다.

```css
/* change cell index: in [n] */
div.prompt{
  font-family: 'D2Coding', Consolas;
  font-size: calc(12px + .3vh);
}

/*change code font*/
.CodeMirror {
  font-family: 'D2Coding', Consolas;
  font-size: calc(12px + .3vh);
  line-height: 140%;
}
```



##### output text font-style

출력 글자의 스타일을 지정한다.

```css
/* output text font style */
div.output_text pre{
  font-family: 'D2Coding', Consolas;
  font-size: calc(12px + .3vh);
  line-height: 140%;
}
```



##### markdown text style

markdown 으로 출력된 글자 스타일을 지정한다. 

코드의 경우 background 색상을 약간 어둡게 하였다.

```css
/* code block */

div.text_cell_render pre{
  margin: 1em 0;
}

div.text_cell_render code{
  width: 100%;
  margin: auto;
  display: block;
  font-family: 'D2Coding', Consolas;
  background-color: #f3f3f3e8;
  padding: 1em;
}
```



-----

추가로 변경하고 싶은 부분이 있을 때마다 추가하면 될 듯 하다