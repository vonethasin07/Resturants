function laos() {
    // Show the loading animation
    document.getElementById('loading').style.display = 'flex';
    
    // Simulate a delay (e.g., 1 second) to mimic loading time
    setTimeout(function() {
        document.getElementById('Res').innerHTML = 'ຮ້ານກີນດື່ມ';
        document.getElementById('lan').innerHTML = 'ລາວ <i class="fa fa-angle-down"></i>';
        document.getElementById('section1').innerHTML = 'ເຄື່ອງດື່ມ';
        document.getElementById('beerLaos').innerHTML = 'ເບຍລາວ ( ແກ້ວໃຫຍ່ )';
        document.getElementById('priceBeerLaos').innerHTML = '35,000 ກີບ';
        document.getElementById('heineken-big').innerHTML = 'ໄຮເນເກັນ ( ແກ້ວໃຫຍ່ )';
        document.getElementById('priceHeinekenBig').innerHTML = '35,000 ກີບ';
        document.getElementById('heineken-mal').innerHTML = 'ໄຮເນເກັນ ( ແກ້ວນ້ອຍ )';
        document.getElementById('priceHeinekenMal').innerHTML = '35,000 ກີບ';
        document.getElementById('pepsi').innerHTML = 'ເປບຊີ';
        document.getElementById('pricePepsi').innerHTML = '35,000 ກີບ';
        document.getElementById('ice').innerHTML = 'ນໍ້າກ້ອນ ( ນ້ອຍ )';
        document.getElementById('priceIce').innerHTML = '15,000 ກີບ';
        document.getElementById('Res').style.fontFamily = 'Phetsarath OT';
        document.getElementById('lan').style.fontFamily = 'Phetsarath OT';
        document.getElementById('priceBeerLaos').style.fontFamily = 'Phetsarath OT';
        document.getElementById('priceHeinekenBig').style.fontFamily = 'Phetsarath OT';
        document.getElementById('priceHeinekenMal').style.fontFamily = 'Phetsarath OT';
        document.getElementById('pricePepsi').style.fontFamily = 'Phetsarath OT';
        document.getElementById('priceIce').style.fontFamily = 'Phetsarath OT';
        
        // Hide the loading animation
        document.getElementById('loading').style.display = 'none';
    }, 500); // Adjust the delay as needed
}
