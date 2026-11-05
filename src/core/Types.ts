export interface Camera {
    x: number;
    y: number;
    shake: number;
}

export interface InputState {
    keys: Record<string, boolean>;
    mouse: {
        x: number;
        y: number;
        worldX: number;
        worldY: number;
        down: boolean;
    };
}

export interface Wall {
    x: number;
    y: number;
    w: number;
    h: number;
}

export interface Furniture {
    x: number;
    y: number;
    w: number;
    h: number;
    type: string;
}

export interface Bullet {
    x: number;
    y: number;
    vx: number;
    vy: number;
    damage: number;
    isPlayer: boolean;
    color: string;
    distTraveled: number;
    maxDist: number;
    explosive?: boolean;
}

export interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    color: string;
    radius: number;
    life: number;
}

export interface BloodSplat {
    x: number;
    y: number;
    radius: number;
    color: string;
    angle: number;
}
