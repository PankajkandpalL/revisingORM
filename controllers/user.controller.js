const { userSchema } = require("../models/user.schema");

const createUser = async (req, res) => {
    const { email, name } = req.body;
  
    try {
      const isUserCreated = await userSchema.create({ name, email });
      return res.status(201).send({ error: false, items: isUserCreated });
    } catch (error) {
      console.error(error.message);
      return res.status(500).send({ error: true, message: error.message });
    }
  }

  const getAllUsers = async (req, res) => {
    try {
      const allUsers = await userSchema.findAll();
      return res.status(201).send({ error: false, items: allUsers });
    } catch (error) {
      console.error(error.message);
      return res.status(500).send({ error: true, message: error.message });
    }
  }

  const updateAUser = async (req, res) => {
    const { email } = req.body;
    const { id } = req.params;
  
    try {
      const isUserUpdated = await userSchema.update({ email }, { where: { id } });
      return res.status(201).send({ error: false, items: isUserUpdated });
    } catch (error) {
      console.error(error.message);
      return res.status(500).send({ error: true, message: error.message });
    }
  }

  const deleteUser = async(req,res)=>{
    const { id } = req.params;
  
    try {
      const isUserDeleted = await userSchema.destroy({
        where: {
            id: id,
          }        
      })
      return res.status(201).send({ error: false, items: isUserDeleted });
    } catch (error) {
      console.error(error.message);
      return res.status(500).send({ error: true, message: error.message });
    }
}

module.exports = {
    deleteUser, 
    updateAUser,
    getAllUsers,
    createUser
}