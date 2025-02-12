import { create } from "zustand";

export type CounterState = {
  count: number;
};

export type CounterActions = {
  increment: (qty: number) => void;
  decrement: (qty: number) => void;
};

export const useCounterStore = create<CounterState & CounterActions>()((set) => ({
  count: 0,
  increment: (qty: number) => set((state) => ({ count: state.count + qty })),
  decrement: (qty: number) => set((state) => ({ count: state.count - qty })),
}));
