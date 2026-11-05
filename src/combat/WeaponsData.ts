export interface WeaponConfig {
    id: string;
    name: string;
    icon: string;
    type: 'melee' | 'gun';
    subType?: 'pistol' | 'shotgun' | 'rifle' | 'rocket';
    damage: number;
    range?: number;
    swingArc?: number;
    speed?: number;
    spread?: number;
    count?: number;
    cooldown: number;
    recoil: number;
    ammo: number;
    color: string;
    explosive?: boolean;
}

export const WEAPONS_DATA: Record<string, WeaponConfig> = {
    candyCane: {
        id: 'candyCane',
        name: 'Bastón de Caramelo Afilado',
        icon: '🍭',
        type: 'melee',
        damage: 100,
        range: 52,
        swingArc: Math.PI * 0.75,
        cooldown: 18,
        recoil: 2,
        ammo: Infinity,
        color: '#ff4d6d'
    },
    wrench: {
        id: 'wrench',
        name: 'Llave Inglesa Pesada',
        icon: '🔧',
        type: 'melee',
        damage: 150,
        range: 48,
        swingArc: Math.PI * 0.8,
        cooldown: 24,
        recoil: 3,
        ammo: Infinity,
        color: '#94a3b8'
    },
    pistol: {
        id: 'pistol',
        name: 'Pistola de Fábrica',
        icon: '🔫',
        type: 'gun',
        subType: 'pistol',
        damage: 100,
        speed: 18,
        spread: 0.05,
        count: 1,
        cooldown: 16,
        recoil: 4.5,
        ammo: 12,
        color: '#ffd166'
    },
    shotgun: {
        id: 'shotgun',
        name: 'Escopeta Rompenueces',
        icon: '💥',
        type: 'gun',
        subType: 'shotgun',
        damage: 85,
        speed: 16,
        spread: 0.28,
        count: 6,
        cooldown: 42,
        recoil: 9,
        ammo: 8,
        color: '#ff9f1c'
    },
    smg: {
        id: 'smg',
        name: 'Pirotecnia Automática SMG',
        icon: '⚡',
        type: 'gun',
        subType: 'rifle',
        damage: 65,
        speed: 21,
        spread: 0.12,
        count: 1,
        cooldown: 7,
        recoil: 3,
        ammo: 32,
        color: '#2ec4b6'
    },
    toyCannon: {
        id: 'toyCannon',
        name: 'Cañón Pesadilla de Juguete',
        icon: '🚀',
        type: 'gun',
        subType: 'rocket',
        damage: 250,
        speed: 12,
        spread: 0.02,
        count: 1,
        cooldown: 50,
        recoil: 12,
        ammo: 5,
        color: '#e71d36',
        explosive: true
    }
};
