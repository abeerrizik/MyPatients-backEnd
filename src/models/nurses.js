const db = require("../../database/connection");

exports.getDataByIdNum = async (id) => {
    const data = await db.query("select * from nurses where id_num=$1", [id]);

    return data.rows.length ? data.rows[0] : null;
};

exports.addSubscribe = async (id, sub) => {
    await db.query("update nurses set subscription=$1 where id=$2", [sub, id]);
};

exports.getSubscriptionById = async (id) => {
    const data = await db.query("select subscription from nurses where id=$1", [
        id,
    ]);

    return data.rows.length ? data.rows[0] : null;
};

exports.getNurseSchedule = async (nurse_id) => {
    const result = await db.query(
            `select treatments.treatment_time as "Time",
                    patients.full_name        as "Patient Name",
                    patients.room             as "Room",
                    patients.bed              as "Bed",
                    patients.id_num           as "Patient id num",
                    patients.id               as "Patient id",
                    treatments.description    as "Description",
                    treatments.status,
                    treatments.id
             from treatments
                      inner join patients on patients.id = treatments.patient_id
                      inner join
                  (
                      select *
                      from patients
                      where nurse_id = 1
                  ) as this_nurse_patients
                  on (treatments.patient_id = this_nurse_patients.id)
             order by treatments.treatment_time;  `,
        [nurse_id]
    );
    return result.rows;
};
