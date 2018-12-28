import { IllegalStateException } from "./exceptions";

export class WatchTask {
  name: string;
  millis: number;
  constructor(name?: string, millis?: number) {
    this.name = name ? name : undefined; 
    this.millis = millis ? millis : undefined;
  }

  public getInSeconds(): number {
    return this.millis / 1000.00;
  }
} 

export default class StopWatch {
  private id: string = "unkept";
  private storeTaskList: boolean = true;

  private taskList: WatchTask[] = [];
  private lastTask: WatchTask;
  private currentTaskName: string;
  private taskCount: number;

  private startTime: number;
  private totalTime: number;

  private running: boolean = false;

  constructor(id?: string) {
    this.id = id ? id : undefined;
  }

  public getId() {
    return this.id;
  }

  public setStoreTaskList(store: boolean): void { this.storeTaskList = store; }

  public start(taskName?: string) {
    if( this.running ) {
      throw new IllegalStateException("Cannot start stopwatch, it is already running");
    }
    this.running = true;
    this.currentTaskName = taskName ? taskName : undefined;
    this.startTime = new Date().getUTCMilliseconds();
  }

  public stop() {
    if( !this.running ) {
      throw new IllegalStateException("Cannot stop stopwatch, it not running");
    }
    const lastTime = new Date().getUTCMilliseconds() - this.startTime;
    this.totalTime += lastTime;
    this.lastTask = new WatchTask(this.currentTaskName, lastTime);
    if(this.storeTaskList) {
      this.taskList.push(this.lastTask)
    }
    ++this.taskCount;
    this.running = false;
    this.currentTaskName = null;
  }

  public isRunning(): boolean {
    return this.running;
  }

  public getCurrentTaskName(): string {
    return this.currentTaskName;
  }

  public getLastTaskTimeMillis(): number {
    if(!this.lastTask) {
      throw new IllegalStateException("No tasks ran yet, can't get last interval");
    }
    return this.lastTask.millis;
  }

  public getLastTaskName(): string {
    if(!this.lastTask) {
      throw new IllegalStateException("No tasks ran yet, can't get last task name");
    }
    return this.lastTask.name;
  }

  public getLastTask(): WatchTask {
    if(!this.lastTask) {
      throw new IllegalStateException("No tasks ran yet, can't get last task");
    }
    return this.lastTask;
  }

  public getTotalTimeMillis(): number {
    return this.totalTime;
  }

  public getTotalTimeSeconds(): number {
    return this.totalTime / 1000.00;
  }

  public getTaskCount() {
    return this.taskCount;
  }

  public getTaskList(): WatchTask[] {
    if(!this.storeTaskList) {
      throw new IllegalStateException("Tasks were allowed to be stored");
    }
    return this.taskList;
  }

  public summary(short: boolean = false) {
    let sum: string = `StopWatch '${this.id}': running time is ${this.totalTime}ms.\n`
    if(short) {
      return sum;
    }
    if(!this.storeTaskList) {
      sum += `No tasks were stored.`;
    } else {
      sum += `---------------------------------------\n`;
      sum += `ms           %          task\n`;
      sum += `---------------------------------------\n`;
      for (let task of this.taskList) {
        sum += `${task.millis}ms         `;
        sum += `${task.getInSeconds() / this.getTotalTimeSeconds()}%         `;
        sum += `${task.name}\n`;
      }
    }
    return sum;
  }
}