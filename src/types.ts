export type Stage = 'gift' | 'opening' | 'permission' | 'redirecting';

export interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
}
