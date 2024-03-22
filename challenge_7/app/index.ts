import { Tv } from './Classes/Tv';
import { RemoteControl } from './Classes/RemoteControl';

const lgTv = new Tv('lg');
const samsungTv = new Tv('Samsung');
const sonyTv = new Tv('Sony');

const lgControl = new RemoteControl([lgTv]);
const samsungControl = new RemoteControl([samsungTv]);
const sonyControl = new RemoteControl([sonyTv]);
const universalControl = new RemoteControl([lgTv, samsungTv, sonyTv]);

lgControl.turnTVOn(lgTv);
sonyControl.turnTVOff(lgTv);
universalControl.turnTVOff(lgTv);

