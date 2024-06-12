const { petsService } = require("../services")


const showHome = (req, res)=>{
    res.render('home')
}

const showPetList = async (req, res)=>{
    const pets = await petsService.getAll();
    console.log("pets", pets)
    res.render('pets',{pets})
}



module.exports = {
    showHome,
    showPetList
}