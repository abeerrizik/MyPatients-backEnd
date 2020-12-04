const treatmentsModel = require("../models/treatments")
const nurseModel = require("../models/nurses")
const scheduler = require('node-schedule');
const {pushNotification} = require("./notificationsManager")
exports.loadAllSchedules = async ()=>{
    const treatments = await treatmentsModel.getAllTreatments()
    const today = Date.now()

    treatments
        .filter(data=> data.Time > today )
        .forEach(data=>{
        scheduler.scheduleJob(data.Time,()=>{

            nurseModel.getDataById(data["Nurse id"]).then((nurseData)=>
                pushNotification(nurseData.subscription,"this is a test") )

        })
    })


    // treatments = treatments.map(data=> ({...data, Time: dayJs(today).se }))

}
