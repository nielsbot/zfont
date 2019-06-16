import { registerFontClass } from './ZdogFont';
import { registerTextClass } from './ZdogText';
import { registerTextGroupClass } from './ZdogTextGroup';

export default {
  init(Zdog) {
    // Global font list to keep track of all fonts
    Zdog.FontList = [];

    // Helper to wait for all fonts to load
    Zdog.waitForFonts = function() {
      return Promise.all(Zdog.FontList.map(font => font.waitForLoad()));
    };
    
    registerFontClass(Zdog);
    registerTextClass(Zdog);
    registerTextGroupClass(Zdog);

    return Zdog;
  },
  version: VERSION,
}