/**
 * Doubly-linked list
 * 
 * @param <E> The type of the elements linked
 * 
 * Example: 
 *  
 *   interface Person {
 *       name: string;
 *   }
 *
 *   const people: LinkedList<Person>;
 *   var s = people.name;
 *   var s = people.next.name;
 *   var s = people.next.next.name;
 *   var s = people.next.next.next.name;
 */
export type LinkedList<E> = E & { next: LinkedList<E> };

/**
 * Just like in Java you can extend Iterator to loop through anything you want. 
 * 
 * @param <T> Type of element you want to loop through.
 * 
 * Example:
 *  class Repeat<T> extends Iterator<T> {
 *    private notNull = null;
 *    hasNext() {
 *      if(!this.notNull) return true;
 *    }
 *    next() {
 *      if(!this.notNull) this.notNull = "anything";
 *      return this.notNull;
 *    }
 *  }
 *  const rep = new Repeat<String>();
 *  let x = 0;
 *  while(rep.hasNext()) {
 *    console.log(`x: ${x}`, rep.next());
 *    x++;
 *  }
 */
export abstract class Iterator<T> {
  protected abstract hasNext(): boolean;
  protected abstract next(): T;
  protected forEachRemaining?(action: () => any) {
    while(this.hasNext) {
      action.apply(this);
    }
  }
}

