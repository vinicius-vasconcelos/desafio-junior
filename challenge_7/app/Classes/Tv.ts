import { ITv } from '../interfaces/ITv';

/**
 * Representa um dispositivo de TV.
 */
class Tv implements ITv {
  private _serialNumber: string;
  private _brand: string;
  private _volume: number;
  private _isOn: boolean;

  /**
   * Cria uma nova instância de Tv.
   * @param {string} brand - A marca da TV.
   */
  constructor(brand: string) {
    this._serialNumber = this.generateSerialNumber();
    this._brand = brand;
    this._volume = 10;
    this._isOn = false;
  }

  /**
   * Gera um número serial para a TV.
   * @returns {string} - O número serial gerado.
   * @private
   */
  private generateSerialNumber(): string {
    const characters = '0123456789ABCDEF';
    let serial = 'BR-';

    for (let i = 0; i < 12; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      serial += characters[randomIndex];
    }
    return serial;
  }

  /**
   * Verifica se a TV está ligada.
   * @returns {boolean} - Verdadeiro se a TV está ligada, falso caso contrário.
   * @private
   */
  private isOn(): boolean {
    return this._isOn;
  }

  public turnOn(): void {
    if (!this.isOn())
      this._isOn = true;
    console.log('Tv ligada!');
  }

  public turnOff(): void {
    this._isOn = false;
    console.log('Tv desligada!');
  }

  public increaseVolume(): void {
    if (!this.isOn() && this._volume < 90) {
      this._volume++;
      console.log(`Volume: ${this._volume}`);
    } else
      console.log('Tv deligada ou volume no máximo');
  }

  public decreaseVolume(): void {
    if (this.isOn() && this._volume > 0) {
      this._volume--;
      console.log(`Volume: ${this._volume}`);
    } else
      console.log('Tv deligada ou volume no mínimo');
  }

  public getSerialNumber(): string { return this._serialNumber; }

  public getBrand(): string { return this._brand; }

  public getVolume(): number { return this._volume; }
}

export { Tv };