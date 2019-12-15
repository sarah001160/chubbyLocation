var map;//使用googleMap api
function initMap() {//Google Map api
  map = new google.maps.Map(document.querySelector('.map'),{
    center: {lat:25.015286, lng:121.505052},//經緯度座標範圍
    zoom: 12//放大的比例,數字越大距離標點越近;數字越小離標點越遠(就會變成世界地圖)
  });

  var marker = new google.maps.Marker({//紅色標點
    position:{lat:25.015286, lng:121.505052},//經緯度座標
    map:map,
    title:'公園店'
  })
 
}





