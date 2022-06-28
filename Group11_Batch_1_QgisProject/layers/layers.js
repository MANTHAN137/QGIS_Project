var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_India_State_Boundary_1 = new ol.format.GeoJSON();
var features_India_State_Boundary_1 = format_India_State_Boundary_1.readFeatures(json_India_State_Boundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_India_State_Boundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_India_State_Boundary_1.addFeatures(features_India_State_Boundary_1);
var lyr_India_State_Boundary_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_India_State_Boundary_1, 
                style: style_India_State_Boundary_1,
                interactive: true,
    title: 'India_State_Boundary<br />\
    <img src="styles/legend/India_State_Boundary_1_0.png" /> 0 - 0<br />\
    <img src="styles/legend/India_State_Boundary_1_1.png" /> 0 - 484<br />\
    <img src="styles/legend/India_State_Boundary_1_2.png" /> 484 - 739<br />\
    <img src="styles/legend/India_State_Boundary_1_3.png" /> 739 - 1078<br />\
    <img src="styles/legend/India_State_Boundary_1_4.png" /> 1078 - 1391<br />\
    <img src="styles/legend/India_State_Boundary_1_5.png" /> 1391 - 1897<br />\
    <img src="styles/legend/India_State_Boundary_1_6.png" /> 1897 - 2532<br />\
    <img src="styles/legend/India_State_Boundary_1_7.png" /> 2532 - 2782<br />\
    <img src="styles/legend/India_State_Boundary_1_8.png" /> 2782 - 3050<br />'
        });
var format_Dams_2 = new ol.format.GeoJSON();
var features_Dams_2 = format_Dams_2.readFeatures(json_Dams_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dams_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dams_2.addFeatures(features_Dams_2);cluster_Dams_2 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Dams_2
});
var lyr_Dams_2 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Dams_2, 
                style: style_Dams_2,
                interactive: true,
                title: '<img src="styles/legend/Dams_2.png" /> Dams'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_India_State_Boundary_1.setVisible(true);lyr_Dams_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_India_State_Boundary_1,lyr_Dams_2];
lyr_India_State_Boundary_1.set('fieldAliases', {'Name': 'Name', 'Type': 'Type', 'RainFall': 'RainFall', });
lyr_Dams_2.set('fieldAliases', {'Name': 'Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_India_State_Boundary_1.set('fieldImages', {'Name': 'TextEdit', 'Type': 'TextEdit', 'RainFall': 'TextEdit', });
lyr_Dams_2.set('fieldImages', {'Name': '', 'Latitude': '', 'Longitude': '', });
lyr_India_State_Boundary_1.set('fieldLabels', {'Name': 'header label', 'Type': 'inline label', 'RainFall': 'inline label', });
lyr_Dams_2.set('fieldLabels', {'Name': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_Dams_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});