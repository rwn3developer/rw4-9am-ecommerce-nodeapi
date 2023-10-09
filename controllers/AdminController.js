const AdminTbl = require('../models/AdminTbl');

const Jwt = require('jsonwebtoken');

const index = async (req, res) => {
    try {
        const { name, email, password, gender, city } = req.body;
        let insert = await AdminTbl.create({
            name: name,
            email: email,
            password: password,
            gender: gender,
            city: city,
            role : req.body.role
        })
        if (insert) {
            return res.json({ messege: "Admin successfully add", status: 1 })
        } else {
            return res.json({ messege: "Admin not successfully add", status: 0 })
        }
    } catch (err) {
        console.log(err);
        return false;
    }
}

const adminview = async (req, res) => {
    try {
        let adminview = await AdminTbl.find({});
        if (adminview) {
            return res.json({ admindata: adminview, status: 1 })
        } else {
            return res.json({ messege: "Data not view", status: 0 })
        }
    } catch (err) {
        console.log(err);
        return false;
    }
}

const admindelete = async (req, res) => {
    try {
        let id = req.body.id;
        let deleteRecord = await AdminTbl.findByIdAndDelete(id);
        if (deleteRecord) {
            return res.json({ messege: "Admin successfully delete", status: 1 })
        } else {
            return res.json({ messege: "Data not delete", status: 0 })
        }
    } catch (err) {
        console.log(err);
        return false;
    }
}

const adminupdate = async (req, res) => {
    try {
        let adminUpdate = await AdminTbl.findByIdAndUpdate(req.body.id, {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            gender: req.body.gender,
            city: req.body.city
        });
        if (adminUpdate) {
            return res.json({ messege: "Admin successfully Update", status: 1 })
        } else {
            return res.json({ messege: "Admin not Update", status: 0 })
        }
    } catch (err) {
        console.log(err);
        return false;
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userLogin = await AdminTbl.findOne({ email: email });
        if (!userLogin || userLogin.password != password) {
            return res.json({ messege: "Email and Password not valid", status: 0 })
        }
        const token = Jwt.sign({ payload: userLogin }, 'rnw4', { expiresIn: '1hr' });
        return res.json({ token: token })

    } catch (err) {
        console.log(err);
        return false;
    }
}

module.exports = {
    index,
    adminview,
    admindelete,
    adminupdate,
    login

}