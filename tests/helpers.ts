export const setScreenWidth = (width: number) => {
  window.innerWidth = width;

  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query: string) => ({
      matches: width >= 768 && (query?.includes('768') ?? false),
      media: query,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }),
  });

  window.dispatchEvent(new Event('resize'));
};