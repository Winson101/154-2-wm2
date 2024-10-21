var wms_layers = [];


        var lyr_GoogleTerrainHybrid_0 = new ol.layer.Tile({
            'title': 'Google Terrain Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Boundary_2 = new ol.format.GeoJSON();
var features_Boundary_2 = format_Boundary_2.readFeatures(json_Boundary_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Boundary_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Boundary_2.addFeatures(features_Boundary_2);
var lyr_Boundary_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Boundary_2, 
                style: style_Boundary_2,
                popuplayertitle: "Boundary",
                interactive: true,
                title: '<img src="styles/legend/Boundary_2.png" /> Boundary'
            });
var format_Road_3 = new ol.format.GeoJSON();
var features_Road_3 = format_Road_3.readFeatures(json_Road_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Road_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Road_3.addFeatures(features_Road_3);
var lyr_Road_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Road_3, 
                style: style_Road_3,
                popuplayertitle: "Road",
                interactive: true,
                title: '<img src="styles/legend/Road_3.png" /> Road'
            });
var format_MainRoad_4 = new ol.format.GeoJSON();
var features_MainRoad_4 = format_MainRoad_4.readFeatures(json_MainRoad_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MainRoad_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MainRoad_4.addFeatures(features_MainRoad_4);
var lyr_MainRoad_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MainRoad_4, 
                style: style_MainRoad_4,
                popuplayertitle: "Main Road",
                interactive: true,
                title: '<img src="styles/legend/MainRoad_4.png" /> Main Road'
            });
var format_Female_5 = new ol.format.GeoJSON();
var features_Female_5 = format_Female_5.readFeatures(json_Female_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Female_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Female_5.addFeatures(features_Female_5);
var lyr_Female_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Female_5, 
                style: style_Female_5,
                popuplayertitle: "Female",
                interactive: true,
                title: '<img src="styles/legend/Female_5.png" /> Female'
            });
var format_Male_6 = new ol.format.GeoJSON();
var features_Male_6 = format_Male_6.readFeatures(json_Male_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Male_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Male_6.addFeatures(features_Male_6);
var lyr_Male_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Male_6, 
                style: style_Male_6,
                popuplayertitle: "Male",
                interactive: true,
                title: '<img src="styles/legend/Male_6.png" /> Male'
            });

lyr_GoogleTerrainHybrid_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_Boundary_2.setVisible(true);lyr_Road_3.setVisible(true);lyr_MainRoad_4.setVisible(true);lyr_Female_5.setVisible(true);lyr_Male_6.setVisible(true);
var layersList = [lyr_GoogleTerrainHybrid_0,lyr_GoogleSatellite_1,lyr_Boundary_2,lyr_Road_3,lyr_MainRoad_4,lyr_Female_5,lyr_Male_6];
lyr_Boundary_2.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'boundary': 'boundary', 'protect_class': 'protect_class', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'type': 'type', 'ref': 'ref', 'name:zh-Hant': 'name:zh-Hant', 'name:zh': 'name:zh', 'name:yue': 'name:yue', 'name:wuu': 'name:wuu', 'name:war': 'name:war', 'name:vi': 'name:vi', 'name:ur': 'name:ur', 'name:uk': 'name:uk', 'name:tr': 'name:tr', 'name:th-Latn': 'name:th-Latn', 'name:th': 'name:th', 'name:tg': 'name:tg', 'name:sv': 'name:sv', 'name:ru': 'name:ru', 'name:ro': 'name:ro', 'name:pt': 'name:pt', 'name:pnb': 'name:pnb', 'name:pl': 'name:pl', 'name:no': 'name:no', 'name:nn': 'name:nn', 'name:nl': 'name:nl', 'name:ne': 'name:ne', 'name:nan': 'name:nan', 'name:ms': 'name:ms', 'name:mg': 'name:mg', 'name:lo': 'name:lo', 'name:ko': 'name:ko', 'name:km': 'name:km', 'name:ja': 'name:ja', 'name:it': 'name:it', 'name:id': 'name:id', 'name:hi': 'name:hi', 'name:gl': 'name:gl', 'name:fr': 'name:fr', 'name:fi': 'name:fi', 'name:fa': 'name:fa', 'name:es': 'name:es', 'name:en': 'name:en', 'name:de': 'name:de', 'name:ckb': 'name:ckb', 'name:ceb': 'name:ceb', 'name:cdo': 'name:cdo', 'name:ca': 'name:ca', 'name:bpy': 'name:bpy', 'name:bg': 'name:bg', 'name:be': 'name:be', 'name:ar': 'name:ar', 'name:ace': 'name:ace', 'name': 'name', 'alt_name:pl': 'alt_name:pl', 'alt_name:fr': 'alt_name:fr', 'admin_level': 'admin_level', 'ISO3166-2': 'ISO3166-2', });
lyr_Road_3.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'osm_version': 'osm_version', 'osm_timestamp': 'osm_timestamp', 'osm_uid': 'osm_uid', 'osm_user': 'osm_user', 'osm_changeset': 'osm_changeset', 'hwpi': 'hwpi', 'opening_date': 'opening_date', 'horse': 'horse', 'foot': 'foot', 'bicycle': 'bicycle', 'waterway': 'waterway', 'wires': 'wires', 'operator:wikipedia': 'operator:wikipedia', 'operator:wikidata': 'operator:wikidata', 'operator:th': 'operator:th', 'operator:short': 'operator:short', 'operator:en': 'operator:en', 'cables': 'cables', 'motorcycle': 'motorcycle', 'tunnel': 'tunnel', 'level': 'level', 'covered': 'covered', 'frequency': 'frequency', 'construction': 'construction', 'train': 'train', 'description': 'description', 'turn:lanes:forward': 'turn:lanes:forward', 'lanes:backward': 'lanes:backward', 'voltage': 'voltage', 'substation': 'substation', 'power': 'power', 'import': 'import', 'maxweight:signed': 'maxweight:signed', 'website': 'website', 'operator': 'operator', 'dual_carriage': 'dual_carriage', 'turn:lanes': 'turn:lanes', 'tracks': 'tracks', 'barrier': 'barrier', 'access': 'access', 'source:ref': 'source:ref', 'bridge:name': 'bridge:name', 'destination:lanes': 'destination:lanes', 'shoulder': 'shoulder', 'destination:ref': 'destination:ref', 'destination:en': 'destination:en', 'destination': 'destination', 'lane_markings': 'lane_markings', 'maxheight': 'maxheight', 'name:etymology:wikidata': 'name:etymology:wikidata', 'old_ref': 'old_ref', 'junction': 'junction', 'passenger_lines': 'passenger_lines', 'name:lo': 'name:lo', 'layer': 'layer', 'bridge': 'bridge', 'maxspeed': 'maxspeed', 'embankment': 'embankment', 'surface': 'surface', 'smoothness': 'smoothness', 'int_ref': 'int_ref', 'service': 'service', 'railway:track_ref': 'railway:track_ref', 'usage': 'usage', 'railway:etcs': 'railway:etcs', 'railway': 'railway', 'gauge': 'gauge', 'electrified': 'electrified', 'width': 'width', 'ref': 'ref', 'oneway': 'oneway', 'name:th': 'name:th', 'name:en': 'name:en', 'name': 'name', 'lanes': 'lanes', 'highway': 'highway', });
lyr_MainRoad_4.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'osm_version': 'osm_version', 'osm_timestamp': 'osm_timestamp', 'osm_uid': 'osm_uid', 'osm_user': 'osm_user', 'osm_changeset': 'osm_changeset', 'to': 'to', 'operator': 'operator', 'network:wikidata': 'network:wikidata', 'network:th': 'network:th', 'network:en': 'network:en', 'name:th': 'name:th', 'name:ja': 'name:ja', 'from': 'from', 'name:zh': 'name:zh', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'url': 'url', 'type': 'type', 'route': 'route', 'ref': 'ref', 'network': 'network', 'name:ru': 'name:ru', 'name:en': 'name:en', 'name:de': 'name:de', 'name': 'name', 'description': 'description', });
lyr_Female_5.set('fieldAliases', {'timestamp': 'timestamp', 'service': 'service', 'reg_type': 'reg_type', 'prefix': 'prefix', 'sex': 'sex', 'work': 'work', 'income': 'income', 'education': 'education', 'year': 'year', 'village_no': 'village_no', 'village': 'village', 'road': 'road', 'alley': 'alley', 'district': 'district', 'amphoe': 'amphoe', 'province': 'province', 'zipcode': 'zipcode', 'congenital': 'congenital', 'congenit_1': 'congenit_1', 'disability': 'disability', 'disabili_1': 'disabili_1', 'environmen': 'environmen', 'treatment_': 'treatment_', 'treatmen_1': 'treatmen_1', 'requiremen': 'requiremen', 'requirem_1': 'requirem_1', 'date_start': 'date_start', 'date_end': 'date_end', 'occupation': 'occupation', 'relationsh': 'relationsh', 'ability': 'ability', 'vaccine': 'vaccine', 'num_vaccin': 'num_vaccin', 'lat': 'lat', 'long': 'long', 'status': 'status', });
lyr_Male_6.set('fieldAliases', {'timestamp': 'timestamp', 'service': 'service', 'reg_type': 'reg_type', 'prefix': 'prefix', 'sex': 'sex', 'work': 'work', 'income': 'income', 'education': 'education', 'year': 'year', 'village_no': 'village_no', 'village': 'village', 'road': 'road', 'alley': 'alley', 'district': 'district', 'amphoe': 'amphoe', 'province': 'province', 'zipcode': 'zipcode', 'congenital': 'congenital', 'congenit_1': 'congenit_1', 'disability': 'disability', 'disabili_1': 'disabili_1', 'environmen': 'environmen', 'treatment_': 'treatment_', 'treatmen_1': 'treatmen_1', 'requiremen': 'requiremen', 'requirem_1': 'requirem_1', 'date_start': 'date_start', 'date_end': 'date_end', 'occupation': 'occupation', 'relationsh': 'relationsh', 'ability': 'ability', 'vaccine': 'vaccine', 'num_vaccin': 'num_vaccin', 'vaccine_ty': 'vaccine_ty', 'lat': 'lat', 'long': 'long', 'status': 'status', });
lyr_Boundary_2.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'boundary': 'TextEdit', 'protect_class': 'TextEdit', 'wikipedia': 'TextEdit', 'wikidata': 'TextEdit', 'type': 'TextEdit', 'ref': 'TextEdit', 'name:zh-Hant': 'TextEdit', 'name:zh': 'TextEdit', 'name:yue': 'TextEdit', 'name:wuu': 'TextEdit', 'name:war': 'TextEdit', 'name:vi': 'TextEdit', 'name:ur': 'TextEdit', 'name:uk': 'TextEdit', 'name:tr': 'TextEdit', 'name:th-Latn': 'TextEdit', 'name:th': 'TextEdit', 'name:tg': 'TextEdit', 'name:sv': 'TextEdit', 'name:ru': 'TextEdit', 'name:ro': 'TextEdit', 'name:pt': 'TextEdit', 'name:pnb': 'TextEdit', 'name:pl': 'TextEdit', 'name:no': 'TextEdit', 'name:nn': 'TextEdit', 'name:nl': 'TextEdit', 'name:ne': 'TextEdit', 'name:nan': 'TextEdit', 'name:ms': 'TextEdit', 'name:mg': 'TextEdit', 'name:lo': 'TextEdit', 'name:ko': 'TextEdit', 'name:km': 'TextEdit', 'name:ja': 'TextEdit', 'name:it': 'TextEdit', 'name:id': 'TextEdit', 'name:hi': 'TextEdit', 'name:gl': 'TextEdit', 'name:fr': 'TextEdit', 'name:fi': 'TextEdit', 'name:fa': 'TextEdit', 'name:es': 'TextEdit', 'name:en': 'TextEdit', 'name:de': 'TextEdit', 'name:ckb': 'TextEdit', 'name:ceb': 'TextEdit', 'name:cdo': 'TextEdit', 'name:ca': 'TextEdit', 'name:bpy': 'TextEdit', 'name:bg': 'TextEdit', 'name:be': 'TextEdit', 'name:ar': 'TextEdit', 'name:ace': 'TextEdit', 'name': 'TextEdit', 'alt_name:pl': 'TextEdit', 'alt_name:fr': 'TextEdit', 'admin_level': 'TextEdit', 'ISO3166-2': 'TextEdit', });
lyr_Road_3.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'osm_version': '', 'osm_timestamp': '', 'osm_uid': '', 'osm_user': '', 'osm_changeset': '', 'hwpi': '', 'opening_date': '', 'horse': '', 'foot': '', 'bicycle': '', 'waterway': '', 'wires': '', 'operator:wikipedia': '', 'operator:wikidata': '', 'operator:th': '', 'operator:short': '', 'operator:en': '', 'cables': '', 'motorcycle': '', 'tunnel': '', 'level': '', 'covered': '', 'frequency': '', 'construction': '', 'train': '', 'description': '', 'turn:lanes:forward': '', 'lanes:backward': '', 'voltage': '', 'substation': '', 'power': '', 'import': '', 'maxweight:signed': '', 'website': '', 'operator': '', 'dual_carriage': '', 'turn:lanes': '', 'tracks': '', 'barrier': '', 'access': '', 'source:ref': '', 'bridge:name': '', 'destination:lanes': '', 'shoulder': '', 'destination:ref': '', 'destination:en': '', 'destination': '', 'lane_markings': '', 'maxheight': '', 'name:etymology:wikidata': '', 'old_ref': '', 'junction': '', 'passenger_lines': '', 'name:lo': '', 'layer': '', 'bridge': '', 'maxspeed': '', 'embankment': '', 'surface': '', 'smoothness': '', 'int_ref': '', 'service': '', 'railway:track_ref': '', 'usage': '', 'railway:etcs': '', 'railway': '', 'gauge': '', 'electrified': '', 'width': '', 'ref': '', 'oneway': '', 'name:th': '', 'name:en': '', 'name': '', 'lanes': '', 'highway': '', });
lyr_MainRoad_4.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'osm_version': '', 'osm_timestamp': '', 'osm_uid': '', 'osm_user': '', 'osm_changeset': '', 'to': '', 'operator': '', 'network:wikidata': '', 'network:th': '', 'network:en': '', 'name:th': '', 'name:ja': '', 'from': '', 'name:zh': '', 'wikipedia': '', 'wikidata': '', 'url': '', 'type': '', 'route': '', 'ref': '', 'network': '', 'name:ru': '', 'name:en': '', 'name:de': '', 'name': '', 'description': '', });
lyr_Female_5.set('fieldImages', {'timestamp': '', 'service': '', 'reg_type': '', 'prefix': '', 'sex': '', 'work': '', 'income': '', 'education': '', 'year': '', 'village_no': '', 'village': '', 'road': '', 'alley': '', 'district': '', 'amphoe': '', 'province': '', 'zipcode': '', 'congenital': '', 'congenit_1': '', 'disability': '', 'disabili_1': '', 'environmen': '', 'treatment_': '', 'treatmen_1': '', 'requiremen': '', 'requirem_1': '', 'date_start': '', 'date_end': '', 'occupation': '', 'relationsh': '', 'ability': '', 'vaccine': '', 'num_vaccin': '', 'lat': '', 'long': '', 'status': '', });
lyr_Male_6.set('fieldImages', {'timestamp': '', 'service': '', 'reg_type': '', 'prefix': '', 'sex': '', 'work': '', 'income': '', 'education': '', 'year': '', 'village_no': '', 'village': '', 'road': '', 'alley': '', 'district': '', 'amphoe': '', 'province': '', 'zipcode': '', 'congenital': '', 'congenit_1': '', 'disability': '', 'disabili_1': '', 'environmen': '', 'treatment_': '', 'treatmen_1': '', 'requiremen': '', 'requirem_1': '', 'date_start': '', 'date_end': '', 'occupation': '', 'relationsh': '', 'ability': '', 'vaccine': '', 'num_vaccin': '', 'vaccine_ty': '', 'lat': '', 'long': '', 'status': '', });
lyr_Boundary_2.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'boundary': 'no label', 'protect_class': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'type': 'no label', 'ref': 'no label', 'name:zh-Hant': 'no label', 'name:zh': 'no label', 'name:yue': 'no label', 'name:wuu': 'no label', 'name:war': 'no label', 'name:vi': 'no label', 'name:ur': 'no label', 'name:uk': 'no label', 'name:tr': 'no label', 'name:th-Latn': 'no label', 'name:th': 'no label', 'name:tg': 'no label', 'name:sv': 'no label', 'name:ru': 'no label', 'name:ro': 'no label', 'name:pt': 'no label', 'name:pnb': 'no label', 'name:pl': 'no label', 'name:no': 'no label', 'name:nn': 'no label', 'name:nl': 'no label', 'name:ne': 'no label', 'name:nan': 'no label', 'name:ms': 'no label', 'name:mg': 'no label', 'name:lo': 'no label', 'name:ko': 'no label', 'name:km': 'no label', 'name:ja': 'no label', 'name:it': 'no label', 'name:id': 'no label', 'name:hi': 'no label', 'name:gl': 'no label', 'name:fr': 'no label', 'name:fi': 'no label', 'name:fa': 'no label', 'name:es': 'no label', 'name:en': 'no label', 'name:de': 'no label', 'name:ckb': 'no label', 'name:ceb': 'no label', 'name:cdo': 'no label', 'name:ca': 'no label', 'name:bpy': 'no label', 'name:bg': 'no label', 'name:be': 'no label', 'name:ar': 'no label', 'name:ace': 'no label', 'name': 'no label', 'alt_name:pl': 'no label', 'alt_name:fr': 'no label', 'admin_level': 'no label', 'ISO3166-2': 'no label', });
lyr_Road_3.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'osm_version': 'no label', 'osm_timestamp': 'no label', 'osm_uid': 'no label', 'osm_user': 'no label', 'osm_changeset': 'no label', 'hwpi': 'no label', 'opening_date': 'no label', 'horse': 'no label', 'foot': 'no label', 'bicycle': 'no label', 'waterway': 'no label', 'wires': 'no label', 'operator:wikipedia': 'no label', 'operator:wikidata': 'no label', 'operator:th': 'no label', 'operator:short': 'no label', 'operator:en': 'no label', 'cables': 'no label', 'motorcycle': 'no label', 'tunnel': 'no label', 'level': 'no label', 'covered': 'no label', 'frequency': 'no label', 'construction': 'no label', 'train': 'no label', 'description': 'no label', 'turn:lanes:forward': 'no label', 'lanes:backward': 'no label', 'voltage': 'no label', 'substation': 'no label', 'power': 'no label', 'import': 'no label', 'maxweight:signed': 'no label', 'website': 'no label', 'operator': 'no label', 'dual_carriage': 'no label', 'turn:lanes': 'no label', 'tracks': 'no label', 'barrier': 'no label', 'access': 'no label', 'source:ref': 'no label', 'bridge:name': 'no label', 'destination:lanes': 'no label', 'shoulder': 'no label', 'destination:ref': 'no label', 'destination:en': 'no label', 'destination': 'no label', 'lane_markings': 'no label', 'maxheight': 'no label', 'name:etymology:wikidata': 'no label', 'old_ref': 'no label', 'junction': 'no label', 'passenger_lines': 'no label', 'name:lo': 'no label', 'layer': 'no label', 'bridge': 'no label', 'maxspeed': 'no label', 'embankment': 'no label', 'surface': 'no label', 'smoothness': 'no label', 'int_ref': 'no label', 'service': 'no label', 'railway:track_ref': 'no label', 'usage': 'no label', 'railway:etcs': 'no label', 'railway': 'no label', 'gauge': 'no label', 'electrified': 'no label', 'width': 'no label', 'ref': 'no label', 'oneway': 'no label', 'name:th': 'no label', 'name:en': 'no label', 'name': 'no label', 'lanes': 'no label', 'highway': 'no label', });
lyr_MainRoad_4.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'osm_version': 'no label', 'osm_timestamp': 'no label', 'osm_uid': 'no label', 'osm_user': 'no label', 'osm_changeset': 'no label', 'to': 'no label', 'operator': 'no label', 'network:wikidata': 'no label', 'network:th': 'no label', 'network:en': 'no label', 'name:th': 'no label', 'name:ja': 'no label', 'from': 'no label', 'name:zh': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'url': 'no label', 'type': 'no label', 'route': 'no label', 'ref': 'no label', 'network': 'no label', 'name:ru': 'no label', 'name:en': 'no label', 'name:de': 'no label', 'name': 'no label', 'description': 'no label', });
lyr_Female_5.set('fieldLabels', {'timestamp': 'no label', 'service': 'no label', 'reg_type': 'no label', 'prefix': 'no label', 'sex': 'no label', 'work': 'no label', 'income': 'no label', 'education': 'no label', 'year': 'no label', 'village_no': 'no label', 'village': 'no label', 'road': 'no label', 'alley': 'no label', 'district': 'no label', 'amphoe': 'no label', 'province': 'no label', 'zipcode': 'no label', 'congenital': 'no label', 'congenit_1': 'no label', 'disability': 'no label', 'disabili_1': 'no label', 'environmen': 'no label', 'treatment_': 'no label', 'treatmen_1': 'no label', 'requiremen': 'no label', 'requirem_1': 'no label', 'date_start': 'no label', 'date_end': 'no label', 'occupation': 'no label', 'relationsh': 'no label', 'ability': 'no label', 'vaccine': 'no label', 'num_vaccin': 'no label', 'lat': 'no label', 'long': 'no label', 'status': 'no label', });
lyr_Male_6.set('fieldLabels', {'timestamp': 'inline label - always visible', 'service': 'inline label - always visible', 'reg_type': 'inline label - always visible', 'prefix': 'inline label - always visible', 'sex': 'no label', 'work': 'no label', 'income': 'no label', 'education': 'no label', 'year': 'no label', 'village_no': 'no label', 'village': 'no label', 'road': 'no label', 'alley': 'no label', 'district': 'no label', 'amphoe': 'no label', 'province': 'no label', 'zipcode': 'no label', 'congenital': 'no label', 'congenit_1': 'no label', 'disability': 'no label', 'disabili_1': 'no label', 'environmen': 'no label', 'treatment_': 'no label', 'treatmen_1': 'no label', 'requiremen': 'no label', 'requirem_1': 'no label', 'date_start': 'no label', 'date_end': 'no label', 'occupation': 'no label', 'relationsh': 'no label', 'ability': 'no label', 'vaccine': 'no label', 'num_vaccin': 'no label', 'vaccine_ty': 'no label', 'lat': 'no label', 'long': 'no label', 'status': 'no label', });
lyr_Male_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});