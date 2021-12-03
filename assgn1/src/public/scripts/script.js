document.addEventListener('click', function(event){
    event.preventDefault();
    var element = event.target;
    if (element.matches("#add-product-btn")) {
        addProduk();
    }
}, false)

function addProduk() {
    var namaInput = document.getElementById("nama-input");
    var deskripsiInput = document.getElementById("deskripsi-input");
    var hargaInput = document.getElementById('harga-input')
    var data = {
        produk: {
            nama: namaInput.value,
            deskripsi: deskripsiInput.value,
            harga: hargaInput.value,
        }
    }
    console.log(data);
    httpPost('/api/products/add', data)
        .then(() => { });
}

function httpPost(path, data) {
    return fetch(path, getOptions('POST', data));
}

function getOptions(method, data) {
    var options = {
        dataType: 'json',
        method: method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=utf-8'
        }
    };
    if (data) {
        options.body = JSON.stringify(data);
    }
    return options;
}