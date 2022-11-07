const db = require("../connect");

exports.profilePhoto = (req, res) => {

      const q =
        "INSERT INTO users (`profilePic`) VALUES (?)";
      const values = [
        req.body.profilePic,
      ];
  
      db.query(q, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("Profile photo has been created.");
      });
  };
  