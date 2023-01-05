const PartyModel = require("../models/Party");

const checkPartyBudget = (budget, services) => {
    const priceSum = services
        .reduce((sum, service) => sum+service.price, 0)
    
    if(priceSum > budget) {
        return false;
    }
    return true;
}

const partyController = {
    create: async (req, res) => {
        try {
            const party = {
                title: req.body.title,
                author: req.body.author,
                description: req.body.description,
                budget: req.body.budget,
                image: req.body.image,
                quantityPeople: req.body.quantityPeople,
                services: req.body.services
            };

            if(party.services && 
                !checkPartyBudget(
                    party.budget, party.services)) {
                    res.status(406).json({
                        msg: "Orçamento insuficiente!"
                    });
                return;
            }
            
            const response = await PartyModel.create(party);
            res.status(201).json({
                response, 
                msg: "Festa criada com sucesso!"
            });
        }
        catch(error) {
            console.log(error);
        }
    },
    getAll: async (req, res) => {
        try {
            const party = await PartyModel.find();
            if(!party) {
                res.status(404).json({
                    msg: "Festa não encontrada!"
                });
                return;
            }
            res.json(party);
        }
        catch(error) {
            console.log(error);
        }
    },

    getUnique: async (req, res) => {
        try {
            const id = req.params.id;
            const party = await PartyModel
                .findById(id);
            
            if(!party) {
                res.status(404).json({
                    msg: "Festa não encontrada!"
                });
                return;
            }
            res.json(party);
        } catch (error) {
            console.log(error);
        }
    },
}

module.exports = partyController;