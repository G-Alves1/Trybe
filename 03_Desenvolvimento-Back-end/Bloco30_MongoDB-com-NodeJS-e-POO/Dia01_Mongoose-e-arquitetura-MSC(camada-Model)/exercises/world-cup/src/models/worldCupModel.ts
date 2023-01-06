import { model as createModel } from 'mongoose';
import { WorldCupSchema, IWorldCup } from '../Schemas/worldCup';

class WorldCupModel {
  constructor(private worldCupModel = createModel<IWorldCup>(
    'tournaments',
    WorldCupSchema,
  )) {}

  public async getWorldCups(): Promise<IWorldCup[] | undefined> {
    const worldCups = await this.worldCupModel.find();
    return worldCups;
  }

  public async getWorldCupByYear(
    year: number,
  ): Promise<IWorldCup[] | undefined> {
    const worldCup = await this.worldCupModel.find({ year });
    return worldCup;
  }

  public async insertWorldCup(
    worldCupData: IWorldCup,
  ): Promise<IWorldCup | unknown> {
    const worldCup = await this.worldCupModel.create(worldCupData);
    return worldCup;
  }

  public async updateWorldCup(
    updateData: object,
    worldCupYear: number,
  ): Promise<IWorldCup | null> {
    const updatedWorldCup = await this
      .worldCupModel.findOneAndUpdate({
        year: worldCupYear,
      }, {
        ...updateData,
      }, {
        new: true,
      });
    return updatedWorldCup;
  }

  public async deleteWorldCup(year: number): Promise<IWorldCup | null> {
    const deletedWorldCup = await this.worldCupModel.findOneAndDelete({ year });
    return deletedWorldCup;
  }

  public async runnerUp(term: string): Promise<IWorldCup[] | null> {
    const data = await this.worldCupModel.find(
      { runnerUp: { $regex: term, $options: 'i' } },
    );
    return data;
  }
}

export default WorldCupModel;