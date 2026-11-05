export class SoundSystem {
    private ctx: AudioContext | null = null;
    public muted: boolean = false;
    public actMode: number = 1;
    private step: number = 0;
    private tempoInterval: number | null = null;

    constructor() {}

    public init(): void {
        if (!this.ctx) {
            const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
            this.ctx = new AudioCtx();
            this.startMusicLoop();
        }
        if (this.ctx && this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }

    public toggleMute(): boolean {
        this.muted = !this.muted;
        return this.muted;
    }

    public playHit(isFlesh: boolean = true): void {
        if (this.muted || !this.ctx) return;
        try {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            const filter = this.ctx.createBiquadFilter();

            const now = this.ctx.currentTime;
            osc.type = isFlesh ? 'triangle' : 'square';
            osc.frequency.setValueAtTime(isFlesh ? 220 : 440, now);
            osc.frequency.exponentialRampToValueAtTime(30, now + 0.15);

            filter.type = 'lowpass';
            filter.frequency.setValueAtTime(isFlesh ? 1200 : 2500, now);

            gain.gain.setValueAtTime(0.4, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.16);

            osc.connect(filter);
            filter.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start(now);
            osc.stop(now + 0.16);

            if (isFlesh) this.playNoise(0.12, 0.35, 600);
        } catch (e) {}
    }

    public playGunshot(subType: string = 'pistol'): void {
        if (this.muted || !this.ctx) return;
        try {
            const now = this.ctx.currentTime;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sawtooth';

            if (subType === 'shotgun') {
                osc.frequency.setValueAtTime(140, now);
                osc.frequency.exponentialRampToValueAtTime(25, now + 0.28);
                gain.gain.setValueAtTime(0.65, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
                this.playNoise(0.3, 0.7, 1000);
            } else if (subType === 'rifle') {
                osc.frequency.setValueAtTime(260, now);
                osc.frequency.exponentialRampToValueAtTime(45, now + 0.16);
                gain.gain.setValueAtTime(0.45, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.17);
                this.playNoise(0.15, 0.5, 2200);
            } else if (subType === 'rocket') {
                osc.frequency.setValueAtTime(300, now);
                osc.frequency.linearRampToValueAtTime(80, now + 0.35);
                gain.gain.setValueAtTime(0.6, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.38);
                this.playNoise(0.4, 0.8, 800);
            } else {
                osc.frequency.setValueAtTime(320, now);
                osc.frequency.exponentialRampToValueAtTime(40, now + 0.18);
                gain.gain.setValueAtTime(0.5, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
                this.playNoise(0.18, 0.45, 1800);
            }

            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(now);
            osc.stop(now + 0.38);
        } catch (e) {}
    }

    public playNoise(duration: number, vol: number, cutoff: number): void {
        if (this.muted || !this.ctx) return;
        try {
            const bufferSize = Math.floor(this.ctx.sampleRate * duration);
            const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
            const data = buffer.getChannelData(0);
            for (let i = 0; i < bufferSize; i++) {
                data[i] = Math.random() * 2 - 1;
            }

            const noise = this.ctx.createBufferSource();
            noise.buffer = buffer;

            const filter = this.ctx.createBiquadFilter();
            filter.type = 'lowpass';
            filter.frequency.value = cutoff || 1500;

            const gain = this.ctx.createGain();
            const now = this.ctx.currentTime;
            gain.gain.setValueAtTime(vol, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

            noise.connect(filter);
            filter.connect(gain);
            gain.connect(this.ctx.destination);

            noise.start(now);
            noise.stop(now + duration);
        } catch (e) {}
    }

    public playJingleBell(): void {
        if (this.muted || !this.ctx) return;
        try {
            const notes = [1318.51, 1567.98, 2093.00];
            notes.forEach((freq, idx) => {
                const osc = this.ctx!.createOscillator();
                const gain = this.ctx!.createGain();
                const now = this.ctx!.currentTime + idx * 0.04;
                osc.type = 'sine';
                osc.frequency.setValueAtTime(freq, now);
                gain.gain.setValueAtTime(0.18, now);
                gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.35);
                osc.connect(gain);
                gain.connect(this.ctx!.destination);
                osc.start(now);
                osc.stop(now + 0.36);
            });
        } catch (e) {}
    }

    public playPickup(): void {
        if (this.muted || !this.ctx) return;
        try {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            const now = this.ctx.currentTime;
            osc.type = 'square';
            osc.frequency.setValueAtTime(440, now);
            osc.frequency.exponentialRampToValueAtTime(880, now + 0.12);
            gain.gain.setValueAtTime(0.2, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.13);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(now);
            osc.stop(now + 0.14);
        } catch (e) {}
    }

    public playDeathSting(): void {
        if (this.muted || !this.ctx) return;
        try {
            const now = this.ctx.currentTime;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(180, now);
            osc.frequency.exponentialRampToValueAtTime(30, now + 0.7);
            gain.gain.setValueAtTime(0.6, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.8);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(now);
            osc.stop(now + 0.8);
            this.playNoise(0.6, 0.5, 400);
        } catch (e) {}
    }

    private startMusicLoop(): void {
        if (this.tempoInterval) clearInterval(this.tempoInterval);
        const stepTime = 135;
        this.tempoInterval = window.setInterval(() => {
            if (this.muted || !this.ctx) return;
            this.step = (this.step + 1) % 32;
            this.triggerMusicStep(this.step);
        }, stepTime);
    }

    private triggerMusicStep(s: number): void {
        if (!this.ctx) return;
        const now = this.ctx.currentTime;

        try {
            if (this.actMode === 1) {
                const bellMelody = [
                    659.25, 0, 659.25, 0, 659.25, 0, 0, 0,
                    659.25, 0, 659.25, 0, 659.25, 0, 0, 0,
                    659.25, 0, 783.99, 0, 523.25, 0, 587.33, 0,
                    659.25, 0, 0, 0, 0, 0, 0, 0
                ];
                const freq = bellMelody[s];
                if (freq > 0) {
                    const osc = this.ctx.createOscillator();
                    const gain = this.ctx.createGain();
                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(freq, now);
                    gain.gain.setValueAtTime(0.12, now);
                    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
                    osc.connect(gain);
                    gain.connect(this.ctx.destination);
                    osc.start(now);
                    osc.stop(now + 0.23);
                }
                if (s % 8 === 0) {
                    const bOsc = this.ctx.createOscillator();
                    const bGain = this.ctx.createGain();
                    bOsc.type = 'triangle';
                    bOsc.frequency.setValueAtTime(130.81, now);
                    bGain.gain.setValueAtTime(0.16, now);
                    bGain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
                    bOsc.connect(bGain);
                    bGain.connect(this.ctx.destination);
                    bOsc.start(now);
                    bOsc.stop(now + 0.26);
                }
            } else {
                const bassNotes = [55, 55, 110, 55, 58, 55, 116, 55];
                const rootFreq = bassNotes[s % 8];

                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                const dist = this.ctx.createBiquadFilter();

                osc.type = (this.actMode >= 3) ? 'sawtooth' : 'square';
                osc.frequency.setValueAtTime(rootFreq, now);

                dist.type = 'lowpass';
                dist.frequency.setValueAtTime(this.actMode === 4 ? 1200 : 800, now);

                gain.gain.setValueAtTime(0.24, now);
                gain.gain.exponentialRampToValueAtTime(0.01, now + 0.12);

                osc.connect(dist);
                dist.connect(gain);
                gain.connect(this.ctx.destination);
                osc.start(now);
                osc.stop(now + 0.13);

                if (s % 4 === 0) {
                    const kick = this.ctx.createOscillator();
                    const kGain = this.ctx.createGain();
                    kick.type = 'sine';
                    kick.frequency.setValueAtTime(130, now);
                    kick.frequency.exponentialRampToValueAtTime(30, now + 0.1);
                    kGain.gain.setValueAtTime(0.5, now);
                    kGain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
                    kick.connect(kGain);
                    kGain.connect(this.ctx.destination);
                    kick.start(now);
                    kick.stop(now + 0.12);
                } else if (s % 4 === 2) {
                    this.playNoise(0.1, 0.25, 2500);
                }
            }
        } catch (e) {}
    }
}
