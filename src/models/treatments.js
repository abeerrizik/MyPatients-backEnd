const db = require("../../database/connection");

exports.getTreatmentData = async (treatment_id) => {

    const data = await db.query(`
        select treatments.treatment_time as "Time",
               patients.full_name        as "Patient Name",
               patients.room             as "Room",
               patients.bed              as "Bed",
               patients.id_num           as "Patient id num",
               patients.id               as "Patient id",
               patients.nurse_id         as "Nurse id",
               treatments.description    as "Description",
               treatments.status,
               treatments.id
        from treatments
                 inner join patients on patients.id = treatments.patient_id
        where treatments.id=$1
        order by treatments.treatment_time;`,[treatment_id]);

      return data.rows.length ? data.rows[0] : null;

}

exports.ToggleStatus = async (treatment_id, checkStatus) => {

    const data = await db.query("update treatments set status=$1 where id=$2", [checkStatus, treatment_id]);
    return data.rows.length ? data.rows[0] : null;

}

exports.getAllTreatments = async () => {
    const data = await db.query(`
        select treatments.treatment_time as "Time",
               patients.full_name        as "Patient Name",
               patients.room             as "Room",
               patients.bed              as "Bed",
               patients.id_num           as "Patient id num",
               patients.id               as "Patient id",
               patients.nurse_id         as "Nurse id",
               treatments.description    as "Description",
               treatments.status,
               treatments.id
        from treatments
                 inner join patients on patients.id = treatments.patient_id
        order by treatments.treatment_time;`);

    return data.rows
}
