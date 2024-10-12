import { titles } from '../storage';

interface Titles {
  _id: number;
  name: string;
}

class TitlesService {
  get(): Titles[] {
    return titles;
  }
}

const titlesService = new TitlesService();

export default titlesService;
