"use strict";
const EquipmentsDB = require('../models/EquipmentsDB');

var equipmentsDB = new EquipmentsDB();

function getAllEquipments(request, respond){
    equipmentsDB.getAllEquipments(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

module.exports = {getAllEquipments};