$(function () {
    $("#getdata").click(function () {
        console.log('Getting data . . .');
        $.get("https://shielded-spire-43023.herokuapp.com/api/products", function (data, status) { //,message)
            if (status == 'success') {
                //console.log(status);
                //console.log(message);
                document.getElementById("getdata").style.visibility="hidden";
                var products = data.data;
                //var tableHead = '<tr><td>ID</td><td>Name</td><td>Price</td></tr>';//new html th
                var tableHead = '<tr><th>ID</th><th>Name</th><th>Price</th></tr>';
                $("#datalist").append(tableHead);
                for (var index in products) {
                    var product = products[index];
                    var tableRow = '<tr><td>' + product.product_id + '</td><td>' + product.product_name + '</td><td>' + product.unit_price + '</td></tr>'
                    $("#datalist").append(tableRow);
                    //console.log(product);
                }
            } else
                console.log(status);
        });
    });
});
