import { Tv } from '../Classes/Tv';

interface IRemoteControl {
  turnTVOn(tv: Tv): void;
  turnTVOff(tv: Tv): void;
  increaseVolume(tv: Tv): void;
  decreaseVolume(tv: Tv): void;
}

export { IRemoteControl };