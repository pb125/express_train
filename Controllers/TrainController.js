const { count } = require("../models/train")
const trainModel = require("../models/train")

class TrainControlller{


    static seat_insert = async(req,res)=>{
        //console.log(req.body)
        try{
            res.header("Access-Control-Allow-Origin", "*")
            const seat = await trainModel.create(req.body)

            res.status(201).json({
                success:true,
                seat
            })
        }catch(error){
            console.log(error)
        }

    }

    
    static seatsall = async (req, res) => {
        try {
            res.header("Access-Control-Allow-Origin", "*")
            const seatdisplay = await trainModel.find()

            let totalseats = 0;
            
            seatdisplay.forEach((Coach)=>{
                totalseats = totalseats+Coach.seats;
            })
            res.status(200).json({
                //message:"TOuting is working fine"
                success: true,
                totalseats,
                seatdisplay

            })

        } catch (err) {
            console.log(err);
        }
    }

    
    static updateseat = async (req, res) => {
        //console.log(req.body)
       
        try {
           
           
           const seatupdate = await trainModel.updateOne({ 
                totalseat:req.body.totalseats,
                seats:req.body.seats
           })
        //   let totalseats1 = 0;
            
        //     seatupdate.forEach((Coach)=>{
        //    totalseats1 = totalseats-Coach.seats;
        //     })
        

            res.status(200).json({
                //message:"routing is working fine"
                success: true,
                seatupdate,
                
                   
            
            
            
        
                

            })
            //console.log(getall)
            //res.send(getall)
        } catch (err) {
            console.log(err);
        }

    }



}

module.exports=TrainControlller