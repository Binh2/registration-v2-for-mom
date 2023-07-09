// const fs = require('fs');
import fs from 'fs'
export function initData() {
  const file = fs.readFileSync('../../cho vô đây nè chụt.txt')
  let [formUrl, productUrl, productId, startPrice, shippingPolicy, ebayUrl, memo, categoryId, specificReference] = file.toString().split('\t')
    
  formUrl = (formUrl.includes('Main: ') || formUrl == '') ? 'https://haru-www28452ue.work/new_haru/index.php' : 'https://haru-tk2-254-36869.work/new_haru/index.php'
  startPrice = startPrice.replace(',', '')
  let sellerId = new URL(productUrl).pathname.split('/').pop()
  let host = new URL(productUrl).hostname
  try {
    specificReference = new URL(specificReference).pathname.split('/itm/')[1]
  } catch {
    specificReference = ''
  }
  const storeNameDict = {
    'www.2ndstreet.jp': {'storeName': '2nd street', 'stockWord': 'カートに入れる'}, 
    'jp.mercari.com': {'storeName': 'Mercari', 'stockWord': 'item:item_title:button:purchase'},
    'netmall.hardoff.co.jp': {'storeName': 'OFF mall', 'stockWord': 'カートに入れる'},
    'paypayfleamarket.yahoo.co.jp': {'storeName': 'PayPay Fleamarket', 'stockWord': '>購入手続きへ<'},
    'paypaymall.yahoo.co.jp': {'storeName': 'PayPay mall', 'stockWord': 'カートに入れる</span>'},
    'item.fril.jp': {'storeName': 'Rakuma', 'stockWord': '購入に進む'},
    'item.rakuten.co.jp': {'storeName': 'Rakuten', 'stockWord': String.raw`soldout':\[0\]`},
    'product.rakuten.co.jp': {'storeName': 'Rakuten', 'stockWord': String.raw`soldout':\[0\]`},
    'page.auctions.yahoo.co.jp': {'storeName': 'Yahoo Auction', 'stockWord': '最高額入札者'},
    'store.shopping.yahoo.co.jp': {'storeName': 'Yahoo Shopping', 'stockWord': '>カートに入れる<'},
    'www.yodobashi.com': {'storeName': 'Yodobashi.com', 'stockWord': '<span class="green"'},
    'www.amazon.co.jp': {'storeName': '', 'stockWord': ''},
    'mercari-shops.com': {'storeName': 'Mercari-shops.com', 'stockWord': '>購入する<'}
  }
  let storeName = ''
  let stockWord = ''
  try {
    storeName = storeNameDict[host]['storeName']
    stockWord = storeNameDict[host]['stockWord']
  } catch (e) {
    console.log(e)
  }
  let config = {
    formUrl,
    productUrl,
    // customLabel,
    startPrice,
    shippingPolicy,
    ebayUrl,
    productId,
    sellerId,
    host,
    storeName,
    stockWord,
    memo,
    categoryId,
    specificReference,
  }
  console.log(config)
  return config
}
initData()