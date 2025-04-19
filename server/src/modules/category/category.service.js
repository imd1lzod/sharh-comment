import categoryModel from "./category.model.js"


class CategoryService {
    #categoryModel
    constructor() {
        this.#categoryModel = categoryModel
    }

    getAllCategories = async () => {
        // console.log(this.#userModel);
        const categories = await this.#categoryModel.find()
        
        
        return {
            message: "succes",
            count: categories.length,
            data: categories
        }
    }

    getOneCategory = async (id) => {
        const category = await this.#categoryModel.findById(id)

        return {
            message: "succes",
            data: category
        }
    }

    createCategory = async (name, description) => {
        await this.#categoryModel.create(
            {
                name: name,
                description: description,
            }
        )

        return "Category yaratildi"
    }

    updateCategory = async (id, name, description) => {
        await this.#categoryModel.findByIdAndUpdate(id, {
            name: name,
            description: description
        })

        return "Category yangilandi"
    }

    deleteCategory = async (id) => {
        await this.#categoryModel.findByIdAndDelete(id)

        return "Category tozalandi"
    }
}

export default new CategoryService()