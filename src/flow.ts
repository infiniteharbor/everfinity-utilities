import { Repeater } from "./arrays";

export interface autoclose {
  close(): void;
}

export interface flowbase<T, F extends flowbase<T, F>> extends autoclose {
  repeat(): Repeater<T>;
  sequential(): F;
  parallel(): F;
  unordered(): F;
  onClose(): F;
}

export interface flow<T> extends flowbase<T, flow<T>> {
  filter(predict: (t: T) => boolean): flow<T>;
  map<R>(mapper: (t: T) => R): flow<R>;
  distinct(): flow<T>;
  sorted(): flow<T>;
  limited(maxSize: number): flow<T>;
  skip(n: number): flow<T>
  forEach(consume: (t: T) => void): void;
  toArray(): Object[];
}