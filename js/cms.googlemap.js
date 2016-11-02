jQuery(function($) {
    google.maps.event.addDomListener(window, 'load', function () {
        "use strict";
        var map_datas = ( mapData && mapData != '')? mapData : '';
        var map = [];
        /******* GENERATE MAP LOADING ******/
        for( var frame_id in map_datas ){
            /* Define */
            var $this = this;
            $this.curMapData = map_datas[frame_id];

            $this.curFrameId = frame_id;
            var map_type;
            /* map type */
            switch ($this.curMapData['data-type']) {
                case 'HYBRID':
                    map_type = google.maps.MapTypeId.HYBRID;
                    break;
                case 'SATELLITE':
                    map_type = google.maps.MapTypeId.SATELLITE;
                    break;
                case 'TERRAIN':
                    map_type = google.maps.MapTypeId.TERRAIN;
                    break;
                default:
                    map_type = google.maps.MapTypeId.ROADMAP;
                    break;
            }
            /* get controls */
            var controls = $this.curMapData['data-controls'];
            /* get style */
            var style = $this.curMapData['data-template'];


            var mapOptions = {
                zoom : parseInt($this.curMapData['data-zoom']),
                center : new google.maps.LatLng(40.7143528,
                    -74.0059731),
                mapTypeId : map_type,
                scrollwheel : controls.scrollwheel,
                panControl : controls.pancontrol,
                zoomControl : controls.zoomcontrol,
                scaleControl : controls.scalecontrol,
                mapTypeControl : controls.maptypecontrol,
                streetViewControl : controls.streetviewcontrol,
                overviewMapControl : controls.overviewmapcontrol,
                styles : style
            };

            map[$this.curFrameId] = new google.maps.Map(
                document.getElementById( 'map-render-' + $this.curFrameId ),
                mapOptions);
            /* map center */
            if ($this.curMapData['data-coordinate'].length > 0) {
                var coordinate = $this.curMapData['data-coordinate']
                    .split(',');
                if (coordinate.length == 2) {
                    map[$this.curFrameId].setCenter(new google.maps.LatLng(
                        coordinate[0], coordinate[1]));
                }
            } else {
                if ($this.curMapData['data-address'].length > 0) {
                    $
                        .getJSON(
                        'http://maps.google.com/maps/api/geocode/json?address='
                        + $this.curMapData['data-address']
                        + '',
                        function(data) {
                            var lat = data.results[0].geometry.location.lat;
                            var lng = data.results[0].geometry.location.lng;
                            map[$this.curFrameId].setCenter(
                                new google.maps.LatLng(lat, lng)
                            );
                        });
                }
            }
            /* marker */
            var locations = $this.curMapData['data-marker'];

            if (locations.markerlist != undefined) {
                if (Array.isArray(locations.markerlist)) {
                    for (var i = 0; i < locations.markerlist.length; i++) {
                        locations.markerdesc = '<div class="info-content"><h5>'
                        + locations.markerlist[i].title
                        + '</h5><span>'
                        + locations.markerlist[i].desc
                        + '</span></div>';
                        locations.markercoordinate = locations.markerlist[i].coordinate;
                        locations.markericon = locations.markerlist[i].icon;
                        markerRender(map[$this.curFrameId], locations);
                    }
                }
            }

            if (locations.markercoordinate != undefined) {
                markerRender(map[$this.curFrameId], locations);
            }

        }
        /* */
        function markerRender(map, locations) {
            "use strict";
            var location = locations.markercoordinate
                .split(',');
            if (location.length == 2) {
                var myLatLng = new google.maps.LatLng(
                    location[0], location[1]);

                var mk = {
                    position : myLatLng,
                    map : map
                };

                if (locations.markericon != false) {
                    mk.icon = locations.markericon;
                }

                var marker = new google.maps.Marker(mk);
                marker.setMap(map);
                if (locations.markerdesc != undefined) {
                    var infowindow = new google.maps.InfoWindow({
                            content : locations.markerdesc,
                            maxWidth : controls.infowidth
                        });
                    if (controls.infoclick) {
                        google.maps.event.addListener(marker,
                            'click', function() {
                                infowindow
                                    .open(map, marker);
                            });
                    } else {
                        infowindow.open(map, marker);
                    }
                }
            }
        }
    });
});