import express, { Request, Response, Router } from 'express';
import Plants from './Plants';

const app = express();
const plantsModule = new Plants();

app.use(express.json());

const plantsRouter = Router();

const PORT = process.env.PORT || 3000;

plantsRouter.get('/', async (req: Request, res: Response) => {
  const plants = await plantsModule.getPlants();
  res.status(200).json(plants);
});

plantsRouter.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  const plant = await plantsModule.getPlantById(id);

  if (!plant) return res.status(404).json({ message: 'Plant not Found!' });
  res.status(200).json(plant);
});

plantsRouter.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  const deleteSuccess = await plantsModule.removePlantById(id);

  if (!deleteSuccess) return res.status(404).json({ message: 'Plant not Found!' });
  res.status(204).end();
});

plantsRouter.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const newPlant = req.body;

  const plant = await plantsModule.editPlant(id, newPlant);
  res.status(200).json(plant);
});

plantsRouter.post('/', async (req: Request, res: Response) => {
  const newPlant = req.body;

  const plant = await plantsModule.savePlant(newPlant);
  res.status(201).json(plant);
});

app.use('/plants', plantsRouter);

app.get('/sunny/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  const plant = await plantsModule.getPlantsThatNeedsSunWithId(id);
  res.status(200).json(plant);
});

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));