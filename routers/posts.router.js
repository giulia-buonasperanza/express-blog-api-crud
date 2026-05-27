import express from 'express';
import { index, show , store, update, modify, destroy} from '../controllers/posts.js';


const router = express.Router();

//INDEX (http://localhost:3000/posts)
router.get('/', index);

//SHOW (http://localhost:3000/posts/1)
router.get('/:id', show);

//STORE (http://localhost:3000/posts)
router.post('/', store );

//UPDATE (http://localhost:3000/posts/1)
router.put('/:id', update);

//MODIFY (http://localhost:3000/posts/1)
router.patch('/:id', modify);

//DESTROY (html://localhost:3000/posts/1)
router.delete('/:id', destroy);





export default router;