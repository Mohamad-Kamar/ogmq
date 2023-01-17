import { InstaceConsumer } from 'src/consumer/dto/instance-consumer.dto';
import { InstanceConsumerCollection } from '../../Types';

export interface IQueue {
  queueKey: string;
  queueType: string;
  consumers: InstanceConsumerCollection;
  getConsumers(): InstanceConsumerCollection;
  addConsumer(instanceConsumer: InstaceConsumer): void;
  getConsumer(consumerID: string): InstaceConsumer;
  getPublishingConsumers(): InstaceConsumer[];
}
