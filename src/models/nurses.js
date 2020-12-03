const db = require("../../database/connection");

exports.getDataById = async (id) => {
  const data = await db.query("select * from nurses where id_num=$1", [id]);

  return data.rows.length ? data.rows[0] : null;
};
