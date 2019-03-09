var pln = 1534.56;

function wallet(){

    // alert(btc); // undefined
    // alert(eth); // not defined

    if(pln > 0){
        var btc = pln / 40852.58;
        let eth = pln / 3250.47;

        var btc = 999; // redeklaracja jest możliwa
        let eth = 999; // redeklaracja nie jest możliwa


        document.write('BTC = ' + btc + '<br> ETH = '+ eth);

    } else document.write('Brak środków na zakup kryptowalut');



}

wallet();
// alert(btc);
