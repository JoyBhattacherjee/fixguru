const db = require("../models");
const Contests = db.contests;

exports.create = async (req, res) => {
    const contest = {
        name: req.body.name,
        startDate: req.body.startDate,
        endDate: req.body.endDate
    };
    try {
        const response = await Contests.create(contest);
        res.status(200).send(response);
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.getContests = async (req, res) => {
    try {
        const response = await Contests.findAll();
        // let previous = [];
        // let upcoming = [];
        // response.forEach(contest => {
        //     if (contest.endDate.getTime() > new Date().getTime()) {
        //         previous.push(contest);
        //     } else {
        //         upcoming.push(
        //             {
        //                 id: contest.id,
        //                 name: contest.name,
        //                 startDate: contest.startDate,
        //                 endDate: contest.endDate,
        //                 createdAt: new Date(contest.createdAt.toLocaleString()).toISOString(),
        //                 updatedAt: contest.updatedAt
        //             }
        //         );
        //     }
        // });
        res.status(200).send(response);
    } catch (error) {
        res.status(500).send(error);
    }
}