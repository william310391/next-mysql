import { pool } from "../../../config/db";

export default async function hanlder(req, res) {
  switch (req.method) {
    case "GET":
      return await getProduct(req, res);
    case "POST":
      return await savesProduct(req, res);
  }
}
const getProduct = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM PRODUCT");
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const savesProduct = async (req, res) => {
  const { name, description, price } = req.body;
  // console.log('create product');
  // console.log(req.body);

  try {
    const [result] = await pool.query("INSERT INTO PRODUCT SET ?", {
      name,
      description,
      price,
    });
    return res
      .status(200)
      .json({ name, price, description, id: result.insertId });
  } catch (error) {
    return res.status(500).json({ error: error.sqlMessage });
  }
};
