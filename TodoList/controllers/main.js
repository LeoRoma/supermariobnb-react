const getTableData = (req, res, db) => {
  db.select("*")
    .from("testtable1")
    .then(items => {
      if (items.length) {
        res.json(items);
      } else {
        res.json({ dataExists: "false" });
      }
    })
    .catch(err => res.status(400).json({ dbError: "db error" }));
};

const postTableData = (req, res, db) => {
  const { first, last, email, phone, location, hobby } = req.body;
  const added = new Date();
  db("testtable1")
    .insert({ first, last, email, phone, location, hobby, added })
    .returning("*")
    .then(item => {
      res.json(item);
    })
    .catch(err => res.status(400).json({ dbError: "db error" }));
};

const putTableData = (req, res, db) => {
  const { id, first, last, email, phone, location, hobby } = req.body;
  db("testtable1")
    .where({ id })
    .update({ first, last, email, phone, location, hobby })
    .returning("*")
    .then(item => {
      res.json(item);
    })
    .catch(err => res.status(400).json({ dbError: "db error" }));
};

const deleteTableData = (req, res, db) => {
  const { id } = req.body;
  db("testtable1")
    .where({ id })
    .del()
    .then(() => {
      res.json({ delete: "true" });
    })
    .catch(err => res.status(400).json({ dbError: "db error" }));
};

// SIGNUP

const getUserData = (req, res, db) => {
  db.select("*")
    .from("users")
    .then(items => {
      if (items.length) {
        res.json(items);
      } else {
        res.json({ dataExists: "false" });
      }
    })
    .catch(err => res.status(400).json({ dbError: "db error" }));
};

const postUserData = (req, res, db) => {
  const { username, email, password, last_login } = req.body;
  const date_created = new Date();
  db("users")
    .insert({ username, email, password, date_created, last_login })
    .returning("*")
    .then(item => {
      res.json(item);
    })
    .catch(err => res.status(400).json({ dbError: "db error" }));
};

const putUserData = (req, res, db) => {
  const { uid, username, email, password } = req.body;
  db("users")
    .where({ uid })
    .update({ username, email, password })
    .returning("*")
    .then(item => {
      res.json(item);
    })
    .catch(err => res.status(400).json({ dbError: "db error" }));
};

const deleteUserData = (req, res, db) => {
  const { uid } = req.body;
  db("users")
    .where({ id })
    .del()
    .then(() => {
      res.json({ delete: "true" });
    })
    .catch(err => res.status(400).json({ dbError: "db error" }));
};

module.exports = {
  getTableData,
  postTableData,
  putTableData,
  deleteTableData,
  // Signup
  getUserData,
  postUserData,
  putUserData,
  deleteUserData
};
