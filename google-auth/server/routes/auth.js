const router = require("express").Router()
const passport = require("passport")

router.get("/login/failed", (req, res) => {
    if (req.user) {
        res.status(200).json({
            error: false,
            message: "Login successful",
            user: req.user
        })
    } else {
        res.status(200).json({
            error: true,
            message: "Not Authorized"
        })
    }
})

router.get("/login/success", (req, res) => {
    res.status(200).json({
        error: true,
        message: "Login failed"
    })
})

router.get("/google/callback", passport.authenticate("google", {
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: "/login/failed"
})
)

router.get("/logout", (req, res) => {
    req.logout()
    res.redirect(process.env.CLIENT_URL)
})

module.exports = router