import type { Express } from "express"
import { initializePostsAPI } from "./api"
import { iniializeAuthAPI } from "./auth"

export const initializeAPI = (app: Express) => {
    initializePostsAPI(app)
    iniializeAuthAPI(app)
}
/*
export const initializeAuthAPIWrapper = (app: Express) => {
    iniializeAuthAPI(app)
}*/