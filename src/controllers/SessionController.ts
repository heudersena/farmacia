import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { prisma } from "../prisma/client"

import { ERROR_MESSAGE, SUCCESS_MESSAGE, ERROR_USER_PASSWORD } from "../config/message";

class SessionController {
  async signin(request: Request, response: Response) {
    const { username, password } = request.body;
    if (!username || !password) response.json({ err: true, data: null, error: null, message: ERROR_USER_PASSWORD() });
    try {
      const user = await prisma.user.findFirst({ where: { username }, select: { username: true, password: true, role: true, id: true } });

      if (user == null) response.json({ err: true, data: null, error: null, message: ERROR_USER_PASSWORD() });
      if (!bcrypt.compareSync(password, user.password)) response.json({ err: true, data: null, error: null, message: ERROR_USER_PASSWORD() });

      const token = jwt.sign({ data: { id: user.id, username: user.username, role: user.role } }, process.env.JWT, { expiresIn: '8h' });
      response.json({ err: false, data: { token, username: user.username, role: user.role, id: user.id}, error: null, message: SUCCESS_MESSAGE() })

    } catch (error) {
      response.json({ err: true, data: null, error: error.message, message: ERROR_MESSAGE() })
    }
  }

  async signup(request: Request, response: Response) {

    try {
      const { username, email, password } = request.body;
      const salt = bcrypt.genSaltSync(10);
      const password_hash = bcrypt.hashSync(password, salt);
      const user = await prisma.user.create({
        data: {
          username,
          email,
          password: password_hash
        }
      })

      response.json({ err: false, data: user, error: null, message: SUCCESS_MESSAGE() })
    } catch (error) {
      response.json({ err: true, data: null, error: error.message, message: ERROR_MESSAGE() })
    }

  }

}

export default new SessionController();