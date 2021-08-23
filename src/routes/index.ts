import { Router } from "express";

import { categoriesRoutes } from "./categories.routes";
import { specificationsRoutes } from "./specifications.routes";

const router = Router();
// lelezinha te amo

router.use("/categories", categoriesRoutes);
router.use("/specifications", specificationsRoutes);

export { router };
