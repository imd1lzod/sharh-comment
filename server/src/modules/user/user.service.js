import { comparePassword, hashPassword } from "./user-hash-password.js";
import userModel from "./user.model.js";

class UserService {
    #userModel
    constructor() {
        this.#userModel = userModel
    }

    getAllUsers = async () => {
        // console.log(this.#userModel);
        const users = await this.#userModel.find()
        
        
        return {
            message: "succes",
            count: users.length,
            data: users
        }
    }
    
    register = async (name, email, password, phoneNumber) => {
        await this.#userModel.create({
            name: name,
            email: email,
            password: password,
            phoneNumber: phoneNumber
        })

        const hashedPassword = await hashPassword(password)

        return "User  muvaffaqiyatli yaaratildi"
    }

    login = async (email, password) => {
        const foundedUser = await this.#userModel.findOne(email)

        if (!foundedUser) {
            return "User topilmadi"
        }

        const isMatch = await comparePassword(password, foundedUser.password)

        if (!isMatch) {
            return "Parol xato"
        }

        return "User muvvaffaqiyatli ro'yxatdan o'tdi"
    }

    getProfile = async (id) => {
        const user = await this.#userModel.findById(id)

        if (!user) {
            return "User topilmadi"
        }

        return user
    }

    updateProfile = async (id, name, email, password) => {
        const updatedUser = await this.#userModel.findByIdAndUpdate(id, {
            name: name,
            email: email,
            password: password
        })

        if (updatedUser) {
            return "USer topilmadi"
        }

        return updatedUser
    }
}

export default new UserService();