function getUserData() {
    let userData = JSON.parse(localStorage.getItem('user'));
     let balance = Number(userData.wallet);
      let walletBalance = document.querySelector('#wallet_balance');
    walletBalance.innerHTML = balance;
}
getUserData();
async function voucherData() {
try {
const url = `https://masai-vouchers-api.herokuapp.com/api/vouchers`;
let res = await fetch(url);
let data = await res.json();
append(data[0].vouchers);
    }

    catch (err) {
        console.log(err);
    }

}

voucherData();
let append = (data) => {
let container = document.querySelector('#voucher_list');
data.forEach((el) => {
let voucherDiv = document.createElement('div');
 voucherDiv.setAttribute('class', 'voucher');
let name = document.createElement('p');
name.innerText = el.name;
let image = document.createElement('img');
image.src = el.image;
image.style.width = '50%'
let price = document.createElement('p');
price.innerText = el.price;
let btn = document.createElement('button');
    btn.innerText = 'Buy';
    btn.setAttribute('class', 'buy_voucher');
 let purchasedData = {
            name,
            image,
            price,
        }
btn.onclick = () => {
  onBuy(purchasedData);
        }
 voucherDiv.append(name, image, price, btn);
 container.append(voucherDiv);

    })

}

let onBuy = (voucher) => {
    let wallet = document.getElementById('wallet_balance');

    if ((+wallet.innerText) >= (+voucher.price.innerText)) {
        alert("Hurray! purchase successful");
        wallet.innerText = (+wallet.innerText) - (+voucher.price.innerText);
   localStorage.setItem('purchase', JSON.stringify(voucher))
}
else {
        alert("Sorry! insufficient balance");
    }
}