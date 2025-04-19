import businessModel from "./business.model.js";

class BusinessService {
  #businessModel;
  constructor() {
    this.#businessModel = businessModel;
  }

  getAllBusinesses = async () => {
    const businesses = await this.#businessModel.find().populate('ownerId', "name email").populate("categoryId", "name");

    return {
      message: "succes",
      count: businesses.length,
      data: businesses,
    };
  };

  getOneBusiness = async (id) => {
    const business = await this.#businessModel.findById(id).populate('ownerId', "name email").populate("categoryId", "name");

    return {
      message: "Succes",
      data: business,
    };
  };

  createBusiness = async (
    name,
    desscription,
    address,
    location,
    website,
    imageUrl,
    ownerId,
    categoryId
  ) => {
    const createdBusiness = await this.#businessModel.create({
      name: name,
      description: desscription,
      address: address,
      location: location,
      website: website,
      imageUrl: imageUrl,
      ownerId: ownerId,
      categoryId: categoryId
    });

    return {
      message: "Succes",
      data: createdBusiness,
    };
  };

  updateBusiness = async (
    id,
    name,
    description,
    address,
    location,
    website,
    imageUrl
  ) => {
    const updatedBusiness = await this.#businessModel.findByIdAndUpdate(id, {
      name: name,
      description: description,
      address: address,
      location: location,
      website: website,
      imageUrl: imageUrl,
    });

    return {
      message: "Succes",
      data: updatedBusiness,
    };
  };

  deleteBusiness = async (id) => {
    await this.#businessModel.findByIdAndDelete(id);

    return {
      message: "Succes",
    };
  };
}

export default new BusinessService();
