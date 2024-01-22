import data from './certifications.json';

export const getCertifications = () => {
    return data;
}

export default (req, res) => {
    const certifications = getCertifications();
    res.json(certifications);
}