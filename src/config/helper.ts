import { v1 } from "uuid"
const generateUiidV1 = () => v1().split("-")[0].toLocaleUpperCase();
export { generateUiidV1 }