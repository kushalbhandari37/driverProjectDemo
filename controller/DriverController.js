const file = './SampleData/sample.json';
const fs = require('fs');

let driverController = {
    
    //Updates Driver Location
    updateDriverLocation: async ()=>{  
        try {
            let sampleData = JSON.parse(fs.readFileSync(file));
            sampleData.forEach(data=>{ 
                let location = data.location; 
                location[0] = (Math.random() * 100).toFixed(4);
                location[1] = (Math.random() * 100).toFixed(4);
            })        
            fs.writeFileSync(file,JSON.stringify(sampleData), (err)=>{            
                if(err) console.log(err)            
            })  
            console.log("****Drivers Location Updated****")   

        } catch (error) {
            console.log(error)            
        } 
    },

    //Gets Driver Details and send to the response
    getDriverDetails: (req,res)=>{
        try {
            const data = JSON.parse(fs.readFileSync(file))
            res.setHeader('Content-Type', 'application/json');
            return res.status(200).send(data)
        } catch (error) {
            console.log(error)
        }
    }
};

module.exports = driverController;