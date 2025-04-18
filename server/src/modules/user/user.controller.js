import userService from "./user.service.js";

class UserController {
  #userService;
  constructor() {
    this.#userService = userService;
  }

  getAllUsers = async (req, res, next) => {
    try {
      const users = await this.#userService.getAllUsers();
      res.send(users);
    } catch (error) {
        next(error)
    }
  };

  register = async (req, res, next) => {
    try {
        console.log(req.body);
        
        const { name, email, password, phoneNumber } = req.body
        await this.#userService.register(name, email, password, phoneNumber)
        res.send({
            message: "USer yaratildi"   
        })
    } catch (error) {
        next(error)
        
    }
  }

  login = async (req, res, next) => {
    try {
      const { email, password } = req.body

      await this.#userService.login(email, password)

      res.send("User tizimga kirdi")
    } catch (error) {
      next(error)
    }
  }

  getProfile = async (req, res, next) => {
    try {
      const { id } = req.params

      const data = await this.#userService.getProfile(id)

      res.send(data)
    } catch (error) {
      next(error)
    }
  }

  updateProfile = async (req, res, next) => {
    try {
      const { id } = req.params
      const { name, email, password } = req.body

      await this.#userService.updateProfile(id, name, email, password)
    } catch (error) {
      next(error)
    }
  }

}

export default new UserController()
