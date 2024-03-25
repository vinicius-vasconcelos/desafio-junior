import { IRemoteControl } from '../interfaces/IRemoteControl';
import { Tv } from './Tv';

/**
 * Representa um controle remoto para TVs.
 */
class RemoteControl implements IRemoteControl {
  private _compatibleTvs: Tv[];

  /**
   * Cria uma nova instância de RemoteControl.
   * @param {Tv[]} compatibleTvs - Um array de TVs compatíveis com este controle remoto.
   */
  constructor(compatibleTvs: Tv[]) {
    this._compatibleTvs = compatibleTvs;
  }

  /**
   * Verifica se o controle remoto é compatível com uma TV específica.
   * @param {Tv} tv - A TV para verificar a compatibilidade.
   * @returns {boolean} - True se o controle remoto for compatível, false caso contrário.
   * @private
   */
  private isCompatible(tv: Tv): boolean {
    return this._compatibleTvs.some((item) => item.getSerialNumber() === tv.getSerialNumber());
  }

  /**
   * Liga a TV especificada usando este controle remoto.
   * @param {Tv} tv - A TV para ligar.
   */
  public turnTVOn(tv: Tv): void {
    if(!this.isCompatible(tv))
      console.log(`Este controle não é compatível com ${tv.getBrand()} TV.`);
    else
      tv.turnOn();
  }

  /**
   * Desliga a TV especificada usando este controle remoto.
   * @param {Tv} tv - A TV para desligar.
   */
  public turnTVOff(tv: Tv): void {
    if(!this.isCompatible(tv))
      console.log(`Este controle não é compatível com ${tv.getBrand()} TV.`);
    else
      tv.turnOff();
  }

  /**
   * Aumenta o volume da TV especificada usando este controle remoto.
   * @param {Tv} tv - A TV para aumentar o volume.
   */
  public increaseVolume(tv: Tv): void {
    if(!this.isCompatible(tv))
      console.log(`Este controle não é compatível com ${tv.getBrand()} TV.`);
    else
      tv.increaseVolume();
  }

  /**
   * Diminui o volume da TV especificada usando este controle remoto.
   * @param {Tv} tv - A TV para diminuir o volume.
   */
  public decreaseVolume(tv: Tv): void {
    if(!this.isCompatible(tv))
      console.log(`Este controle não é compatível com ${tv.getBrand()} TV.`);
    else
      tv.decreaseVolume();
  }
}

export { RemoteControl };
