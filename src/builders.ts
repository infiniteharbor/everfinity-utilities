import { Pair } from "./index";

interface HierarchyNode<T> {
  child: T;
  parent: HierarchyNode<T>;
}

/**
 * *FlatHierarchyBuilder*
 * Inspired by ag-grid's need for an array of strings for its getDataPath grid option. Popularly used for Ag-Grid's Tree Data mode.
 * This builder takes a specific type and builds a hierarchy map and then produces a flat array of that hierarchy.
 * 
 * @param <T> Use what ever type you want here. I suggest you use simple types. 
 */
export class FlatHierarchyBuilder<T> {

  private nodes: Map<T, HierarchyNode<T>> = new Map<T, HierarchyNode<T>>();

  public add(pair: Pair<T>) {
    const child: T = pair.left;
    const parent: T = pair.right;

    let childNode: HierarchyNode<T>;
    let parentNode: HierarchyNode<T>;

    if(!parent || parent === child) {
      if(!this.nodes.has(child)) {
        childNode = <HierarchyNode<T>> { child: child, parent: null };
        this.nodes.set(child, childNode);
      }
      return;
    }

    if(this.nodes.has(parent)) {
      parentNode = this.nodes.get(parent);
    } else {
      parentNode = <HierarchyNode<T>> { child: parent, parent: null };
      this.nodes.set(parent, parentNode);
    }

    if(this.nodes.has(child)) {
      childNode = this.nodes.get(child);
    } else {
      childNode = <HierarchyNode<T>> { child: child, parent: null };
      this.nodes.set(child, childNode);
    }    
  }

  public get(key: T): T[] {
    if(!this.nodes.has(key)) {
      return [ key ];
    }
    return this.build(this.nodes.get(key));
  }

  private build(node: HierarchyNode<T>): T[] {
    let result: T[] = [];

    for(let n: HierarchyNode<T> = node; n != null; n = n.parent) {
      result.unshift(n.child);
    }

    return result;
  }
}

/**
 * *StringBuilder*
 * A builder that lets you append strings to a single value at will.
 * 
 * Example:
 *
 *   const str: string = new StringBuilder("I ")
 *                         .append("am ")
 *                         .append("a ")
 *                         .append("string ")
 *                         .append("builder.")
 *                         .toString();
 *
 */
export class StringBuilder {
  private _value: string;

  /**
   * @param start <string> initialize your end result with a beginning value.
   */
  constructor(start?: string) {
    this._value = start ? start : "";
  }

  /**
   * StringBuilder.append
   * @param value <string> append a value to your end result.
   */
  append(value: string): StringBuilder {
    this._value += value;    
    return this;
  }

  /**
   * StringBuilder.toUpper
   * Transforms your end value to all uppercase characters.
   */
  toUpper(): StringBuilder  {
    this._value.toUpperCase();
    return this;
  }

  /**
   * StringBuilder.toLower
   * Transforms your end value to all lowercase characters.
   */
  toLower(): StringBuilder  {
    this._value.toLowerCase();
    return this;
  }

  /**
   * StringBuilder.build
   * Finalizes and returns your end value.
   * 
   * @returns string value 
   */
  build(): string {
    return this._value;
  }
}

