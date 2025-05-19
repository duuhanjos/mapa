var wms_layers = [];

var lyr_Recortadoextenso_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Recortado (extensão)<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Recortadoextenso_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-5976162.580670, -3219235.916715, -5976108.325102, -3219171.800604]
        })
    });

lyr_Recortadoextenso_0.setVisible(true);
var layersList = [lyr_Recortadoextenso_0];
