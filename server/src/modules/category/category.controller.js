import categoryService from "./category.service.js";

class CategoryController {
  #categoryService;
  constructor() {
    this.#categoryService = categoryService;
  }

  getAllCategories = async (req, res, next) => {
    try {
      const categories = await this.#categoryService.getAllCategories();
      res.send(categories);
    } catch (error) {
      next(error);
    }
  };

  createCategory = async (req, res, next) => {
    try {

      const { name, description } = req.body;
      await this.#categoryService.createCategory(name, description)
      res.send({
        message: "Category yaratildi",
      });
    } catch (error) {
      next(error);
    }
  };

  getOneCategory = async (req, res, next) => {
    try {
      const { id } = req.params;

      const data = await this.#categoryService.getOneCategory(id)

      res.send(data);
    } catch (error) {
      next(error);
    }
  };

  updateCategory = async (req, res, next) => {
    try {
      const { id } = req.params;
      const { name, description} = req.body;

      await this.#categoryService.updateCategory(id, name, description);

      res.send({
        message: "Category yangilandi"
      })
    } catch (error) {
      next(error);
    }
  };

  deleteCategory = async (req, res, next) => {
    try {
        const { id } = req.params

        await this.#categoryService.deleteCategory(id)

        res.send({
            message: "Category tozlanadi"
        })
    } catch (error) {
        
    }
  }
}


export default new CategoryController()