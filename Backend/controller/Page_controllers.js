const Page = require("../models/Page");

class Page_controllers {
  async create(req, res, next) {
    const { id } = req.body;
    try {
      const exist = await Page.findOne({ where: { name: req.body?.name } });
      console.log("exist ", exist);
      if (exist && !id) return next("Page name already exist!");

      let page;
      if (id) {
        await Page.update(req.body, { where: { id } });
        page = await Page.findOne({ where: { id } });
      } else {
        page = await Page.create(req.body);
      }
      return res.status(id ? 200 : 201).json({ page });
    } catch (error) {
      next(error);
    }
  }

  async read(req, res, next) {
    const { status } = req.query;

    const conditions = {};

    if (status) {
      conditions.where = {
        status,
      };
    }

    try {
      const pages = await Page.findAll({ ...conditions });

      res.status(200).json({ pages });
    } catch (error) {
      next(error);
    }
  }

  async readSinglePage(req, res, next) {
    const { page_url_name } = req.params;
    try {
      const page = await Page.findOne({
        where: { name: page_url_name },
      });

      res.status(200).json({ page });
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    const { page_id } = req.body;

    const conditions = {
      where: { id: page_id },
    };

    try {
      let updated;
      if (page_id) {
        await Page.update(req.body, { ...conditions });
        updated = await Page.findOne({ ...conditions });
      }

      res.status(200).json({ page: updated });
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    const { page_id } = req.body;
    try {
      let deleted;

      if (page_id) {
        deleted = await Page.findOne({
          where: { id: page_id },
        });

        await Page.destroy({ where: { id: page_id } });
      }

      res.status(200).json({ deleted });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new Page_controllers();
