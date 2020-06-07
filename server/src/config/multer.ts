import multer from 'multer';
import path from 'path';
import crypto from 'crypto';

export default {
  storage: multer.diskStorage({
      destination: path.resolve(__dirname, '..', '..', 'uploads'),
      filename(request, file, callback) {
        const has = crypto.randomBytes(6).toString('hex');

        const fileName = `${has}-${file.originalname}`;

        callback(null, fileName);
     }
  }),
};