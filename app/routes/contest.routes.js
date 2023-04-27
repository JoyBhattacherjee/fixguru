module.exports = app => {
    const contests = require("../controllers/contest.controller");
    const router = require("express").Router();
    router.post("/create", contests.create);
    router.get("/getAll", contests.getContests);

    app.use('/api/v1/contests', router);
};