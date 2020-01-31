const express = require('express');
const router = express.Router();
const config = require('../config/db');
const MongoClient = require("mongodb").MongoClient;

router.get('/contact', async (req, res)=>{

    let state = {};

    MongoClient.connect(config.localURI, async (err, db) => {
        if (err) throw err;
        var dbo = db.db("utm");

        // Find distinct Vehicle_make
        let v_make = await dbo.collection('contacts')
            .distinct('vehicle_make');

        // // FInd distinct vehicle_variant
        let v_variant = await dbo.collection('contacts').distinct('vehicle_variant');

        // //Find distinct vehicle_model
        let v_model = await dbo.collection('contacts').distinct('vehicle_model');

        state = {v_make, v_model, v_variant};
        res.json(state);

    });
});

module.exports = router;