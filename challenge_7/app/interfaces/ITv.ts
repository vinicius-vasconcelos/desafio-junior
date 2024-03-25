/**
 * Interface para TV.
 * Define métodos para controlar uma TV.
 * @interface
 * @implements {turnOn(): void} - Método de ligar a TV
 * @implements {turnOff(): void} - Método de desligar a TV
 * @implements {increaseVolume(): void} - Método de aumentar o volume da TV
 * @implements {decreaseVolume(): void} - Método de diminui o volume da TV
 */
interface ITv {
  turnOn(): void;
  turnOff(): void;
  increaseVolume(): void;
  decreaseVolume(): void;
}

export { ITv };