import { v1 } from "uuid"
const gerarLote = () => v1().split("-")[0].toLocaleUpperCase();
export { gerarLote }