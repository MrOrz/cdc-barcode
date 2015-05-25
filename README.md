# cdc-barcode
[非官方] 條碼版自然人憑證資料登打頁 （ http://moica.nat.gov.tw/rac_form.html ）的重製。

登打網頁：http://mrorz.github.io/cdc-barcode

## 開發

在 console 打：

```
npm start
```

會使用 webpack-dev-server 在 `0.0.0.0:5000` 開啓 web server，並且有 live reload 功能。

## 部署到 github pages

若您的 git remote origin 是 Github 且您有寫入權限，則在 console 打：

```
npm run deploy
```

會自動以您目前的 branch 做 build + push 到 gh-pages branch。
