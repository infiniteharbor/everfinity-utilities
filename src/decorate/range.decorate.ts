import "reflect-metadata";

import { RANGE_KEY } from "../constants";

export function RangeParameter(
    min: number = 0,
    max: number = 100,
) {
    return (
        target: any,
        propertyKey: string | symbol,
        parameterIndex: number,
    ) => {
      
        const existingRanges: { [key: number]: number[] } = (
            Reflect.getMetadata(RANGE_KEY, target, propertyKey)
            ||
            {}
        );

        existingRanges[parameterIndex] = [min, max];
        
        Reflect.defineMetadata(RANGE_KEY, existingRanges, target, propertyKey);
    };
}

export function ValidateRange(
  target: any,
  propertyKey: string | symbol,
  descriptor: PropertyDescriptor,
) {
  // Store the original value
  const savedValue = descriptor.value;
  // Attach validation logic
  descriptor.value = (...args: any[]) => {
      // Pull the active ranges (if any)
      const monitoredRanges: { [key: number]: number[] } = (
          Reflect.getOwnMetadata(
              RANGE_KEY,
              target,
              propertyKey,
          )
          ||
          {}
      );
      // Check all monitored ranges
      // tslint:disable-next-line:forin
      for (const key in Reflect.ownKeys(monitoredRanges)) {
          const range = monitoredRanges[key];
          const value = args[key];
          // Throw error if outside range
          if (value < range[0] || value > range[1]) {
              throw new Error("Value outside of range");
          }
      }
      // Actually call the function
      return Reflect.apply(savedValue, target, args);
  };
}