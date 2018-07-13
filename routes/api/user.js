const router = require("express").Router();
const userService = require("../../services/user");

router.get("/", (req, res, next) => {
  userService.findAll((err, data) => {
    if (!err) {
      res.data = data;
      res.json(res.data);
    } else {
      res.status(400);
      res.end();
    }
  });
});

router.post("/", (req, res, next) => {
  userService.addUser(req.body, (err, data) => {
    if (!err) {
      res.data = data;
      res.json(res.data);
    } else {
      res.status(400);
      res.end();
    }
  });
});

router.delete("/:id", (req, res, next) => {
  const { id } = req.params;

  userService.deleteUser(id, (err, data) => {
    if (!err) {
      res.data = data;
      res.json(res.data);
    } else {
      res.status(400);
      res.end();
    }
  });
});

router.put("/", (req, res, next) => {

  userService.updateUser(req.body, (err, data) => {
    if (!err) {
      res.data = data;
      res.json(res.data);
    } else {
      res.status(400);
      res.end();
    }
  });
});

// router.get("/:id", (req, res, next) => {
//   userService.findOne(Number(req.params.id), (err, data) => {
//     if (!err) {
//       res.data = data;
//       res.json(res.data);
//     } else {
//       res.status(400);
//       res.end();
//     }
//   });
// });

module.exports = router;
