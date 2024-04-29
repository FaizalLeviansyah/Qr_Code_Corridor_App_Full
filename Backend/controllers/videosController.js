import Videos from "../models/videosModel.js";

export const getVideos = async(req, res)=>{
    try {
        const response = await Videos.findAll();
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getVideosById = async(req, res)=>{
}

export const saveVideos = (req, res)=>{

}

export const updateVideos = async(req, res)=>{

}

export const deleteVideos = async(req, res)=>{

}