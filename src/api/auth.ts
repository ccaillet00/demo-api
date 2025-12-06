import { type Request, type Response, type Express } from "express"
import bcrypt from "bcrypt"
import { userTable } from "../db/schema"
import { db } from "../db/database"

export const iniializeAuthAPI = (app: Express) => {

    app.post("/api/auth/register", async (req: Request, res: Response) => {
        const { username, password } = req.body;
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);

        const newUser = await db.insert(userTable).values({username: username, password: hashedPassword})
        res.send({ message: "User registered successfully", user: newUser });
    })
}