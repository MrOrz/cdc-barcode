# cdc-barcode
條碼版自然人憑證申請資料表 （ http://moica.nat.gov.tw/rac_form.html ）是內政部憑證管理中心官網的一個工具，旨在利用條碼省去櫃檯人員打字的時間，加速自然人憑證的臨櫃申辦速度。實務上，戶政事務所通常會讓替代役男在電腦前替民眾登打資料，並且列印條碼給民眾。

民間版的自然人憑證資料條碼登打頁面相對於政府版，所有資料直接在瀏覽器內生成條碼，不假網路伺服器之手，速度快且個資沒有外漏之虞；另外，印出來的資料也包含 PIN 碼資訊，民眾將印出的資料攜回時，也不會把「PIN 碼」與「用戶代碼」搞混。

** 民間版條碼登打網頁：http://mrorz.github.io/cdc-barcode **

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
