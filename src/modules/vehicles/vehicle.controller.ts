import { Request, Response } from "express";
import { vehiclesService } from "./vehicle.service";

const createVehicle = async(req: Request, res: Response) => {
    try {
        const result = await vehiclesService.createVehicle(req.body)
        res.status(201).json({
            success: true,
            message: "Vehicle Created Successfully",
            data: result.rows[0]
        })
    } catch (error: any) {
     res.status(500).json({
        success: false,
        message: error.message
     })
   }
}

const getVehicles = async(req: Request ,res: Response) => {
      try {
        const result = await vehiclesService.getVehicles()
        if(result.rows.length === 0){
           res.status(201).json({
            success: true,
            message: "No Vehicle Found",
            data: result.rows[0]
        }) 
        }
        res.status(201).json({
            success: true,
            message: "Vehicles retrieved successfully",
            data: result.rows[0]
        })
    } catch (error: any) {
     res.status(500).json({
        success: false,
        message: error.message
     })
   }
}
export const vehiclesController = {
    createVehicle, 
    getVehicles
}