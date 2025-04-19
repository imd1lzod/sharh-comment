import jwtConfig from "../../config/jwt.config.js";
import { comparePassword, hashPassword } from "./user-hash-password.js";
import userModel from "./user.model.js";
import jwt from "jsonwebtoken"

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

        const hashedPassword = await hashPassword(password)
        await this.#userModel.create({
            name: name,
            email: email,
            password: hashedPassword,
            phoneNumber: phoneNumber
        })

        

        return "User  muvaffaqiyatli yaaratildi"
    }

    login = async (email, password) => {
        const user = await this.#userModel.findOne({email: email})

        if (!user) {
            return "User topilmadi"
        }

        const isMatch = await comparePassword(password, user.password)

        if (!isMatch) {
            return "Parol xato"
        }

        const accessToken = jwt.sign(
            {id: user.id, role: user.role},
            jwtConfig.ACCESS_TOKEN_SECRET,
            {
                expiresIn: jwtConfig.ACCESS_TOKEN_EXPIRE,
                algorithm: "HS256"
            }
        )

        const refreshToken = jwt.sign(
            {id: user.id, role: user.role},
            jwtConfig.ACCESS_TOKEN_SECRET,
            {
                expiresIn: jwtConfig.ACCESS_TOKEN_EXPIRE,
                algorithm: "HS256"
            }
        )

        res.cookie("accessToken", accessToken)
        res.cookie("refreshToken", refreshToken)


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

    deleteUser = async (id) => {
        await this.#userModel.findByIdAndDelete(id)

        return "User tozlandi"
    }
}

export default new UserService();