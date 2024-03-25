import { Tv } from '../Classes/Tv';

/**
 * Interface para controle remoto.
 * Define métodos para controlar uma TV.
 * @interface
 * @implements {turnTVOn(tv: Tv): void} - Método de ligar a TV
 * @implements {turnTVOff(tv: Tv): void} - Método de desligar a TV
 * @implements {increaseVolume(tv: Tv): void} - Método de aumentar o volume da TV
 * @implements {decreaseVolume(tv: Tv): void} - Método de diminui o volume da TV
 */
interface IRemoteControl {
  turnTVOn(tv: Tv): void;
  turnTVOff(tv: Tv): void;
  increaseVolume(tv: Tv): void;
  decreaseVolume(tv: Tv): void;
}

export { IRemoteControl };