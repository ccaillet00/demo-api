import { type Request, type Response, type Express } from "express"
import { userTable } from "../db/schema"
import { db } from "../db/database"
import { eq } from "drizzle-orm"

export const iniializeAuthAPI = (app: Express) => {
    app.post("api/auth/register", async (req: Request, res: Response) => {
        const { username, password } = req.body;
        // Insert a new user into database
    })
}
        // Here you would normally add code to save the user to the database
        // For demonstration, we will just return a success message)