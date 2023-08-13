import User from '../models/User.js';

export const handleLogout = async (req,res) => {
    const cookies = req.cookies;
    if(!cookies) return res.sendStatus(204).json("Invalid cookies");
    console.log(cookies , "cookies");
    if(!cookies?.access_token) return res.json("access token not found").sendStatus(204)
    const token = cookies.access_token;
    console.log(token ,   " this is access token");


    const foundUser = await User.findOne({token}).exec()
    console.log( foundUser, "token not found in database");
    if (!foundUser || null) {
     res.clearCookie('access_token')
     console.log("user not found");
     return res.json({"message" : "token not found in database"}).sendStatus(204)
    }


    foundUser.token = "";
    console.log(foundUser);
    const result = await foundUser.save();
    console.log(result)


    res.clearCokies('access_token', {httpOnly: true});
    res.sendStatus(204).json({"success": "you have been logged out successfully"})
}       