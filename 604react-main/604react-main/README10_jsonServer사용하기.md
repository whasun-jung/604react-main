#  Json server 사용하기
--> 작은 서버를 만드는것 --> api소통할때 제일 많이 쓰이는 파일타입입니다. 
![image](https://github.com/understanding963852/604react/assets/60366769/31d19dec-82a4-4d1b-84fe-229b7e3ec794)

1️⃣
```
npm install -g json-server
```

2️⃣ 확장명이 .json인 파일을 만든다 -->반드시 Root에 만들어야한다.

json서버 실행  --> 기본적으로 3000번에서 시작하는데  react가 3000번을 사용하고 있기 때문에 다른 포트번호를 알려줘야한다. 
```
json-server --watch db.json --port 3004
```


# 혹시 안되면

```
npx json-server --watch db.json --port 3004
```

#  새창을 열고 주소창에

```
http://localhost:3004/products
```
# json파일의 내용이 보이게 된다.


![image](https://github.com/understanding963852/604react/assets/60366769/4057a594-f7ad-4034-874b-1fde72b04652)
