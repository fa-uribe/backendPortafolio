import Career from '../models/Career'

export const createCareer = async (req, res) => {
    const { career_name } = req.body;
    const newCareer = Career({ career_name });
    const saveCareer = await newCareer.save()

    return res.status(200).json("Career saved successfully");

}

export const careerList = async (req, res) => {
    const data = await Career.find()
    return res.status(200).json(data)
}