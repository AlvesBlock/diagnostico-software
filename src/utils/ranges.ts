export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

export function interpolateInRange(
  score: number,
  scoreMin: number,
  scoreMax: number,
  valueMin: number,
  valueMax: number,
): number {
  if (scoreMax === scoreMin) {
    return valueMin;
  }

  const progress = clamp((score - scoreMin) / (scoreMax - scoreMin), 0, 1);

  return Math.round(valueMin + (valueMax - valueMin) * progress);
}
