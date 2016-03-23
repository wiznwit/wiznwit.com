import { Magic, conjure } from 'magic-root';
import { config } from './config';

const app = conjure(config);

app.set('cwd', __dirname);

Magic(app);
