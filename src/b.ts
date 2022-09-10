/** @public */
export const b = 8;

/** @public */
declare global {
  /** @public */
  namespace Remirror {
    /** @public */
    export interface InterfaceB {
      /** @public */
      methodB: () => string;
    }
  }
}
