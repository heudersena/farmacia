import './config/env';
import { serverHttp } from './http';
import './websocket';

serverHttp.listen(3333, () => console.log('server running http://localhost:3333'));
