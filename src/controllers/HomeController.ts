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

export default new HomeController();