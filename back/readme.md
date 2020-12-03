## nginx설치
apt-get nginx
sudo nginx

* etc/nginx/enable-sites에 설정 작성
```
server {
    listen 80;
    server_name example.com; #nginx와 도메인 주소를 연결해 주는 역할을 합니다. 외부에서 example.com으로 들어오는 도메인 주소에서 
요청이 들어오면 로컬에서 오픈되어 있는 아래의 " proxy_pass http://127.0.0.1:3000/; " 를 포워딩해줍니다.

    location / {
      proxy_set_header X-Real-IP $remote_addr;
      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
      proxy_set_header Host $http_host;
      proxy_set_header X-NginX-Proxy true;

      proxy_pass http://127.0.0.1:3000/; # server_name example.com;로 들어온 요청을 nginx가 받아, 로컬에서 오픈되어 있는
"proxy_pass http://127.0.0.1:3000/;"를 포워딩해줍니다.
      proxy_redirect off;
    }

    gzip on;
    gzip_comp_level 2;
    gzip_proxied any;
    gzip_min_length  1000;
    gzip_disable     "MSIE [1-6]\."
    gzip_types text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript;
 }
 [출처] https://valuefactory.tistory.com/165
 ```

* 링크연결
```
cd /etc/nginx/sites-enabled/ 
ln -s /etc/nginx/sites-available/example example
```

# certbot
[참고]https://www.zerocho.com/category/NodeJS/post/5ef450a5701d8a001f84baeb
apt install certbot
apt install python-certbot-nginx
