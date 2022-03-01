# todolist-heroku-kata

#### 建立 package.json
- 使用 ```npm init```

#### 引入和建立模組
- http
- uuid
- CORS headers
- successHanle
- errHandle

#### 建立 Server、監聽 port
- Heroku 設置環境變數 ```server.listen(process.env.PORT || 3005);```

#### 建立資料
- 變數 todos：儲存 todo
- 變數 body：將檔案拆解成一個個 TCP 封包，分別儲存在參數 chunk

#### 判斷頁面網址和方法，開發 API，回傳 JSON
- GET
- DELETE
- POST
- PATCH
- OPTIONS
- 404 頁面

#### 使用 Git 記錄
- 使用 ```git init```，進行 commit

#### 透過 Heroku CLI 部署 Heroku
- 檢查 npm start 所運行檔案、加入 Node.js 運行的版本號
- 全域安裝 Heroku CLI
- 登入 Heroku：``` heroku login ```
- 建立遠端主機：``` heroku create ```
- 檔案推上遠端：``` git push heroku { 主線名稱 } ```
- 開啟遠端主機：``` heroku open ```

#### 匯出 POSTMAN JSON 檔案，上傳至 GitHub
- 匯出
- GitHub 建立新專案後，上傳檔案





