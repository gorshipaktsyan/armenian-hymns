import { subtitles } from '../storage';
import { Subtitles } from '../types';

class SubtitlesService {
  get(): Subtitles[] {
    return subtitles;
  }
  filterSubsByTitleId(titleId: number): Subtitles[] {
    return subtitles.filter((sub) => sub.title === titleId);
  }
}

const subtitlesService = new SubtitlesService();

export default subtitlesService;
