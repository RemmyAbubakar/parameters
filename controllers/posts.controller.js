const getPosts = (req, res) => {
  res.status(200).send(`Get All Posts filtered by "${req.query.title}"`);
};

const getPost = (req, res) => {
  res.status(200).send(`Post with ID ${req.params.postId} has posted`)
};

const createPost = (req, res) => {
  res.status(201).send("Create post");
};

const updatePost = (req, res) => {
  res.status(200).send(`Post with ID ${req.params.postId} has been updated`);
};

const deletePost = (req, res) => {
  res.status(200).send(`Post with ID ${req.params.postId} has been deleted`);
};

module.exports = {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
};
