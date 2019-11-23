var wms_layers = [];

        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });var format_Derrame20190802_1 = new ol.format.GeoJSON();
var features_Derrame20190802_1 = format_Derrame20190802_1.readFeatures(json_Derrame20190802_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Derrame20190802_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Derrame20190802_1.addFeatures(features_Derrame20190802_1);var lyr_Derrame20190802_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Derrame20190802_1, 
                style: style_Derrame20190802_1,
                title: '<img src="styles/legend/Derrame20190802_1.png" /> Derrame 2019-08-02'
            });var format_Derrame20190814_2 = new ol.format.GeoJSON();
var features_Derrame20190814_2 = format_Derrame20190814_2.readFeatures(json_Derrame20190814_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Derrame20190814_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Derrame20190814_2.addFeatures(features_Derrame20190814_2);var lyr_Derrame20190814_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Derrame20190814_2, 
                style: style_Derrame20190814_2,
                title: '<img src="styles/legend/Derrame20190814_2.png" /> Derrame 2019-08-14'
            });var format_Derrame20190831_3 = new ol.format.GeoJSON();
var features_Derrame20190831_3 = format_Derrame20190831_3.readFeatures(json_Derrame20190831_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Derrame20190831_3 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Derrame20190831_3.addFeatures(features_Derrame20190831_3);var lyr_Derrame20190831_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Derrame20190831_3, 
                style: style_Derrame20190831_3,
                title: '<img src="styles/legend/Derrame20190831_3.png" /> Derrame 2019-08-31'
            });var format_Derrame20190807_4 = new ol.format.GeoJSON();
var features_Derrame20190807_4 = format_Derrame20190807_4.readFeatures(json_Derrame20190807_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Derrame20190807_4 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Derrame20190807_4.addFeatures(features_Derrame20190807_4);var lyr_Derrame20190807_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Derrame20190807_4, 
                style: style_Derrame20190807_4,
                title: '<img src="styles/legend/Derrame20190807_4.png" /> Derrame 2019-08-07'
            });var format_Derrame20190803_5 = new ol.format.GeoJSON();
var features_Derrame20190803_5 = format_Derrame20190803_5.readFeatures(json_Derrame20190803_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Derrame20190803_5 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Derrame20190803_5.addFeatures(features_Derrame20190803_5);var lyr_Derrame20190803_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Derrame20190803_5, 
                style: style_Derrame20190803_5,
                title: '<img src="styles/legend/Derrame20190803_5.png" /> Derrame 2019-08-03'
            });var format_Derrame20190810_6 = new ol.format.GeoJSON();
var features_Derrame20190810_6 = format_Derrame20190810_6.readFeatures(json_Derrame20190810_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Derrame20190810_6 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Derrame20190810_6.addFeatures(features_Derrame20190810_6);var lyr_Derrame20190810_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Derrame20190810_6, 
                style: style_Derrame20190810_6,
                title: '<img src="styles/legend/Derrame20190810_6.png" /> Derrame 2019-08-10'
            });var format_Derrame20190801_7 = new ol.format.GeoJSON();
var features_Derrame20190801_7 = format_Derrame20190801_7.readFeatures(json_Derrame20190801_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Derrame20190801_7 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Derrame20190801_7.addFeatures(features_Derrame20190801_7);var lyr_Derrame20190801_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Derrame20190801_7, 
                style: style_Derrame20190801_7,
                title: '<img src="styles/legend/Derrame20190801_7.png" /> Derrame 2019-08-01'
            });var format_Derrame20190712_8 = new ol.format.GeoJSON();
var features_Derrame20190712_8 = format_Derrame20190712_8.readFeatures(json_Derrame20190712_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Derrame20190712_8 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Derrame20190712_8.addFeatures(features_Derrame20190712_8);var lyr_Derrame20190712_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Derrame20190712_8, 
                style: style_Derrame20190712_8,
                title: '<img src="styles/legend/Derrame20190712_8.png" /> Derrame 2019-07-12'
            });var format_Derrame20190727_9 = new ol.format.GeoJSON();
var features_Derrame20190727_9 = format_Derrame20190727_9.readFeatures(json_Derrame20190727_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Derrame20190727_9 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Derrame20190727_9.addFeatures(features_Derrame20190727_9);var lyr_Derrame20190727_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Derrame20190727_9, 
                style: style_Derrame20190727_9,
                title: '<img src="styles/legend/Derrame20190727_9.png" /> Derrame 2019-07-27'
            });var format_Derrame20190724_10 = new ol.format.GeoJSON();
var features_Derrame20190724_10 = format_Derrame20190724_10.readFeatures(json_Derrame20190724_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Derrame20190724_10 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Derrame20190724_10.addFeatures(features_Derrame20190724_10);var lyr_Derrame20190724_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Derrame20190724_10, 
                style: style_Derrame20190724_10,
                title: '<img src="styles/legend/Derrame20190724_10.png" /> Derrame 2019-07-24'
            });var format_Derrame20190730_11 = new ol.format.GeoJSON();
var features_Derrame20190730_11 = format_Derrame20190730_11.readFeatures(json_Derrame20190730_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Derrame20190730_11 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Derrame20190730_11.addFeatures(features_Derrame20190730_11);var lyr_Derrame20190730_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Derrame20190730_11, 
                style: style_Derrame20190730_11,
                title: '<img src="styles/legend/Derrame20190730_11.png" /> Derrame 2019-07-30'
            });var format_Derrame20190715_12 = new ol.format.GeoJSON();
var features_Derrame20190715_12 = format_Derrame20190715_12.readFeatures(json_Derrame20190715_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Derrame20190715_12 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Derrame20190715_12.addFeatures(features_Derrame20190715_12);var lyr_Derrame20190715_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Derrame20190715_12, 
                style: style_Derrame20190715_12,
                title: '<img src="styles/legend/Derrame20190715_12.png" /> Derrame 2019-07-15'
            });var format_Derrame20190721_13 = new ol.format.GeoJSON();
var features_Derrame20190721_13 = format_Derrame20190721_13.readFeatures(json_Derrame20190721_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Derrame20190721_13 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Derrame20190721_13.addFeatures(features_Derrame20190721_13);var lyr_Derrame20190721_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Derrame20190721_13, 
                style: style_Derrame20190721_13,
                title: '<img src="styles/legend/Derrame20190721_13.png" /> Derrame 2019-07-21'
            });var format_Derrame20190522_14 = new ol.format.GeoJSON();
var features_Derrame20190522_14 = format_Derrame20190522_14.readFeatures(json_Derrame20190522_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Derrame20190522_14 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Derrame20190522_14.addFeatures(features_Derrame20190522_14);var lyr_Derrame20190522_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Derrame20190522_14, 
                style: style_Derrame20190522_14,
                title: '<img src="styles/legend/Derrame20190522_14.png" /> Derrame 2019-05-22'
            });var format_Derrame20190525_15 = new ol.format.GeoJSON();
var features_Derrame20190525_15 = format_Derrame20190525_15.readFeatures(json_Derrame20190525_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Derrame20190525_15 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Derrame20190525_15.addFeatures(features_Derrame20190525_15);var lyr_Derrame20190525_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Derrame20190525_15, 
                style: style_Derrame20190525_15,
                title: '<img src="styles/legend/Derrame20190525_15.png" /> Derrame 2019-05-25'
            });var format_Derrame20190510_16 = new ol.format.GeoJSON();
var features_Derrame20190510_16 = format_Derrame20190510_16.readFeatures(json_Derrame20190510_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Derrame20190510_16 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Derrame20190510_16.addFeatures(features_Derrame20190510_16);var lyr_Derrame20190510_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Derrame20190510_16, 
                style: style_Derrame20190510_16,
                title: '<img src="styles/legend/Derrame20190510_16.png" /> Derrame 2019-05-10 '
            });var format_Derrame20190509_17 = new ol.format.GeoJSON();
var features_Derrame20190509_17 = format_Derrame20190509_17.readFeatures(json_Derrame20190509_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Derrame20190509_17 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Derrame20190509_17.addFeatures(features_Derrame20190509_17);var lyr_Derrame20190509_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Derrame20190509_17, 
                style: style_Derrame20190509_17,
                title: '<img src="styles/legend/Derrame20190509_17.png" /> Derrame 2019-05-09'
            });var format_Derrame20190513_18 = new ol.format.GeoJSON();
var features_Derrame20190513_18 = format_Derrame20190513_18.readFeatures(json_Derrame20190513_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Derrame20190513_18 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Derrame20190513_18.addFeatures(features_Derrame20190513_18);var lyr_Derrame20190513_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Derrame20190513_18, 
                style: style_Derrame20190513_18,
                title: '<img src="styles/legend/Derrame20190513_18.png" /> Derrame 2019-05-13'
            });var format_Derrame20190505_19 = new ol.format.GeoJSON();
var features_Derrame20190505_19 = format_Derrame20190505_19.readFeatures(json_Derrame20190505_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Derrame20190505_19 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Derrame20190505_19.addFeatures(features_Derrame20190505_19);var lyr_Derrame20190505_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Derrame20190505_19, 
                style: style_Derrame20190505_19,
                title: '<img src="styles/legend/Derrame20190505_19.png" /> Derrame 2019-05-05'
            });var format_Derrame20190504_20 = new ol.format.GeoJSON();
var features_Derrame20190504_20 = format_Derrame20190504_20.readFeatures(json_Derrame20190504_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Derrame20190504_20 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Derrame20190504_20.addFeatures(features_Derrame20190504_20);var lyr_Derrame20190504_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Derrame20190504_20, 
                style: style_Derrame20190504_20,
                title: '<img src="styles/legend/Derrame20190504_20.png" /> Derrame 2019-05-04'
            });var format_Derrame20190601_21 = new ol.format.GeoJSON();
var features_Derrame20190601_21 = format_Derrame20190601_21.readFeatures(json_Derrame20190601_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Derrame20190601_21 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Derrame20190601_21.addFeatures(features_Derrame20190601_21);var lyr_Derrame20190601_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Derrame20190601_21, 
                style: style_Derrame20190601_21,
                title: '<img src="styles/legend/Derrame20190601_21.png" /> Derrame 2019-06-01'
            });var format_PuntosenelGolfo_22 = new ol.format.GeoJSON();
var features_PuntosenelGolfo_22 = format_PuntosenelGolfo_22.readFeatures(json_PuntosenelGolfo_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PuntosenelGolfo_22 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_PuntosenelGolfo_22.addFeatures(features_PuntosenelGolfo_22);var lyr_PuntosenelGolfo_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PuntosenelGolfo_22, 
                style: style_PuntosenelGolfo_22,
                title: '<img src="styles/legend/PuntosenelGolfo_22.png" /> Puntos en el Golfo'
            });var format_TomasClandestinas_23 = new ol.format.GeoJSON();
var features_TomasClandestinas_23 = format_TomasClandestinas_23.readFeatures(json_TomasClandestinas_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TomasClandestinas_23 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_TomasClandestinas_23.addFeatures(features_TomasClandestinas_23);var lyr_TomasClandestinas_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TomasClandestinas_23, 
                style: style_TomasClandestinas_23,
                title: '<img src="styles/legend/TomasClandestinas_23.png" /> Tomas Clandestinas'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Derrame20190802_1.setVisible(true);lyr_Derrame20190814_2.setVisible(true);lyr_Derrame20190831_3.setVisible(true);lyr_Derrame20190807_4.setVisible(true);lyr_Derrame20190803_5.setVisible(true);lyr_Derrame20190810_6.setVisible(true);lyr_Derrame20190801_7.setVisible(true);lyr_Derrame20190712_8.setVisible(true);lyr_Derrame20190727_9.setVisible(true);lyr_Derrame20190724_10.setVisible(true);lyr_Derrame20190730_11.setVisible(true);lyr_Derrame20190715_12.setVisible(true);lyr_Derrame20190721_13.setVisible(true);lyr_Derrame20190522_14.setVisible(true);lyr_Derrame20190525_15.setVisible(true);lyr_Derrame20190510_16.setVisible(true);lyr_Derrame20190509_17.setVisible(true);lyr_Derrame20190513_18.setVisible(true);lyr_Derrame20190505_19.setVisible(true);lyr_Derrame20190504_20.setVisible(true);lyr_Derrame20190601_21.setVisible(true);lyr_PuntosenelGolfo_22.setVisible(true);lyr_TomasClandestinas_23.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Derrame20190802_1,lyr_Derrame20190814_2,lyr_Derrame20190831_3,lyr_Derrame20190807_4,lyr_Derrame20190803_5,lyr_Derrame20190810_6,lyr_Derrame20190801_7,lyr_Derrame20190712_8,lyr_Derrame20190727_9,lyr_Derrame20190724_10,lyr_Derrame20190730_11,lyr_Derrame20190715_12,lyr_Derrame20190721_13,lyr_Derrame20190522_14,lyr_Derrame20190525_15,lyr_Derrame20190510_16,lyr_Derrame20190509_17,lyr_Derrame20190513_18,lyr_Derrame20190505_19,lyr_Derrame20190504_20,lyr_Derrame20190601_21,lyr_PuntosenelGolfo_22,lyr_TomasClandestinas_23];
lyr_Derrame20190802_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Derrame20190814_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Derrame20190831_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Derrame20190807_4.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Derrame20190803_5.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Derrame20190810_6.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Derrame20190801_7.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Derrame20190712_8.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Derrame20190727_9.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Derrame20190724_10.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Derrame20190730_11.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Derrame20190715_12.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Derrame20190721_13.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Derrame20190522_14.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Derrame20190525_15.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Derrame20190510_16.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Derrame20190509_17.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Derrame20190513_18.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Derrame20190505_19.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Derrame20190504_20.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Derrame20190601_21.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_PuntosenelGolfo_22.set('fieldAliases', {'fid': 'fid', 'Name': 'Nombre', 'description': 'Descripción', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'layer': 'layer', 'path': 'path', });
lyr_TomasClandestinas_23.set('fieldAliases', {'Name': 'Nombre', 'description': 'Descripción', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Derrame20190802_1.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Derrame20190814_2.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Derrame20190831_3.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Derrame20190807_4.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Derrame20190803_5.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Derrame20190810_6.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Derrame20190801_7.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Derrame20190712_8.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Derrame20190727_9.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Derrame20190724_10.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Derrame20190730_11.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Derrame20190715_12.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Derrame20190721_13.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Derrame20190522_14.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Derrame20190525_15.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Derrame20190510_16.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Derrame20190509_17.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Derrame20190513_18.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Derrame20190505_19.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Derrame20190504_20.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Derrame20190601_21.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_PuntosenelGolfo_22.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_TomasClandestinas_23.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Derrame20190802_1.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Derrame20190814_2.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Derrame20190831_3.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Derrame20190807_4.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Derrame20190803_5.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Derrame20190810_6.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Derrame20190801_7.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Derrame20190712_8.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Derrame20190727_9.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Derrame20190724_10.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Derrame20190730_11.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Derrame20190715_12.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Derrame20190721_13.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Derrame20190522_14.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Derrame20190525_15.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Derrame20190510_16.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Derrame20190509_17.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Derrame20190513_18.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Derrame20190505_19.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Derrame20190504_20.set('fieldLabels', {'Name': 'inline label', 'description': 'inline label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Derrame20190601_21.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_PuntosenelGolfo_22.set('fieldLabels', {'fid': 'inline label', 'Name': 'inline label', 'description': 'header label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'header label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_TomasClandestinas_23.set('fieldLabels', {'Name': 'header label', 'description': 'header label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_TomasClandestinas_23.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});