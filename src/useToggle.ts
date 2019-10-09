import { useCallback } from 'react';

/* eslint-disable jsdoc/valid-types */

/**
 * Tracks state of a boolean value.
 *
 * @see [`useState` hook](https://reactjs.org/docs/hooks-reference.html#usestate), which exposes a similar interface
 *
 * @param {boolean} initialValue Initial value.
 * @returns {[boolean, function (nextValue: boolean?): void]} A statefully stored value, and a function to update it. The latter may be called without a boolean argument to negate the value.
 *
 * @example
 * function Example() {
 *   const [isPressed, togglePressed] = useToggle();
 *   // ...
 *   return (
 *     <button type="button" aria-pressed={isPressed} onClick={togglePressed}>
 *       Toggle state
 *     </button>
 *   );
 * }
 */
export default function useToggle([value, setValue]: [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>,
]): [boolean, React.Dispatch<React.SetStateAction<boolean>>, () => void] {
  const toggleValue = useCallback(() => {
    setValue(prevValue => !prevValue);
  }, [setValue]);

  return [value, setValue, toggleValue];
}
