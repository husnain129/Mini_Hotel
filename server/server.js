require("dotenv").config();
const express = require("express");
const db = require("./db/index");
var cors = require('cors')
const morgan = require("morgan");

const app = express();
app.use(express.json());
app.use(morgan("dev"));
 
app.use(cors())

app.get("/api/v1/restaurants", async (req, res) => {
  try {
    const results = await db.query("SELECT * FROM restaurants");
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        restaurants: results.rows,
      },
    });
  } catch (error) {
    console.log("error", error);
  }
});

app.get("/api/v1/restaurants/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await db.query("SELECT * FROM restaurants where id = $1", [
      id,
    ]);
    res.status(200).json({
      status: "success",
      result: { resturants: result.rows },
    });
  } catch (error) {
    console.log("error", error);
  }
});

app.post("/api/v1/restaurants", async (req, res) => {
  try {
    const { name, location, price_range } = req.body;
    const result = await db.query(
      "INSERT into restaurants(name, location, price_range) values ($1, $2, $3) returning *",
      [name, location, price_range]
    );
    res.status(200).json({
      status: "success",
      result: { restaurant: result.rows[0] },
    });
  } catch (error) {
    console.log("error", error);
  }
});

app.patch("/api/v1/restaurants/:id", async (req, res) => {
  try {
    let id = req.params.id;
    const { name, location, price_range } = req.body;
    const old = await db.query("SELECT * FROM restaurants where id = $1", [id]);

    o_name = old.rows[0].name;
    o_location = old.rows[0].location;
    o_price_range = old.rows[0].price_range;
    const result = await db.query(
      "update restaurants set name = $1, location = $2, price_range = $3 where id = $4 returning *",
      [name || o_name, location || o_location, price_range || o_price_range, id]
    );
    res.status(200).json({
      status: "success",
      result: { restaurant: result.rows[0] },
    });
  } catch (error) {
    console.log("error", error);
  }
});

app.delete("/api/v1/restaurants/:id", async (req, res) => {
  try {
    let id = req.params.id;
    await db.query("DELETE FROM restaurants WHERE id = $1", [id]);
    res.status(200).json({
      status: "success",
      result: "successfully delete",
    });
  } catch (error) {
    console.log("error", error);
  }
});

const port = process.env.PORT || 3005;
app.listen(port, () => {
  console.log("server connected at port = ", port);
});
