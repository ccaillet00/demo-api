import type { Express } from "express"
import { initializePostsAPI } from "./api"

export const initializeAPI = (app: Express) => {
    initializePostsAPI(app)
}