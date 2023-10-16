const deleiver  = require('../models/DelivaretModle')

//add new sstg
const addorderz = async (req, res) => {
    const {
        ID,
        name,
        mail,
        tele,
        address,
        day,
        msg

    } = req.body;

    const result = await deleiver.find();
    const empCount = result.length;
    const autoGenerateEmpId = `${empCount + 1}`;


    const mongooseRes = new deleiver({
        ID: autoGenerateEmpId,
        name,
        mail,
        tele,
        address,
        day,
        msg

    })

    mongooseRes.save().then((result) => {
        res
            .status(200)
            .json({
                message: "delivery added successfully",
                result: {
                    data: result,
                    response: true,
                },
            })
    });
}

// Read all items in the system
const getAllPur = async (req, res) => {
    let results = await deleiver.find();
    if (!(results)) {
        res.status(500).json({
            message: "Error while getting all items",
            error: "Something went wrong",
        });
    } else {
        res.status(200).json({
            message: "All order details",
            data: results,
        });
    }
};


// update item details

const updateOrd = async (req, res) => {
    const {
        ID,
        name,
        mail,
        tele,
        address,
        day,
        msg
    } = req.body;
    try {
        const result = await deleiver.findOneAndUpdate({empID: empID}, {
            empID,
            name,
            mail,
            tele,
            address,
            day,
            msg
        });
        res.status(200).send({message: " order updated successfully", data: result});
    } catch (e) {
        res.status(500).send({message: "Something went wrong", error: e});
    }
};


const delteorder = async (req, res) => {
    const response = await deleiver.findByIdAndDelete(req.params.id);
    if (!(response)) {
        res.status(500).send(err);
    } else {
        res.status(200).json({
            message: " deleted successfully",
            result: {
                data: response,
                response: true,
            },
        });
    }
};

const getdelivary = async (req, res) => {
    const response = await deleiver.findOne({empID: req.params.id});
    if (!(response)) {
        res.status(500).send(err);
    } else {
        res.status(200).json({
            result: {
                data: response,
                response: true,
            },
        });
    }
};

module.exports = {
    addorderz,
    getAllPur,
    delteorder,
    getdelivary,
    updateOrd
   
};

