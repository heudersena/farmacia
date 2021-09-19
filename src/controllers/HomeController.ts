import { Request, Response } from "express"
type IProps = {
  message : string
}
class HomeController {
  index(request: Request, response: Response) {
    // throw new Error("Error")
    response.json({ message: "Home" })
  }
}

// async index(request: Request, response: Response) { }

// async getById(request: Request, response: Response) { }

// async store(request: Request, response: Response) { }

// async update(request: Request, response: Response) { }

// async delete(request: Request, response: Response) { }

export default new HomeController();