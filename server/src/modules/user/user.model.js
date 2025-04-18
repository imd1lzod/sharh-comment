import mongoos from "mongoose"


const UserSchema = new  mongoos.Schema({
    name: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 100
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: 
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },
    password: {
        type: String,
        required: true,
        unique: true,
        minLength: 6,
        maxLength: 10
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true,
        match: /^(\+998|998)?([1-9][0-9])(\d{7})$/
    },
    imageUrl: {
        type: String,
    },
    role: {
        type: String,
        enum: ["user", "business_user", "admin"],
        default: "user"
    }
},
{
    collection: "users",
    versionKey: false,
    timestamps: true
}
)

export default mongoos.model("Users", UserSchema)