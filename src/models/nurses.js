const db = require("../../database/connection");

exports.getDataByIdNum = async (id) => {
  const data = await db.query("select * from nurses where id_num=$1", [id]);

  return data.rows.length ? data.rows[0] : null;
};

exports.addSubscribe = async (id, sub) => {
  await db.query("update nurses set notification=$1 where id=$2", [sub, id]);
};

exports.getNotificationById = async (id) => {
  const data = await db.query("select notification from nurses where id=$1", [
    id,
  ]);

  return data.rows.length ? data.rows[0] : null;
};
