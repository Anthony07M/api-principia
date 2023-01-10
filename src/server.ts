import { app } from "./app";
import dotenv from 'dotenv'
dotenv.config();

const PORT = process.env.PORT || 3000

app.listen(3333, () => console.log(`runnig in port ${PORT}`));