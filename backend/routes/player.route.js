const express = require("express");
const app = express();
const playerRoute = express.Router();

// Employee model
let player = require("../models/Player");

let schedule = require("../models/Schedule");

let priority = require("../models/Priority");

let admin = require("../models/Admin");

let couch = require("../models/Couch");

let practisesession = require("../models/PractiseSession");

let match = require("../models/Match");

let notification = require("../models/Notification");

playerRoute.route("/creatematch").post((req, res, next) => {
  match.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Add Employee
playerRoute.route("/create").post((req, res, next) => {
  player.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});
playerRoute.route("/createschedule").post((req, res, next) => {
  schedule.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});
playerRoute.route("/createspriority").post((req, res, next) => {
  priority.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});
playerRoute.route("/createsadmin").post((req, res, next) => {
  admin.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});
playerRoute.route("/createscouch").post((req, res, next) => {
  couch.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});
playerRoute.route("/createSession").post((req, res, next) => {
  practisesession.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

playerRoute.route("/createNotification").post((req, res, next) => {
  notification.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get All Employees
playerRoute.route("/").get((req, res) => {
  player.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});
playerRoute.route("/getallnotification").get((req, res) => {
  notification.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});
playerRoute.route("/getsessions").get((req, res) => {
  practisesession.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

playerRoute.route("/allcouches").get((req, res) => {
  couch.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

playerRoute.route("/allSchedules").get((req, res) => {
  schedule.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

playerRoute.route("/allpriorities").get((req, res) => {
  priority.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});
playerRoute.route("/getallmatches").get((req, res) => {
  match.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});
// Get single employee
playerRoute.route("/read/:id").get((req, res) => {
  player.fin
  player.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update employee
playerRoute.route("/update/:id").put((req, res, next) => {
  player.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
        console.log(error);
      } else {
        res.json(data);
        console.log("Data updated successfully");
      }
    }
  );
});

// Delete employee
playerRoute.route("/delete/:_id").delete((req, res, next) => {
  player.findOneAndRemove(req.params, (error, data) => {
    console.log("Backend = " + req.params._id);

    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});
playerRoute.route("/deletenotification/:_id").delete((req, res, next) => {
  notification.findOneAndRemove(req.params, (error, data) => {
    console.log("Backend = " + req.params._id);

    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});
playerRoute.route("/deletesession/:_id").delete((req, res, next) => {
  practisesession.findOneAndRemove(req.params, (error, data) => {
    console.log("Backend = " + req.params._id);

    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});
playerRoute.route("/deletecouch/:_id").delete((req, res, next) => {
  couch.findOneAndRemove(req.params, (error, data) => {
    console.log("Backend = " + req.params._id);

    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});
playerRoute.route("/deletematch/:_id").delete((req, res, next) => {
  match.findOneAndRemove(req.params, (error, data) => {
    console.log("Backend = " + req.params._id);

    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});
module.exports = playerRoute;
