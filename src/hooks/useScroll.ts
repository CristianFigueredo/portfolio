import { type MaybeRef, unRef } from "./shared";
import { round } from "../utils/numbers";

/**
 * Reactive scroll values for a react ref or a dom node
 *
 * @param target - dom node or react ref
 * @param callback - callback to run on scroll
 */
export function useScroll(
  target: MaybeRef<Element | null | undefined> = document.documentElement,
  callback: (coords: { scrollX: number; scrollY: number }) => void,
) {
  const getPositions = () => {
    const el = unRef(target);
    if (!el) return;

    return {
      x: round(el.scrollLeft / (el.scrollWidth - el.clientWidth)),
      y: round(el.scrollTop / (el.scrollHeight - el.clientHeight)),
    };
  };

  window.addEventListener("scroll", () => {
    const newScrollValues = getPositions();
    if (!newScrollValues) return;

    const { x, y } = newScrollValues;
    callback({ scrollX: x, scrollY: y });
  }, {
    capture: false,
    passive: true,
  });
}
