const Post = require("../models/Post");
const textToSlug = require("../utils/textToSlug");

class Post_controllers {
  async create(req, res, next) {
    const { id } = req?.body;
    try {
      const exist = await Post.findOne({
        where: { slug: textToSlug(req.body?.title) },
      });
      if (exist && !id) return next("Title already exist!");
      let post;
      if (id) {
        await Post.update(
          {
            ...req?.body,
          },
          { where: { id } }
        );
        post = await Post.findOne({ where: { id } });
      } else {
        post = await Post.create({
          slug: textToSlug(req?.body?.title),
          ...req?.body,
        });
      }
      return res.status(id ? 200 : 201).json({ post });
    } catch (error) {
      next(error);
    }
  }
  async read(req, res, next) {
    try {
      const status = req?.query?.status || "";
      const limit = Number(req?.query?.limit) || 4;
      const page = Number(req?.query?.page) || 1;
      const sort = req?.query?.sort || "";
      const order = req?.query?.order || "";
      const sortBy = (typeof sort === "object" ? sort[0] : sort || "")
        ?.toLowerCase()
        ?.trim();
      const orderBy = (typeof order === "object" ? order[0] : order || "")
        ?.toLowerCase()
        ?.trim();
      const offset = limit * (page - 1);
      const conditions = {
        where: {},
        order: [],
      };
      if (page && limit) {
        conditions.offset = offset;
        conditions.limit = limit;
      }
      if (status) {
        conditions.where.status = status;
      }
      if (
        (sortBy === "id" || sortBy === "title") &&
        (orderBy === "ascending" || orderBy === "descending")
      ) {
        conditions.order.push([
          sortBy,
          orderBy === "ascending" ? "ASC" : "DESC",
        ]);
      }
      const posts = await Post.findAndCountAll({
        ...conditions,
      });
      res.status(201).json({
        totalPages: Math.ceil(posts.count / limit),
        totalItems: posts.count,
        currentPage: page,
        posts: posts.rows,
      });
    } catch (error) {
      next(error);
    }
  }
  async readSinglePost(req, res, next) {
    const { slug } = req.params;
    try {
      const post = await Post.findOne({
        where: { slug: slug },
      });
      res.status(200).json({ post });
    } catch (error) {
      next(error);
    }
  }
  async update(req, res, next) {
    const { post_id } = req.body;
    const conditions = {
      where: { id: post_id },
    };
    try {
      let updated;
      if (post_id) {
        await Post.update(req.body, { ...conditions });
        updated = await Post.findOne({ ...conditions });
      }
      res.status(200).json({ post: updated });
    } catch (error) {
      next(error);
    }
  }
  async delete(req, res, next) {
    const { post_id } = req.body;
    try {
      let deleted;
      if (post_id) {
        deleted = await Post.findOne({
          where: { id: post_id },
        });
        await Post.destroy({ where: { id: post_id } });
      }
      res.status(200).json({ deleted });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new Post_controllers();
