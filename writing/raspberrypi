
# COnnect WIFi


Raspbian SD 카드를 컴퓨터에 넣기
부팅 디렉터리로 이동
wpa_supplicant.conf 파일 추가
SD 카드를 Raspberry Pi에 넣고 부팅하고 연결합니다.
문제 해결



/boot/wpa_supplicant.conf

```shell
country=US # Your 2-digit country code
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
network={
    ssid="YOUR_NETWORK_NAME"
    psk="YOUR_PASSWORD"
    key_mgmt=WPA-PSK
}
```


```shell
country=US # Your 2-digit country code
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev 
network={
    ssid="YOUR_NETWORK_NAME"
    key_mgmt=NONE
}
```



# SSH

다음 단계로 이동 :
마이크로 SD 카드를 컴퓨터에 넣기
부팅 디렉터리로 이동
ssh라는 빈 파일 만들기
Pi에 SD 카드를 삽입하고 전원을 켭니다.


reference: 
- https://howchoo.com/g/ote0ywmzywj/how-to-enable-ssh-on-raspbian-without-a-screen 
- https://howchoo.com/g/ndy1zte2yjn/how-to-set-up-wifi-on-your-raspberry-pi-without-ethernet


# Raspberry Pi 주소 확인하기

## 공유기 관리자 페이지 접속

#### 1. 관리자 페이지 주소 확인

cmd 창에 `ipconfig`입력하여 관리자 페이지 주소를 확인한다.

```shell
C:\WINDOWS\system32>ipconfig

Windows IP 구성

...생략

무선 LAN 어댑터 Wi-Fi 2:
   ...
   IPv4 주소 . . . . . . . . . : 192.168.10.2
   서브넷 마스크 . . . . . . . : 255.255.255.0
   기본 게이트웨이 . . . . . . : 192.168.10.1
```

예시 마지막 줄의 `기본 게이트웨이 . . . . . . : 192.168.10.1`의 `192.168.10.1`가 공유기 접속주소이다.


#### 2. 공유기 관리자 페이지 접속 

브라우저 주소창에 알아낸 주소를 입력한다.
공유기마다 관리자 페이지가 다르게되어있어 라즈베리파이 주소를 어느 창에서 확인할 수 있는지는 
확실하지 않지만 무선 설정이나 클라이언트 정보에서 찾을 수 있을 듯 싶다. 



iptime 은 이름도 뜨는데 이 공유기는 오래되서 그런지 ip 주소만 나온다. 다 쳐보고 접속되는 라즈베리파이를 찾으면 된다..