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

export const editCareer = async (req, res) => {
    const { career_name } = req.body;
    const editData = Career.findByIdAndUpdate(req.params.id, { career_name: career_name });

    return res.status(200).json("Career name edited");
}

export const deleteCareer = async (req, res) => {
    const deleteData = Career.findByIdAndDelete(req.params.id);

    return res.status(200).json("Career deleted");
}