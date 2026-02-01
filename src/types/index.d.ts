/**
 * StoneWick Theme TypeScript Declarations
 */

declare module '@stonewick/theme' {
  export const VERSION: string;

  export interface InitAllOptions {
    scope?: string;
  }

  export interface InitAllResult {
    comparisonSliders: ComparisonSlider[];
    videoTheaters: VideoTheater[];
    modals: Modal[];
    sliders: Slider[];
    accordions: Accordion[];
  }

  export function initAll(options?: InitAllOptions): InitAllResult;

  // ComparisonSlider
  export interface ComparisonSliderOptions {
    startPosition?: number;
    showLabels?: boolean;
    smoothTransition?: boolean;
  }

  export class ComparisonSlider {
    static defaults: ComparisonSliderOptions;
    
    constructor(element: HTMLElement, options?: ComparisonSliderOptions);
    
    element: HTMLElement;
    options: ComparisonSliderOptions;
    position: number;
    
    setPosition(percent: number): void;
    destroy(): void;
    
    static initAll(selector?: string, scope?: Element | Document): ComparisonSlider[];
  }

  // VideoTheater
  export interface VideoTheaterOptions {
    autoplay?: boolean;
    muted?: boolean;
    loop?: boolean;
    preload?: 'none' | 'metadata' | 'auto';
  }

  export class VideoTheater {
    static defaults: VideoTheaterOptions;
    
    constructor(element: HTMLElement, options?: VideoTheaterOptions);
    
    element: HTMLElement;
    options: VideoTheaterOptions;
    isPlaying: boolean;
    
    play(): void;
    pause(): void;
    toggle(): void;
    destroy(): void;
    
    static initAll(selector?: string, scope?: Element | Document): VideoTheater[];
  }

  // Modal
  export interface ModalOptions {
    closeOnOverlay?: boolean;
    closeOnEscape?: boolean;
    trapFocus?: boolean;
    restoreFocus?: boolean;
  }

  export class Modal {
    static defaults: ModalOptions;
    static activeModals: Modal[];
    
    constructor(element: HTMLElement | string, options?: ModalOptions);
    
    element: HTMLElement;
    options: ModalOptions;
    isOpen: boolean;
    
    open(): void;
    close(): void;
    toggle(): void;
    destroy(): void;
    
    static open(selector: string): Modal | null;
    static close(selector: string): void;
    static closeAll(): void;
    static getInstance(element: HTMLElement): Modal | undefined;
    static initAll(selector?: string, scope?: Element | Document): Modal[];
  }

  // Slider
  export interface SliderOptions {
    autoplay?: boolean;
    autoplayInterval?: number;
    pauseOnHover?: boolean;
    loop?: boolean;
    keyboard?: boolean;
    indicators?: boolean;
    thumbnails?: boolean;
  }

  export class Slider {
    static defaults: SliderOptions;
    
    constructor(element: HTMLElement, options?: SliderOptions);
    
    element: HTMLElement;
    options: SliderOptions;
    currentIndex: number;
    isPlaying: boolean;
    
    goTo(index: number): void;
    prev(): void;
    next(): void;
    play(): void;
    pause(): void;
    toggle(): void;
    destroy(): void;
    
    static initAll(selector?: string, scope?: Element | Document): Slider[];
  }

  // Accordion
  export interface AccordionOptions {
    allowMultiple?: boolean;
    expandAll?: boolean;
    hashLinks?: boolean;
    scrollToOpen?: boolean;
    scrollOffset?: number;
  }

  export class Accordion {
    static defaults: AccordionOptions;
    
    constructor(element: HTMLElement, options?: AccordionOptions);
    
    element: HTMLElement;
    options: AccordionOptions;
    
    expandAll(): void;
    collapseAll(): void;
    toggle(index: number): void;
    destroy(): void;
    
    static initAll(selector?: string, scope?: Element | Document): Accordion[];
  }

  // Utils
  export interface Utils {
    debounce<T extends (...args: any[]) => any>(fn: T, delay?: number): T;
    throttle<T extends (...args: any[]) => any>(fn: T, limit?: number): T;
    getCSSVar(name: string, element?: Element): string;
    setCSSVar(name: string, value: string, element?: Element): void;
    parseDataAttrs(element: Element, prefix?: string): Record<string, any>;
    createElement(html: string): Element;
    waitForElement(selector: string, timeout?: number): Promise<Element>;
    animate(element: Element, keyframes: Keyframe[], options?: KeyframeAnimationOptions): Animation;
    isInViewport(element: Element, threshold?: number): boolean;
  }

  export const utils: Utils;
}

declare module '@stonewick/theme/js/comparison-slider' {
  export { ComparisonSlider, ComparisonSliderOptions } from '@stonewick/theme';
}

declare module '@stonewick/theme/js/video-theater' {
  export { VideoTheater, VideoTheaterOptions } from '@stonewick/theme';
}

declare module '@stonewick/theme/js/modals' {
  export { Modal, ModalOptions } from '@stonewick/theme';
}

declare module '@stonewick/theme/js/slider' {
  export { Slider, SliderOptions } from '@stonewick/theme';
}

declare module '@stonewick/theme/js/accordion' {
  export { Accordion, AccordionOptions } from '@stonewick/theme';
}

// Global window extension
declare global {
  interface Window {
    StoneWick: {
      VERSION: string;
      initAll: typeof import('@stonewick/theme').initAll;
      ComparisonSlider: typeof import('@stonewick/theme').ComparisonSlider;
      VideoTheater: typeof import('@stonewick/theme').VideoTheater;
      Modal: typeof import('@stonewick/theme').Modal;
      Slider: typeof import('@stonewick/theme').Slider;
      Accordion: typeof import('@stonewick/theme').Accordion;
      utils: import('@stonewick/theme').Utils;
    };
  }
}
