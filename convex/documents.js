import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// Create a new task with the given text
export const createProjects = mutation({
    args: { 
        name : v.string(),
        starting : v.string(),
        ending : v.string(),
        description : v.string(),
        liveUrl : v.string(),
        githubUrl : v.string(),
        technology : v.optional(v.array(v.string())),
        imageUrl : v.optional(v.string()),
        videoUrl : v.optional(v.string()),
    },
    handler: async (ctx, args) => {
        const newTaskId = await ctx.db.insert("projects", { 
            name: args.name ,
            starting: args.starting ,
            ending: args.ending ,
            description: args.description ,
            liveUrl: args.liveUrl ,
            githubUrl: args.githubUrl ,
            technology: args.technology ,
            imageUrl: args.imageUrl ,
            videoUrl: args.videoUrl ,

        });
        return newTaskId;
    },
});

export const getProjects = query({
    handler : async (ctx) => {
        return await ctx.db.query("projects").collect()
    }
})

export const deleteProject = mutation({
    args : {
        id : v.id("projects")
    },
    handler : async (ctx , args) => {
        await ctx.db.delete(args.id);
    }
})

export const getProjectsId = query({
    args : {
        id : v.id("projects")
    },
    handler : async (ctx , args) => {
        return await ctx.db.get(args.id);
    }
})