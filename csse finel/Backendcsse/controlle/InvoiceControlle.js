const invoice  = require('../models/InvoiceModle');

//add new sstg
const addorderz = async (req, res) => {
    const {
        _id,
        OrderID,
        Price,
        Date,
        Items,
    

    } = req.body;

    const result = await invoice.find();
    const empCount = result.length;
    const autoGenerateEmpId = `${empCount + 1}`;


    const mongooseRes = new invoice({
        _id,
        OrderID,
        Price,
        Date,
        Items,
    })

    mongooseRes.save().then((result) => {
        res
            .status(200)
            .json({
                message: "invoice added successfully",
                result: {
                    data: result,
                    response: true,
                },
            })
    });
}

// Read all items in the system
const getAllPur = async (req, res) => {
    let results = await invoice.find();
    if (!(results)) {
        res.status(500).json({
            message: "Error while getting all items",
            error: "Something went wrong",
        });
    } else {
        res.status(200).json({
            message: "All order invoice details",
            data: results,
        });
    }
};


// update item details

const updateOrd = async (req, res) => {
    const {
        _id,
        OrderID,
        Price,
        Date,
        Items,
    } = req.body;
    try {
        const result = await invoice.findOneAndUpdate({empID: empID}, {
            _id,
            OrderID,
            Price,
            Date,
            Items,
        });
        res.status(200).send({message: " invoice updated successfully", data: result});
    } catch (e) {
        res.status(500).send({message: "Something went wrong", error: e});
    }
};


const delteorder = async (req, res) => {
    const response = await invoice.findByIdAndDelete(req.params.id);
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
    const response = await invoice.findOne({empID: req.params.id});
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