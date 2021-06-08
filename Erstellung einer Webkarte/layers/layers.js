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
var format_Bibliotheken_Hamburg_1 = new ol.format.GeoJSON();
var features_Bibliotheken_Hamburg_1 = format_Bibliotheken_Hamburg_1.readFeatures(json_Bibliotheken_Hamburg_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bibliotheken_Hamburg_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bibliotheken_Hamburg_1.addFeatures(features_Bibliotheken_Hamburg_1);cluster_Bibliotheken_Hamburg_1 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Bibliotheken_Hamburg_1
});
var lyr_Bibliotheken_Hamburg_1 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Bibliotheken_Hamburg_1, 
                style: style_Bibliotheken_Hamburg_1,
                interactive: true,
                title: '<img src="styles/legend/Bibliotheken_Hamburg_1.png" /> Bibliotheken_Hamburg'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Bibliotheken_Hamburg_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Bibliotheken_Hamburg_1];
lyr_Bibliotheken_Hamburg_1.set('fieldAliases', {'bezeichnung': 'Name', 'adresse': 'Adresse', 'ort': 'Ort', 'telefon': 'Telefonnummer', 'link': 'Link', 'homepage': 'homepage', 'e_mail': 'e_mail', 'profil': 'profil', 'angebote': 'angebote', 'medienanzahl': 'medienanzahl', 'medienarten': 'medienarten', 'x_manual': 'x_manual', 'y_manual': 'y_manual', 'georef_manual_date': 'georef_manual_date', });
lyr_Bibliotheken_Hamburg_1.set('fieldImages', {'bezeichnung': 'TextEdit', 'adresse': 'TextEdit', 'ort': 'TextEdit', 'telefon': 'TextEdit', 'link': 'TextEdit', 'homepage': 'Hidden', 'e_mail': 'Hidden', 'profil': 'Hidden', 'angebote': 'Hidden', 'medienanzahl': 'Hidden', 'medienarten': 'Hidden', 'x_manual': 'Hidden', 'y_manual': 'Hidden', 'georef_manual_date': 'Hidden', });
lyr_Bibliotheken_Hamburg_1.set('fieldLabels', {'bezeichnung': 'inline label', 'adresse': 'inline label', 'ort': 'inline label', 'telefon': 'inline label', 'link': 'inline label', });
lyr_Bibliotheken_Hamburg_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});