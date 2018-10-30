module.exports = {

    getInventory: (req, res) => {
        const dbInstance = req.app.get('db');

        dbInstance.get_inventory()
            .then(products => res.status(200).send(products))
            .catch(err => {
                res.status(500).send({ errorMessage: "Sorry, this is not working out.. don't worry! Its not you. I have to work somethings out internally." });
                console.log(err)
            })
        // res.status(200).send('It works!');
    }
};
