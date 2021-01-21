
//Markers

var markers = [
    {
        "title": 'The George Hotel',
        "lat": '52.66234492672294',
        "lng": '-8.628624673982813',
        "description": '<b>The George Hotel</b> <br>4-stars hotel<br><br> <b>Address:</b> Shannon St, Limerick<br> <b>Phone:</b> +35361460400'
    },
    {
        "title": 'Dolce La Hulpe',
        "lat": '50.74546059189099',
        "lng": '4.455113141877488',
        "description": '<b>Dolce By Wyndham La Hulpe Brussels</b> <br>4-stars hotel<br><br> <b>Address:</b>Chaussée de Bruxelles 135, 1310 La Hulpe, Belgium<br> <b>Phone:</b> +3222909800'
    },
    {
        "title": 'NHL Stenden',
        "lat": '53.21123019095071',
        "lng": '5.797379697820648',
        "description": '<b>NHL Stenden University of Applied Sciences</b> <br>University<br><br> <b>Address:</b> Rengerslaan 8, 8917 DD Leeuwarden, Netherlands <br> <b>Phone:</b> +31582441441'
    }
    ];

//Labels of the markers

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    //Start Map + zoom + map type

    window.onload = function () {
        LoadMap();
    }
    function LoadMap() {
        var mapOptions = {
            center: new google.maps.LatLng(51.5240359482379, -0.13184722797831577),
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