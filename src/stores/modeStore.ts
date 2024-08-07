import { defineStore } from 'pinia';

export const useModeStore = defineStore('main', {
    state: () => ({
      mode: 'light' as 'light' | 'dark',
    }),
    actions: {
      toggleMode() {
        this.mode = this.mode === 'light'?'dark':'light';
      },
      setMode(newMode: 'light' | 'dark') {
        this.mode = newMode
      }
    }
  }
)

