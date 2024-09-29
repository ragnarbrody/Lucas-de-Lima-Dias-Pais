import express, { RequestHandler } from 'express';
import { createResource, getResources, getResourceById, updateResource, deleteResource } from '../controllers/resourceController';

const router = express.Router();

router.post('/', createResource as RequestHandler);
router.get('/', getResources as RequestHandler);
router.get('/:id', getResourceById as RequestHandler);
router.put('/:id', updateResource as RequestHandler);
router.delete('/:id', deleteResource as RequestHandler);

export default router;