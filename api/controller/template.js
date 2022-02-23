const { response } = require('express');

const  Template  = require('../models/template');



const getTemplates = async (req, res = response) => {
    const { limit = 5, from = 0 } = req.query;

    try {
        const [ total, templates ] = await Promise.all([
            Template.countDocuments(),
            Template.find()
                .skip( Number( from ) )
                .limit(Number( limit ))
        ]);
    
        res.status(200).json({
            total,
            templates
        });
        
    } catch (error) {
        return res.status(500).json({msg: "error"});
    }
}
    
const postTemplates  = async (req, res = response) => {

    const { name, creator, colors  } = req.body;

    try {
        const color = await Template.findOne({ colors });
       
        if(color){
            res.status(200).json({
                ok: true,
                msg: "the template is already registered in the database"
            });
        }

        const template = new Template({ name, creator, colors  });

        // Guardar en BD
        await template.save();
      

        res.status(200).json({
            ok: true,
            msg: "A new template has been created"
        });
        
    } catch (error) {
        console.log("error postTemplates")
        return res.status(500).json({msg: "error"});
    }

      
};




module.exports = {
    getTemplates,
    postTemplates,
    
};