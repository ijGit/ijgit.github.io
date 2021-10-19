---
title: "[devenv] ubuntu 커스텀 (theme)"
date: 2021-10-19
type: tool
tags:
  - dev env
---


# 1. Custom Theme (MACbuntu)

#### gnome-tweaks 설치

```bash
sudo apt install gnome-tweaks
sudo apt install gnome-tweak-tool
sudo apt install gnome-shell-extensions
```

#### 확장 프로그램- (dash-to-dock) 설치

- `gnome-shell --version` 명령어로 그놈 쉘 버전 확인
- [Dash-to-dock](https://extensions.gnome.org/extension/307/dash-to-dock/)
    - 쉘 버전에 맞는 파일 다운로드 (확장 버전은 높은 것으로)
        
        ```bash
        mkdir -p ~/.local/share/gnome-shell/extensions/
        unzip ~/Downloads/dash-to-dock@micxgx.gmail.com.zip -d ~/.local/share/gnome-shell/extensions/dash-to-dock@micxgx.gmail.com/
        ```
        
        - 설치 후에는 (alt+F2) 누른 뒤 reload 명령 입력: `r`
    - gnome-tweak (기능 개선) > 확장 > dash to dock 켜기
    - dash-to-dock 중복 오류 제거
        
        ```bash
        gnome-extensions disable ubuntu-dock@ubuntu.com
        ```
        

#### mac theme 설치

[WhiteSur Gtk Theme](https://www.gnome-look.org/p/1403328) 에서 ubuntu mac theme 를 다운받을 수 있다.

```jsx
git clone https://github.com/vinceliuice/WhiteSur-gtk-theme.git

# Install theme color
./install.sh -c light

# icon
./install.sh -i fedora

#Change Nautilus style
./install.sh -N mojave

#Install and customize Dash to Dock theme
./tweaks.sh -d -c light
```

#### icon-theme 

[WhiteSur-icon-theme](https://github.com/vinceliuice/WhiteSur-icon-theme) 에서는 Mac 스타일의 icon을 다운받을 수 있다.

```jsx
git clone https://github.com/vinceliuice/WhiteSur-icon-theme
cd WhiteSur-icon-theme
./install.sh
```

#### kde theme

[GitHub - vinceliuice/WhiteSur-kde: MacOS big sur theme for kde plasma](https://github.com/vinceliuice/WhiteSur-kde)

```jsx
git clone https://github.com/vinceliuice/WhiteSur-kde
cd WhiteSur-kde
./install.sh
```

#### background

[WhiteSur wallpapers](https://github.com/vinceliuice/WhiteSur-gtk-theme/tree/wallpapers/4k)에서 MacOS 기본 배경화면을 다운받을 수 있다. 

위에까지 다운/설치를 마무리했으면 기능개선 (gnome) 에서 테마를 선택하여 mac os style 의 ubuntu를 사용할 수 있다


# 2. Custom Terminal

- [zsh](https://zsh.sourceforge.io/), [oh-my-zsh](https://github.com/ohmyzsh/ohmyzsh)
- [power-level-10k](https://github.com/romkatv/powerlevel10k)
- [terminator](https://gnometerminator.blogspot.com/p/introduction.html)


## 2.1. zsh & oh-my-zsh 설치

#### zsh & oh-my-zsh 설치 

```jsx
# install zsh
sudo apt install zsh

# install oh-my-zsh
sh -c "$(wget -O- https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

#### 기본 shell 을 zsh 로 변경

```jsx
chsh -s (which zsh)
```

## 2.2. power level 10k 적용

#### power level 10k 테마 다운로드

```jsx
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/themes/powerlevel10k
```

[powerlevel10k # oh-my-zsh](https://github.com/romkatv/powerlevel10k#oh-my-zsh) 에서 아래 4개의 font 다운로드

- [MesloLGS NF Regular.ttf](https://github.com/romkatv/powerlevel10k-media/raw/master/MesloLGS%20NF%20Regular.ttf)
- [MesloLGS NF Bold.ttf](https://github.com/romkatv/powerlevel10k-media/raw/master/MesloLGS%20NF%20Bold.ttf)
- [MesloLGS NF Italic.ttf](https://github.com/romkatv/powerlevel10k-media/raw/master/MesloLGS%20NF%20Italic.ttf)
- [MesloLGS NF Bold Italic.ttf](https://github.com/romkatv/powerlevel10k-media/raw/master/MesloLGS%20NF%20Bold%20Italic.ttf)

아래 명령어를 입력하거나, `.ttf` 파일을 열고 [설치] 버튼을 눌러 설치를 할 수 있다.

```jsx
cd ~/Downloads/
sudo mkdir /usr/share/fonts/truetype/MesloLGS
sudo cp MesloLGS* /usr/share/fonts/truetype/MesloLGS/
```

#### theme 를 p10k 로 변경

`~/.zshrc` 파일을 열고 `ZSH_THEME` 값을 `"powerlevel10k/powerlevel10k"` 로 설정해준다

```jsx
vim ~/.zshrc
```

```jsx
# ~/.zshrc
ZSH_THEME="powerlevel10k/powerlevel10k"
```

터미널을 종료했다가 다시 키면 설정 화면이 나오며, 이후에도 `p10k configure` 명령어로 설정할 수 있다.

## 2.3. Terminator

terminator 은 그냥 터미널 프로그램이다. 분할 기능이 있어 편리하다.

명령어로 설치할 수 있고, 실행 뒤 우클릭하여 설정할 수 있다. 

```jsx
sudo apt-get install terminator
```
