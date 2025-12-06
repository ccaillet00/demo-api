import { type Request, type Response, type Express } from "express"
import { twitterTable } from "../db/schema"
import { db } from "../db/database"
import { eq } from "drizzle-orm"

//type Tweet = {id: number, tweet: string} // typisieren für die const tweet

export const initializePostsAPI = (app: Express) => {

    //const post: Tweet[] = []
    

    app.get("/api/posts", async (req: Request, res: Response) => {
        const dbPosts = await db.select().from(twitterTable)
        res.send(dbPosts)
    })

    app.post("/api/posts", async (req: Request, res: Response) => {
        const createDBPost = await db.insert(twitterTable).values({tweet: req.body.tweet})
        res.send(createDBPost)
    })

    app.put("/api/posts/:id", async (req: Request, res: Response) => {
        const updateDBPost = await db.update(twitterTable)
        .set({tweet: req.body.tweet})
        .where(eq(twitterTable.id, parseInt(req.params.id ?? "0")))
        res.send(updateDBPost)
    })

    app.delete("/api/posts/:id", async (req: Request, res: Response) => {
        const deleteDBPost = await db.delete(twitterTable).where(eq(twitterTable.id, parseInt(req.params.id ?? "0")))
        res.send({ message: "Tweet gelöscht", deleted: deleteDBPost })
    })
}