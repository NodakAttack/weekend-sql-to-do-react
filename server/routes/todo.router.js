const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET

router.get('/', (req, res) => {
    console.log("In GET request");
    let queryText = 'SELECT * from "tasks" ORDER BY "id" ASC';

    pool.query(queryText).then((result) => {
        res.send(result.rows);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    })
});

// POST
router.post("/", (req, res) => {
    console.log("POST /tasks");
    const newTask = req.body;
    const queryText = ` INSERT INTO "tasks" ("task", "completed") 
                        VALUES ($1, $2);`;
    pool.query(queryText, [newTask.task, false])
    .then(result => {
        console.log("Task item added");
        res.sendStatus(201);
    })
    .catch(error => {
        console.log("Error adding new task", error);
        res.sendStatus(500);
    });
});

// PUT

router.put('/toggle/:id', (req, res) => {
    let { id } = req.params;
    const sqlText = `UPDATE "tasks" SET "completed" = NOT "completed" WHERE "id" = $1;`;
    pool.query(sqlText, [id])
        .then((result) => {
            console.log(`Returned from database`, result);
            res.sendStatus(201);
        })
        .catch((err) => {
            console.log(`Error updating the database ${sqlText}`, err);
            res.sendStatus(500)
        })
})

// DELETE

router.delete("/:id" , (req, res) => {
    // let { id } = req.params;
    console.log("DELETE /tasks/:id");
    const queryText = `DELETE FROM "tasks" WHERE "id" = $1;`;
    pool
      .query(queryText, [req.params.id])
      .then((response) => {
        console.log("task items deleted", response);
        res.sendStatus(200);
      })
      .catch((error) => {
        console.log("Error deleting task", error);
        res.sendStatus(500);
      });
  });

module.exports = router;
