
//Markers

var markers = [
    {
        "title": 'Code Institute',
        "lat": '53.298222680724514',
        "lng": '-6.178762161070416',
        "description": '<b>Code Institute</b> <br>Educational Institution<br><br> <b>Address:</b> Blackrock Business Park, 1 Block 1, Carysfort Ave, Blackrock, Co. Dublin <br> <b>Phone:</b> +35315397973'
    },
    {
        "title": 'NHL Stenden',
        "lat": '53.21123019095071',
        "lng": '5.797379697820648',
        "description": '<b>NHL Stenden University of Applied Sciences</b> <br>University<br><br> <b>Address:</b> Rengerslaan 8, 8917 DD Leeuwarden, Netherlands <br> <b>Phone:</b> +31582441441'
    },
    {
        "title": 'High School',
        "lat": '41.804587477521295',
        "lng": '13.222443497286879',
        "description": '<b>IPSSEOA "Michelangelo Buonarroti" </b> <br>High School<br><br> <b>Address:</b> Via Giuseppe Garibaldi, 1, 03014 Fiuggi FR, Italy <br> <b>Phone:</b> +390775515669'
    }
    ];

    //Labels of the markers

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    //Start Map + zoom + map type

    function initMap () {
        var mapOptions = {
            center: new google.maps.LatLng(50.42678061004576, 5.9738709394920715),
            zoom: 3,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
 
        //InfoWindow

        var infoWindow = new google.maps.InfoWindow();
 
        for (var i = 0; i < markers.length; i++) {
            var data = markers[i];
            var myLatlng = new google.maps.LatLng(data.lat, data.lng);
            var marker = new google.maps.Marker({
                position: myLatlng,
                map: map,
                label: labels[i % labels.length],
                title: data.title
            });
 
            //Click event

            (function (marker, data) {
                google.maps.event.addListener(marker, "click", function() {
                    infoWindow.setContent("<div style = 'width:200px;min-height:40px'>" + data.description + "</div>");
                    infoWindow.open(map, marker);
                });
            })(marker, data);
        }
    }