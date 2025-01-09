const testUserController = (req, res) => {
    try{
        res.status(200).send("<h1>Welcome to Hamro Bhansa </h1>");
    } catch (error) {
        console.log("Error in testUserController", error);
    }
};

module.exports = { testUserController };