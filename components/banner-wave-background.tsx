'use client';

import React, { useEffect, useRef } from 'react';

type BannerWaveBackgroundProps = {
  readonly className?: string;
  readonly lineColor?: string;
  readonly backgroundColor?: string;
  readonly waveSpeedX?: number;
  readonly waveSpeedY?: number;
  readonly waveAmpX?: number;
  readonly waveAmpY?: number;
  readonly xGap?: number;
  readonly yGap?: number;
  readonly friction?: number;
  readonly tension?: number;
  readonly maxCursorMove?: number;
};

type WaveOffsets = {
  x: number;
  y: number;
  vx: number;
  vy: number;
};

type WavePoint = {
  x: number;
  y: number;
  wave: { x: number; y: number };
  cursor: WaveOffsets;
};

type Dimensions = {
  width: number;
  height: number;
  left: number;
  top: number;
};

type MouseState = {
  x: number;
  y: number;
  lx: number;
  ly: number;
  sx: number;
  sy: number;
  v: number;
  vs: number;
  a: number;
  set: boolean;
};

class GradientVector {
  public readonly x: number;
  public readonly y: number;
  public readonly z: number;
  constructor(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
  public dot2(x: number, y: number): number {
    return this.x * x + this.y * y;
  }
}

class PerlinNoise {
  private readonly grad3: GradientVector[];
  private readonly p: number[];
  private readonly perm: number[];
  private readonly gradP: GradientVector[];
  constructor(seed: number = 0) {
    this.grad3 = [
      new GradientVector(1, 1, 0),
      new GradientVector(-1, 1, 0),
      new GradientVector(1, -1, 0),
      new GradientVector(-1, -1, 0),
      new GradientVector(1, 0, 1),
      new GradientVector(-1, 0, 1),
      new GradientVector(1, 0, -1),
      new GradientVector(-1, 0, -1),
      new GradientVector(0, 1, 1),
      new GradientVector(0, -1, 1),
      new GradientVector(0, 1, -1),
      new GradientVector(0, -1, -1),
    ];
    this.p = [
      151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225,
      140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247,
      120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177,
      33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165,
      71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211,
      133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25,
      63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196,
      135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217,
      226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206,
      59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248,
      152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22,
      39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218,
      246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241,
      81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157,
      184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93,
      222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180,
    ];
    this.perm = new Array<number>(512).fill(0);
    this.gradP = new Array<GradientVector>(512);
    this.seed(seed);
  }
  private seed(seed: number): void {
    let computedSeed = seed;
    if (computedSeed > 0 && computedSeed < 1) {
      computedSeed *= 65536;
    }
    computedSeed = Math.floor(computedSeed);
    if (computedSeed < 256) {
      computedSeed |= computedSeed << 8;
    }
    for (let i = 0; i < 256; i += 1) {
      const value =
        i & 1
          ? this.p[i] ^ (computedSeed & 255)
          : this.p[i] ^ ((computedSeed >> 8) & 255);
      this.perm[i] = value;
      this.perm[i + 256] = value;
      this.gradP[i] = this.grad3[value % 12];
      this.gradP[i + 256] = this.grad3[value % 12];
    }
  }
  private fade(t: number): number {
    return t * t * t * (t * (t * 6 - 15) + 10);
  }
  private lerp(a: number, b: number, t: number): number {
    return (1 - t) * a + t * b;
  }
  public perlin2(x: number, y: number): number {
    let X = Math.floor(x);
    let Y = Math.floor(y);
    const xf = x - X;
    const yf = y - Y;
    X &= 255;
    Y &= 255;
    const n00 = this.gradP[X + this.perm[Y]].dot2(xf, yf);
    const n01 = this.gradP[X + this.perm[Y + 1]].dot2(xf, yf - 1);
    const n10 = this.gradP[X + 1 + this.perm[Y]].dot2(xf - 1, yf);
    const n11 = this.gradP[X + 1 + this.perm[Y + 1]].dot2(xf - 1, yf - 1);
    const u = this.fade(xf);
    return this.lerp(
      this.lerp(n00, n10, u),
      this.lerp(n01, n11, u),
      this.fade(yf)
    );
  }
}

function mergeClassNames(base: string, extra?: string): string {
  return extra ? `${base} ${extra}` : base;
}

export default function BannerWaveBackground({
  className,
  lineColor = 'rgba(132, 68, 14, 0.35)',
  backgroundColor = 'transparent',
  waveSpeedX = 0.0125,
  waveSpeedY = 0.005,
  waveAmpX = 32,
  waveAmpY = 16,
  xGap = 10,
  yGap = 32,
  friction = 0.925,
  tension = 0.005,
  maxCursorMove = 100,
}: BannerWaveBackgroundProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const boundingRef = useRef<Dimensions>({
    width: 0,
    height: 0,
    left: 0,
    top: 0,
  });
  const noiseRef = useRef<PerlinNoise>(new PerlinNoise(Math.random()));
  const linesRef = useRef<WavePoint[][]>([]);
  const mouseRef = useRef<MouseState>({
    x: -10,
    y: 0,
    lx: 0,
    ly: 0,
    sx: 0,
    sy: 0,
    v: 0,
    vs: 0,
    a: 0,
    set: false,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) {
      return;
    }
    const context = canvas.getContext('2d');
    if (!context) {
      return;
    }
    ctxRef.current = context;
    const setSize = () => {
      boundingRef.current = container.getBoundingClientRect();
      canvas.width = boundingRef.current.width;
      canvas.height = boundingRef.current.height;
    };
    const setLines = () => {
      const { width, height } = boundingRef.current;
      const lines: WavePoint[][] = [];
      const outerWidth = width + 200;
      const outerHeight = height + 30;
      const totalLines = Math.ceil(outerWidth / xGap);
      const totalPoints = Math.ceil(outerHeight / yGap);
      const xStart = (width - xGap * totalLines) / 2;
      const yStart = (height - yGap * totalPoints) / 2;
      for (let i = 0; i <= totalLines; i += 1) {
        const points: WavePoint[] = [];
        for (let j = 0; j <= totalPoints; j += 1) {
          points.push({
            x: xStart + xGap * i,
            y: yStart + yGap * j,
            wave: { x: 0, y: 0 },
            cursor: { x: 0, y: 0, vx: 0, vy: 0 },
          });
        }
        lines.push(points);
      }
      linesRef.current = lines;
    };
    const movePoints = (time: number) => {
      const lines = linesRef.current;
      const mouse = mouseRef.current;
      const noise = noiseRef.current;
      lines.forEach((points) => {
        points.forEach((point, _index) => {
          const moveValue =
            noise.perlin2(
              (point.x + time * waveSpeedX) * 0.002,
              (point.y + time * waveSpeedY) * 0.0015
            ) * 12;
          point.wave.x = Math.cos(moveValue) * waveAmpX;
          point.wave.y = Math.sin(moveValue) * waveAmpY;
          const dx = point.x - mouse.sx;
          const dy = point.y - mouse.sy;
          const distance = Math.hypot(dx, dy);
          const limit = Math.max(175, mouse.vs);
          if (distance < limit) {
            const strength = 1 - distance / limit;
            const force = Math.cos(distance * 0.001) * strength;
            point.cursor.vx +=
              Math.cos(mouse.a) * force * limit * mouse.vs * 0.00065;
            point.cursor.vy +=
              Math.sin(mouse.a) * force * limit * mouse.vs * 0.00065;
          }
          point.cursor.vx += (0 - point.cursor.x) * tension;
          point.cursor.vy += (0 - point.cursor.y) * tension;
          point.cursor.vx *= friction;
          point.cursor.vy *= friction;
          point.cursor.x += point.cursor.vx * 2;
          point.cursor.y += point.cursor.vy * 2;
          point.cursor.x = Math.min(
            maxCursorMove,
            Math.max(-maxCursorMove, point.cursor.x)
          );
          point.cursor.y = Math.min(
            maxCursorMove,
            Math.max(-maxCursorMove, point.cursor.y)
          );
        });
      });
    };
    const moved = (point: WavePoint, includeCursor: boolean) => {
      const x = point.x + point.wave.x + (includeCursor ? point.cursor.x : 0);
      const y = point.y + point.wave.y + (includeCursor ? point.cursor.y : 0);
      return { x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 };
    };
    const drawLines = () => {
      const { width, height } = boundingRef.current;
      const ctx = ctxRef.current;
      if (!ctx) {
        return;
      }
      ctx.clearRect(0, 0, width, height);
      ctx.beginPath();
      ctx.strokeStyle = lineColor;
      linesRef.current.forEach((points) => {
        let currentPoint = moved(points[0], false);
        ctx.moveTo(currentPoint.x, currentPoint.y);
        points.forEach((point, index) => {
          const isLast = index === points.length - 1;
          currentPoint = moved(point, !isLast);
          const nextPoint = moved(
            points[index + 1] ?? points[points.length - 1],
            !isLast
          );
          ctx.lineTo(currentPoint.x, currentPoint.y);
          if (isLast) {
            ctx.moveTo(nextPoint.x, nextPoint.y);
          }
        });
      });
      ctx.stroke();
    };
    const tick = (time: number) => {
      const mouse = mouseRef.current;
      mouse.sx += (mouse.x - mouse.sx) * 0.1;
      mouse.sy += (mouse.y - mouse.sy) * 0.1;
      const dx = mouse.x - mouse.lx;
      const dy = mouse.y - mouse.ly;
      const distance = Math.hypot(dx, dy);
      mouse.v = distance;
      mouse.vs += (distance - mouse.vs) * 0.1;
      mouse.vs = Math.min(100, mouse.vs);
      mouse.lx = mouse.x;
      mouse.ly = mouse.y;
      mouse.a = Math.atan2(dy, dx);
      movePoints(time);
      drawLines();
      animationFrameRef = requestAnimationFrame(tick);
    };
    const updateMouse = (x: number, y: number) => {
      const mouse = mouseRef.current;
      const bounds = boundingRef.current;
      mouse.x = x - bounds.left;
      mouse.y = y - bounds.top + window.scrollY;
      if (!mouse.set) {
        mouse.sx = mouse.x;
        mouse.sy = mouse.y;
        mouse.lx = mouse.x;
        mouse.ly = mouse.y;
        mouse.set = true;
      }
    };
    const onResize = () => {
      setSize();
      setLines();
    };
    const onMouseMove = (event: MouseEvent) => {
      updateMouse(event.pageX, event.pageY);
    };
    const onTouchMove = (event: TouchEvent) => {
      if (event.touches.length > 0) {
        updateMouse(event.touches[0].clientX, event.touches[0].clientY);
      }
    };
    let animationFrameRef = requestAnimationFrame(tick);
    setSize();
    setLines();
    window.addEventListener('resize', onResize);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
      cancelAnimationFrame(animationFrameRef);
    };
  }, [
    lineColor,
    backgroundColor,
    waveSpeedX,
    waveSpeedY,
    waveAmpX,
    waveAmpY,
    xGap,
    yGap,
    friction,
    tension,
    maxCursorMove,
  ]);

  return (
    <div
      ref={containerRef}
      style={{ backgroundColor }}
      className={mergeClassNames(
        'absolute top-0 left-0 w-full h-full overflow-hidden',
        className
      )}
    >
      <div
        className="absolute top-0 left-0 rounded-full w-2 h-2"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.04)',
          transform:
            'translate3d(calc(var(--x, 0px) - 50%), calc(var(--y, 0px) - 50%), 0)',
          willChange: 'transform',
        }}
      />
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}
