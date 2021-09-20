import { Request, Response } from "express"
import { generateUiidV1 } from "../config/helper";
type IProps = {
  message: string
}
class HomeController {
  index(request: Request, response: Response) {
    // throw new Error("Error")
    const unique = generateUiidV1();
    response.json({ message: "Home", unique})
  }
}

// async index(request: Request, response: Response) { }

// async getById(request: Request, response: Response) { }

// async store(request: Request, response: Response) { }

// async update(request: Request, response: Response) { }

// async delete(request: Request, response: Response) { }

export default new HomeController();