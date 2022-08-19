"use strict";

var db =  require('../db-connections');
class EquipmentsDB{
    getAllEquipments(callback){
        var sql = "SELECT * FROM gaming_review.equipment";
        db.query(sql,callback);
    }
}

module.exports = EquipmentsDB;