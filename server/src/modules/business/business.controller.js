import businessService from "./business.service.js";

class BusinessController {
  #businessService;
  constructor() {
    this.#businessService = businessService;
  }

  getAllBusinesses = async (req, res, next) => {
    try {
      const data = await this.#businessService.getAllBusinesses();

      res.send(data);
    } catch (error) {
      next(error);
    }
  };

  getOneBusiness = async (req, res, next) => {
    try {
      const { id } = req.params;

      const data = await this.#businessService.getOneBusiness(id);

      res.send(data);
    } catch (error) {
      next(error);
    }
  };

  createBusiness = async (req, res, next) => {
    try {
      const { name, description, address, location, website, imageUrl, ownerId, categoryId } =
        req.body;

      const data = await this.#businessService.createBusiness(
        name,
        description,
        address,
        location,
        website,
        imageUrl,
        ownerId,
        categoryId
      );

      res.send(data);
    } catch (error) {
      next(error);
    }
  };

  updateBusiness = async (req, res, next) => {
    try {
      const { id } = req.params;
      const { name, description, address, location, website, imageUrl } =
        req.body;

      const data = await this.#businessService.createBusiness(
        id,
        name,
        description,
        address,
        location,
        website,
        imageUrl
      );

      res.send(data);
    } catch (error) {
      next(error);
    }
  };

  deleteBusiness = async (req, res, next) => {
    try {
      const { id } = req.params;
      await this.#businessService.deleteBusiness(id);
    } catch (error) {
      next(error);
    }
  };
}

export default new BusinessController();
