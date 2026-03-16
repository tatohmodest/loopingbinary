"use client";

import { useMemo } from "react";

const COLS = 26;
const ROWS = 7;

const weights = [
  { cls: "",          weight: 40 },
  { cls: "active-1", weight: 25 },
  { cls: "active-2", weight: 18 },
  { cls: "active-3", weight: 10 },
  { cls: "active-4", weight: 7 },
];
const total = weights.reduce((s, w) => s + w.weight, 0);

function pickClass(rand: number) {
  let r = rand * total;
  for (const { cls, weight } of weights) {
    r -= weight;
    if (r <= 0) return cls;
  }
  return "";
}

export default function CommitGrid() {
  const cells = useMemo(
    () =>
      Array.from({ length: COLS * ROWS }, (_, i) => ({
        key: i,
        cls: pickClass(Math.random()),
      })),
    []
  );

  return (
    <div className="commit-grid">
      {cells.map(({ key, cls }) => (
        <div
          key={key}
          className={`commit-cell${cls ? ` ${cls}` : ""}`}
        />
      ))}
    </div>
  );
}
