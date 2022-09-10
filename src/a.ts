/** @public */
export function a(b: Remirror.InterfaceB): string {
  return "a" + b.methodB();
}

/** @public */
declare global {
  /** @public */
  namespace Remirror {
    /** @public */
    export interface InterfaceA {
      /** @public */
      methodA: () => string;
    }
  }
}
