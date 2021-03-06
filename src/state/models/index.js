import { action } from 'easy-peasy';
import Content from '../../../public/data/data';
import { colorMode } from '../../utils/';


export default {
  ...Content,
  ratio: '',
  setRatio: action((state, payload) => {
    state.ratio = payload;
  }),
  currentSlide: 0,
  setCurrentSlide: action((state, payload) => {
    state.currentSlide = payload;
  }),
  currentProject: '',
  setCurrentProject: action((state, payload) => {
    state.currentProject = payload;
  }),
  color: colorMode(['#000', '#E7E7E7']),
};
