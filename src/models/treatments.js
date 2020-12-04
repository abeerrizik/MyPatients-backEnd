exports.getTreatmentData = async (treatment_id) => {

    const data = await db.query("select * from treatments where id=$1", [treatment_id]);
    return data.rows.length ? data.rows[0] : null;

}

exports.ToggleStatus = async (treatment_id,checkStatus) => {

    const data = await db.query("update treatments set status=$1 where id=$2", [checkStatus,treatment_id]);
    return data.rows.length ? data.rows[0] : null;

}
