document.querySelector('#form').addEventListener('submit', submit)
function submit() {
    event.preventDefault();
let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let address = document.querySelector('#address').value;
    let amount = document.querySelector('#amount').value;
   let data = {};
    data.name = name;
    data.email = email;
    data.address = address;
    data.wallet = amount;
  localStorage.setItem('user', JSON.stringify(data));
   document.querySelector('#name').value = null;
    document.querySelector('#email').value = null;
    document.querySelector('#address').value = null;
    document.querySelector('#amount').value = null;
}