function English() {
    // Show the loading animation
    document.getElementById('loading').style.display = 'flex';

    // Simulate a delay (e.g., 1 second) to mimic loading time
    setTimeout(function () {
        document.getElementById('Res').innerHTML = 'Snow Menu';
        document.getElementById('lan').innerHTML = 'EN <i class="fa fa-angle-down"></i>';
        document.getElementById('beerLaos').innerHTML = 'BeerLaos ( 660ml )';
        document.getElementById('priceBeerLaos').innerHTML = '35,000 KIP';
        document.getElementById('priceBeerLaos').style.fontFamily = 'Noto Sans';
        document.getElementById('heineken-big').innerHTML = 'Heineken ( 660ml )';
        document.getElementById('priceHeinekenBig').innerHTML = '35,000 KIP';
        document.getElementById('priceHeinekenBig').style.fontFamily = 'Noto Sans';
        document.getElementById('heineken-mal').innerHTML = 'Heineken ( 330ml )';
        document.getElementById('priceHeinekenMal').innerHTML = '35,000 KIP';
        document.getElementById('priceHeinekenMal').style.fontFamily = 'Noto Sans';
        document.getElementById('pepsi').innerHTML = 'PEPSI';
        document.getElementById('pricePepsi').innerHTML = '35,000 KIP';
        document.getElementById('pricePepsi').style.fontFamily = 'Noto Sans';
        document.getElementById('ice').innerHTML = 'Ice';
        document.getElementById('priceIce').innerHTML = '15,000 KIP';
        document.getElementById('priceIce').style.fontFamily = 'Noto Sans';
        document.getElementById('Res').style.fontFamily = 'Phetsarath OT';
        document.getElementById('section1').innerHTML = 'Drink';

        // Hide the loading animation
        document.getElementById('loading').style.display = 'none';
    }, 500); // Adjust the delay as needed
}
