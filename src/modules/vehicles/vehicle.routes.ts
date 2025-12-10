import { Router } from "express";
import { vehiclesController } from "./vehicle.controller";

const router = Router()
router.post("/", vehiclesController.createVehicle)
router.get("/", vehiclesController.getVehicles)
router.get("/:vehicleId", vehiclesController.getSingleVehicle)

export  const vehicleRoutes = router;