import { IWorldCup } from '../Schemas/worldCup';
import WorldCupModel from '../models/worldCupModel';

class WorldCupService {
  constructor(private worldCupModel = new WorldCupModel()) {}

  public async getWorldCups(): Promise<IWorldCup[] | undefined> {
    const worldCups = await this.worldCupModel.getWorldCups();
    return worldCups;
  }

  public async getWorldCupByYear(
    year: number,
  ): Promise<IWorldCup[] | undefined> {
    const worldCup = await this.worldCupModel.getWorldCupByYear(year);
    return worldCup;
  }

  public async insertWorldCup(
    worldCupData: IWorldCup,
  ): Promise<IWorldCup | unknown> {
    const worldCup = await this.worldCupModel.insertWorldCup(worldCupData);
    return worldCup;
  }

  public async updateWorldCup(
    updateData: object,
    worldCupYear: number,
  ): Promise<IWorldCup | null> {
    const updatedWorldCup = await this
      .worldCupModel.updateWorldCup(updateData, worldCupYear);
    return updatedWorldCup;
  }

  public async deleteWorldCup(year: number): Promise<IWorldCup | null> {
    const deletedWorldCup = await this.worldCupModel.deleteWorldCup(year);
    return deletedWorldCup;
  }

  public async runnerUp(country: string): Promise<IWorldCup[] | null> {
    const data = await this.worldCupModel.runnerUp(country);
    if (!data || data.length === 0) {
      return null;
    }
    return data;
  }
}

export default WorldCupService;