const treatmentsModel = require("../models/treatments")
const nurseModel = require("../models/nurses")
const scheduler = require('node-schedule');
const {pushNotification} = require("./notificationsManager")
exports.loadAllSchedules = async () => {
    const treatments = await treatmentsModel.getAllTreatments()
    const today = Date.now()

    treatments
        .filter(data => data.Time > today)
        .forEach(treatmentData => {
            scheduler.scheduleJob(treatmentData.Time, () => {
                nurseModel
                    .getDataById(treatmentData["Nurse id"])
                    .then((nurseData) =>
                        pushNotification(nurseData.subscription, `it's treatment time, at room ${data.Room} `,{treatmentId:data.id}))
            })
        })
}
