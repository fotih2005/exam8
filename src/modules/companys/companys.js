import { costumErrorHandeler } from "../../errors/errorHandler.js";
import {
  addCompany,
  addComplecs,
  addRoom,
  complecs,
  deleteCompany,
  deleteComplecs,
  getCompanys,
  getComplecs,
  getComplecsRooms,
  getRooms,
  updateCompany,
  updateComplecs,
} from "./model.js";

export default {
  GET_COMPANYS: async (_, res, next) => {
    const companys = await getCompanys().catch((err) =>
      next(new costumErrorHandeler(err.message, 503))
    );
    res.status(200).json({
      status: 200,
      data: companys,
    });
  },
  GET_COMPLECS: async (req, res, next) => {
    const { id } = req.params;
    const complecs = await getComplecs(id).catch((err) =>
      next(new costumErrorHandeler(err.message, 503))
    );
    res.status(200).json({
      status: 200,
      data: complecs,
    });
  },
  COMPLECS_ROOMS: async (req, res, next) => {
    const { complecsId } = req.params;
    const complecsRooms = await getComplecsRooms(complecsId).catch((err) =>
      next(new costumErrorHandeler(err.message, 503))
    );
    res.status(200).json({
      status: 200,
      data: complecsRooms,
    });
  },
  GET_ROOMS: async (req, res, next) => {
    const { roomId, complecsId } = req.query;
    const rooms = await getRooms(complecsId, roomId).catch((err) =>
      next(new costumErrorHandeler(err.message, 503))
    );
    res.status(200).json({
      status: 200,
      data: rooms,
    });
  },
  GET_COMPLECES: async (_, res, next) => {
    const complecses = await complecs().catch((err) =>
      next(new costumErrorHandeler(err.message, 500))
    );
    res.status(200).json({
      status: 200,
      data: complecses,
    });
  },
  ADD_COMPANY: async (req, res, next) => {
    const { company_name, company_img } = req.body;
    await addCompany(company_name, company_img).catch((err) =>
      next(new costumErrorHandeler(err.message, 503))
    );
    res.send("New company added");
  },
  ADD_COMPLECS: async (req, res, next) => {
    const { companyId, complecsName } = req.body;
    await addComplecs(companyId, complecsName).catch((err) =>
      next(new costumErrorHandeler(err.message, 500))
    );
    res.status(200).send("New complecs added");
  },
  ADD_ROOM: async (req, res, next) => {
    const { complecsId, roomNum, sum, square, location } = req.body;
    await addRoom(complecsId, roomNum, sum, square, location).catch((err) =>
      next(new costumErrorHandeler(err.message, 500))
    );
    res.status(200).send("New room added");
  },
  UPDATE_COMPANY: async (req, res, next) => {
    const { company_name, company_img } = req.body;
    const { id } = req.params;
    updateCompany(company_name, company_img, id).catch((err) =>
      next(new costumErrorHandeler(err.message, 500))
    );
    res.send("Company updated");
  },
  UPDATE_COMPLECS: async (req, res, next) => {
    const { companyId, complecsName } = req.body;
    const { complecsId } = req.params;
    updateComplecs(companyId, complecsName, complecsId).catch((err) =>
      next(new costumErrorHandeler(err.message, 500))
    );
    res.status(200).send("Complecs updated");
  },
  DELETE_COMPLECS: async (req, res, next) => {
    const { complecs_id } = req.params;
    await deleteComplecs(complecs_id).catch((err) =>
      next(new costumErrorHandeler(err.message, 500))
    );
    res.status(200).json({
      status: 200,
      message: "Complecs deleted",
    });
  },
  DELETE_COMPANY: async (req, res, next) => {
    const { company_id } = req.params;
    await deleteCompany(company_id).catch((err) =>
      next(new costumErrorHandeler(err.message, 500))
    );
    res.status(200).json({
      status: 200,
      message: "Company deleted",
    });
  },
};
