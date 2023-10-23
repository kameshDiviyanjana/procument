const Puchase = require("../models/Purchasrequest");

//add new sstg
const addorder = async (req, res) => {
    const {
        ID,
        date,
        empID,
        empName,
        orderDetails,
        yes

    } = req.body;

    const result = await Puchase.find();
    const empCount = result.length;
    const autoGenerateEmpId = `${empCount + 1}`;


    const mongooseRes = new Puchase({
        ID: autoGenerateEmpId,
        date,
        empID,
        empName,
        orderDetails,
        yes

    })

    mongooseRes.save().then((result) => {
        res
            .status(200)
            .json({
                message: "purchase added successfully",
                result: {
                    data: result,
                    response: true,
                },
            })
    });
}

// Read all items in the system
const getAllPur = async (req, res) => {
    let results = await Puchase.find();
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
        date,
        empID,
        empName,
        orderDetails,
        yes
    } = req.body;
    try {
        const result = await Puchase.findOneAndUpdate({empID: empID}, {
            ID,
        date,
        empID,
        empName,
        orderDetails,
        yes
        });
        res.status(200).send({message: " order updated successfully", data: result});
    } catch (e) {
        res.status(500).send({message: "Something went wrong", error: e});
    }
};
//delete item
const delteorder = async (req, res) => {
    const response = await Puchase.findByIdAndDelete(req.params.id);
    if (!(response)) {
        res.status(500).send(err);
    } else {
        res.status(200).json({
            message: "Employee deleted successfully",
            result: {
                data: response,
                response: true,
            },
        });
    }
};
const getEmpAttendanceByID = async (req, res) => {
    let usetId =req.params.id
    const y = Puchase.findById(usetId).then((d)=>{

   //  res.json()
        res.status(200).send(d)
    }).catch((err)=>{

        console.log(err.massage);
        res.status(500).send({status : "erroe wthit get user"});

    })
};

module.exports = {
    addorder,
    getAllPur,
    delteorder,
    getEmpAttendanceByID,
    updateOrd
   
};