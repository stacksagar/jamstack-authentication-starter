const Setting = require("../models/Setting");

class Setting_controllers {
  async create(req, res, next) {
    try {
      const setting = await Setting.create(req.body);
      res.status(201).json({ setting });
    } catch (error) {
      next(error);
    }
  }

  async read(_req, res, next) {
    try {
      const setting = await Setting.findOne({
        where: { id: 1 },
        attributes: ["client", "admin"],
      });
      res.status(201).json({ setting });
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      await Setting.update(req.body, { where: { id: 1 } });
      const setting = await Setting.findOne({
        where: { id: 1 },
        attributes: ["client", "admin"],
      });
      res.status(201).json({ setting });
    } catch (error) {
      next(error);
    }
  }

  async delete() {}

  async reset_unseen_exchang(_req, res, next) {
    try {
      const setting = await Setting.findOne({ where: { id: 1 } });
      await Setting.update(
        {
          admin: { ...setting?.admin, unseen_exchange: 0 },
        },
        { where: { id: 1 } }
      );

      res.status(200).json({ message: "ok" });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new Setting_controllers();
