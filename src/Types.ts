import { BehaviorSubject } from 'rxjs';
import { IQueue } from './structures/Queues/IQueue';

interface Constructable<T> {
  new (...args: any): T;
}

export type QueueConstructableClass = Constructable<IQueue>;

export type Consumer = {
  subject: BehaviorSubject<MessageEvent>;
  consumerID: string;
};

export type Consumers = {
  [key: string]: Consumer;
};
