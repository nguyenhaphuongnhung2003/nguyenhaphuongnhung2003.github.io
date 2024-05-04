var wms_layers = [];

var format_DongNuoc_BinhPhuoc_0 = new ol.format.GeoJSON();
var features_DongNuoc_BinhPhuoc_0 = format_DongNuoc_BinhPhuoc_0.readFeatures(json_DongNuoc_BinhPhuoc_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DongNuoc_BinhPhuoc_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DongNuoc_BinhPhuoc_0.addFeatures(features_DongNuoc_BinhPhuoc_0);
var lyr_DongNuoc_BinhPhuoc_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DongNuoc_BinhPhuoc_0, 
                style: style_DongNuoc_BinhPhuoc_0,
                popuplayertitle: "DongNuoc_BinhPhuoc",
                interactive: true,
                title: '<img src="styles/legend/DongNuoc_BinhPhuoc_0.png" /> DongNuoc_BinhPhuoc'
            });
var format_DuongRay_BinhPhuoc_1 = new ol.format.GeoJSON();
var features_DuongRay_BinhPhuoc_1 = format_DuongRay_BinhPhuoc_1.readFeatures(json_DuongRay_BinhPhuoc_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DuongRay_BinhPhuoc_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DuongRay_BinhPhuoc_1.addFeatures(features_DuongRay_BinhPhuoc_1);
var lyr_DuongRay_BinhPhuoc_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DuongRay_BinhPhuoc_1, 
                style: style_DuongRay_BinhPhuoc_1,
                popuplayertitle: "DuongRay_BinhPhuoc",
                interactive: true,
                title: '<img src="styles/legend/DuongRay_BinhPhuoc_1.png" /> DuongRay_BinhPhuoc'
            });
var format_GiaoThong_BinhPhuoc_2 = new ol.format.GeoJSON();
var features_GiaoThong_BinhPhuoc_2 = format_GiaoThong_BinhPhuoc_2.readFeatures(json_GiaoThong_BinhPhuoc_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GiaoThong_BinhPhuoc_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GiaoThong_BinhPhuoc_2.addFeatures(features_GiaoThong_BinhPhuoc_2);
var lyr_GiaoThong_BinhPhuoc_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GiaoThong_BinhPhuoc_2, 
                style: style_GiaoThong_BinhPhuoc_2,
                popuplayertitle: "GiaoThong_BinhPhuoc",
                interactive: true,
                title: '<img src="styles/legend/GiaoThong_BinhPhuoc_2.png" /> GiaoThong_BinhPhuoc'
            });
var format_Huyen_BinhPhuoc_3 = new ol.format.GeoJSON();
var features_Huyen_BinhPhuoc_3 = format_Huyen_BinhPhuoc_3.readFeatures(json_Huyen_BinhPhuoc_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Huyen_BinhPhuoc_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Huyen_BinhPhuoc_3.addFeatures(features_Huyen_BinhPhuoc_3);
var lyr_Huyen_BinhPhuoc_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Huyen_BinhPhuoc_3, 
                style: style_Huyen_BinhPhuoc_3,
                popuplayertitle: "Huyen_BinhPhuoc",
                interactive: true,
    title: 'Huyen_BinhPhuoc<br />\
    <img src="styles/legend/Huyen_BinhPhuoc_3_0.png" /> Bình Long<br />\
    <img src="styles/legend/Huyen_BinhPhuoc_3_1.png" /> Bù Đăng<br />\
    <img src="styles/legend/Huyen_BinhPhuoc_3_2.png" /> Bù Đốp<br />\
    <img src="styles/legend/Huyen_BinhPhuoc_3_3.png" /> Chơn Thành<br />\
    <img src="styles/legend/Huyen_BinhPhuoc_3_4.png" /> Đồng Phú<br />\
    <img src="styles/legend/Huyen_BinhPhuoc_3_5.png" /> Đồng Xoài<br />\
    <img src="styles/legend/Huyen_BinhPhuoc_3_6.png" /> Lộc Ninh<br />\
    <img src="styles/legend/Huyen_BinhPhuoc_3_7.png" /> Phước Long<br />\
    <img src="styles/legend/Huyen_BinhPhuoc_3_8.png" /> <br />'
        });
var format_Matdodanso_4 = new ol.format.GeoJSON();
var features_Matdodanso_4 = format_Matdodanso_4.readFeatures(json_Matdodanso_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Matdodanso_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Matdodanso_4.addFeatures(features_Matdodanso_4);
var lyr_Matdodanso_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Matdodanso_4, 
                style: style_Matdodanso_4,
                popuplayertitle: "Matdodanso",
                interactive: true,
                title: 'Matdodanso'
            });
var format_RG_BinhPhuoc_5 = new ol.format.GeoJSON();
var features_RG_BinhPhuoc_5 = format_RG_BinhPhuoc_5.readFeatures(json_RG_BinhPhuoc_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RG_BinhPhuoc_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RG_BinhPhuoc_5.addFeatures(features_RG_BinhPhuoc_5);
var lyr_RG_BinhPhuoc_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RG_BinhPhuoc_5, 
                style: style_RG_BinhPhuoc_5,
                popuplayertitle: "RG_BinhPhuoc",
                interactive: true,
                title: '<img src="styles/legend/RG_BinhPhuoc_5.png" /> RG_BinhPhuoc'
            });
var format_UBND_Huyen_6 = new ol.format.GeoJSON();
var features_UBND_Huyen_6 = format_UBND_Huyen_6.readFeatures(json_UBND_Huyen_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UBND_Huyen_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UBND_Huyen_6.addFeatures(features_UBND_Huyen_6);
var lyr_UBND_Huyen_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UBND_Huyen_6, 
                style: style_UBND_Huyen_6,
                popuplayertitle: "UBND_Huyen",
                interactive: true,
                title: '<img src="styles/legend/UBND_Huyen_6.png" /> UBND_Huyen'
            });

lyr_DongNuoc_BinhPhuoc_0.setVisible(true);lyr_DuongRay_BinhPhuoc_1.setVisible(true);lyr_GiaoThong_BinhPhuoc_2.setVisible(true);lyr_Huyen_BinhPhuoc_3.setVisible(true);lyr_Matdodanso_4.setVisible(true);lyr_RG_BinhPhuoc_5.setVisible(true);lyr_UBND_Huyen_6.setVisible(true);
var layersList = [lyr_DongNuoc_BinhPhuoc_0,lyr_DuongRay_BinhPhuoc_1,lyr_GiaoThong_BinhPhuoc_2,lyr_Huyen_BinhPhuoc_3,lyr_Matdodanso_4,lyr_RG_BinhPhuoc_5,lyr_UBND_Huyen_6];
lyr_DongNuoc_BinhPhuoc_0.set('fieldAliases', {'F_CODE_DES': 'F_CODE_DES', 'HYC_DESCRI': 'HYC_DESCRI', 'NAM': 'NAM', 'ISO': 'ISO', 'NAME_0': 'NAME_0', });
lyr_DuongRay_BinhPhuoc_1.set('fieldAliases', {'FID_rail_d': 'FID_rail_d', 'F_CODE_DES': 'F_CODE_DES', 'EXS_DESCRI': 'EXS_DESCRI', 'FCO_DESCRI': 'FCO_DESCRI', 'FID_countr': 'FID_countr', 'ISO': 'ISO', 'ISOCOUNTRY': 'ISOCOUNTRY', });
lyr_GiaoThong_BinhPhuoc_2.set('fieldAliases', {'MED_DESCRI': 'MED_DESCRI', 'RTT_DESCRI': 'RTT_DESCRI', 'F_CODE_DES': 'F_CODE_DES', 'ISO': 'ISO', 'ISOCOUNTRY': 'ISOCOUNTRY', 'TenDuong': 'TenDuong', });
lyr_Huyen_BinhPhuoc_3.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'ID_2': 'ID_2', 'NAME_2': 'NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'NL_NAME_2': 'NL_NAME_2', 'VARNAME_2': 'VARNAME_2', 'Danso': 'Danso', 'matdodan': 'matdodan', 'dientich': 'dientich', });
lyr_Matdodanso_4.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'ID_2': 'ID_2', 'NAME_2': 'NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'NL_NAME_2': 'NL_NAME_2', 'VARNAME_2': 'VARNAME_2', 'Danso': 'Danso', 'matdodan': 'matdodan', 'dientich': 'dientich', });
lyr_RG_BinhPhuoc_5.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'NL_NAME_1': 'NL_NAME_1', 'VARNAME_1': 'VARNAME_1', });
lyr_UBND_Huyen_6.set('fieldAliases', {'id': 'id', 'TenUBND': 'TenUBND', });
lyr_DongNuoc_BinhPhuoc_0.set('fieldImages', {'F_CODE_DES': '', 'HYC_DESCRI': '', 'NAM': '', 'ISO': '', 'NAME_0': '', });
lyr_DuongRay_BinhPhuoc_1.set('fieldImages', {'FID_rail_d': '', 'F_CODE_DES': '', 'EXS_DESCRI': '', 'FCO_DESCRI': '', 'FID_countr': '', 'ISO': '', 'ISOCOUNTRY': '', });
lyr_GiaoThong_BinhPhuoc_2.set('fieldImages', {'MED_DESCRI': '', 'RTT_DESCRI': '', 'F_CODE_DES': '', 'ISO': '', 'ISOCOUNTRY': '', 'TenDuong': '', });
lyr_Huyen_BinhPhuoc_3.set('fieldImages', {'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'ID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'Danso': 'TextEdit', 'matdodan': 'TextEdit', 'dientich': 'TextEdit', });
lyr_Matdodanso_4.set('fieldImages', {'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'ID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'Danso': 'TextEdit', 'matdodan': 'TextEdit', 'dientich': 'TextEdit', });
lyr_RG_BinhPhuoc_5.set('fieldImages', {'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', });
lyr_UBND_Huyen_6.set('fieldImages', {'id': 'TextEdit', 'TenUBND': 'TextEdit', });
lyr_DongNuoc_BinhPhuoc_0.set('fieldLabels', {'F_CODE_DES': 'no label', 'HYC_DESCRI': 'no label', 'NAM': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', });
lyr_DuongRay_BinhPhuoc_1.set('fieldLabels', {'FID_rail_d': 'no label', 'F_CODE_DES': 'no label', 'EXS_DESCRI': 'no label', 'FCO_DESCRI': 'no label', 'FID_countr': 'no label', 'ISO': 'no label', 'ISOCOUNTRY': 'no label', });
lyr_GiaoThong_BinhPhuoc_2.set('fieldLabels', {'MED_DESCRI': 'no label', 'RTT_DESCRI': 'no label', 'F_CODE_DES': 'no label', 'ISO': 'no label', 'ISOCOUNTRY': 'no label', 'TenDuong': 'no label', });
lyr_Huyen_BinhPhuoc_3.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'ID_2': 'no label', 'NAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'NL_NAME_2': 'no label', 'VARNAME_2': 'no label', 'Danso': 'no label', 'matdodan': 'no label', 'dientich': 'no label', });
lyr_Matdodanso_4.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'ID_2': 'no label', 'NAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'NL_NAME_2': 'no label', 'VARNAME_2': 'no label', 'Danso': 'no label', 'matdodan': 'no label', 'dientich': 'no label', });
lyr_RG_BinhPhuoc_5.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'NL_NAME_1': 'no label', 'VARNAME_1': 'no label', });
lyr_UBND_Huyen_6.set('fieldLabels', {'id': 'no label', 'TenUBND': 'no label', });
lyr_UBND_Huyen_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});