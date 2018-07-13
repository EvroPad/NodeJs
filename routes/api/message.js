const router = require("express").Router();
const messageService = require("../../services/message");

router.get("/", (req, res, next) => {
  messageService.findAll((err, data) => {
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
  messageService.addUser(req.body, (err, data) => {
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

  messageService.deleteUser(id, (err, data) => {
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

  messageService.updateUser(req.body, (err, data) => {
    if (!err) {
      res.data = data;
      res.json(res.data);
    } else {
      res.status(400);
      res.end();
    }
  });
});


router.get("/:id", (req, res, next) => {
  const { id } = req.params;

  messageService.getAllReceiverId(id, (err, data) => {
    if (!err) {
      res.data = data;
      res.json(res.data);
    } else {
      res.status(400);
      res.end();
    }
  });
});

module.exports = router;
