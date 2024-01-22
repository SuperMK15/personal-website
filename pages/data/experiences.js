import data from './experiences.json';

export const getExperiences = () => {
  return data;
};

export default (req, res) => {
  const experiences = getExperiences();
  res.json(experiences);
};
