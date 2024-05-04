import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    documents : defineTable({
        id : v.id("projects"),
        name : v.string(),
        starting : v.string(),
        ending : v.string(),
        description : v.string(),
        liveUrl : v.string(),
        githubUrl : v.string(),
        technology : v.optional(v.array(v.string())),
        imageUrl : v.optional(v.string()),
        videoUrl : v.optional(v.string()),
    })
})