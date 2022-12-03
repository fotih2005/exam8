import { costumErrorHandeler } from "../../errors/errorHandler.js";
import { addBank, bank, deleteBank, getBakns, updateBank } from "./model.js";

export default {
  BANKS: async (_, res, next) => {
    const banks = await bank().catch(err => 
      next(new costumErrorHandeler(err.message, 500))  
    )
    if(banks){
      res.status(200).json({
        status: 200,
        data: banks
      })
    } else {
      res.status(404).json({
        status: 404,
        message: 'Banklar yo`q'
      })
    }
  },
  GET_BANKS: async (req, res, next) => {
    const { maxYear, minYear, maxSum, minSum } = req.query;
    const bakns = await getBakns(maxYear, minYear, maxSum, minSum).catch(
      (err) => next(new costumErrorHandeler(err.message, 503))
    );
    res.status(200).json({
      status: 200,
      data: bakns,
    });
  },
  ADD_BANK: async (req, res, next) => {
    const { bank_name, bank_img, max_year, min_year, max_sum, min_sum, percentage } = req.body;
    await addBank(bank_name, bank_img, max_year, min_year, max_sum, min_sum, percentage).catch((err) =>
      next(new costumErrorHandeler(err.message, 500))
    );
    res.status(200).send("New room added");
  },
  UPDATE_BANK: async (req, res, next) => {
    const { bank_name, bank_img, max_year, min_year, max_sum, min_sum, percentage } = req.body
    const { bank_id } = req.params
    await updateBank(bank_name, bank_img, max_year, min_year, max_sum, min_sum, percentage, bank_id).catch(err =>
      next(new costumErrorHandeler(err.message, 500))  
    );
    res.status(200).json({
      status: 200,
      message: 'Bank updated'
    })
  },
  DELETE_BANK: async (req, res, next) => {
    const { bank_id } = req.params
    await deleteBank(bank_id).catch(err => 
      next(new costumErrorHandeler(err.message, 500))  
    );
    res.status(200).json({
      status: 200,
      message: 'Bank deleted'
    })
  }
};
