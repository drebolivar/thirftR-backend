const { Comment } = require("../models");

const GetComments = async (req, res) => {
  try {
    const comments = await Comment.findAll();
    res.send(comments);
  } catch (error) {
    throw error;
  }
};
const CreateComment = async (req, res) => {
  try {
    const createComment = await Comment.create({ ...req.body });
    res.send(createComment);
  } catch (error) {
    throw error;
  }
};

const UpdateComment = async (req, res) => {
  try {
    const updateComment = await Comment.update(
      { ...req.body },
      { where: { id: req.params.comment_id } }
    );
    res.send(updateComment);
  } catch (error) {
    throw error;
  }
};

const DeleteComment = async (req, res) => {
  try {
    await Commment.destroy({ where: { id: req.params.comment_id } });
    res.send({
      msg: "Post Deleted",
      payload: req.params.comment_id,
      status: "Ok",
    });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  GetComments,
  CreateComment,
  UpdateComment,
  DeleteComment,
};
