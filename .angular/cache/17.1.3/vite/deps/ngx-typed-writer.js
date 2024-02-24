import {
  CommonModule,
  NgIf,
  isPlatformBrowser
} from "./chunk-QVKBAKXQ.js";
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Inject,
  Input,
  NgModule,
  Output,
  PLATFORM_ID,
  Renderer2,
  ViewChild,
  setClassMetadata,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-7DQU4AF6.js";

// node_modules/ngx-typed-writer/fesm2022/ngx-typed-writer.mjs
var _c0 = ["typedText"];
var _c1 = ["cursorRef"];
function NgxTypedWriterComponent_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 2, 3);
    ɵɵtext(2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate1("", ctx_r1.cursorChar, " ");
  }
}
var FADE_OUT_CLASS = "typed-fade-out";
function typeHtmlChars(isHTML, currentString, currentStringPosition) {
  if (!isHTML)
    return currentStringPosition;
  const currentCharacter = currentString.substring(currentStringPosition).charAt(0);
  if (currentCharacter === "<" || currentCharacter === "&") {
    let endTag = "";
    if (currentCharacter === "<") {
      endTag = ">";
    } else {
      endTag = ";";
    }
    while (currentString.substring(currentStringPosition + 1).charAt(0) !== endTag) {
      currentStringPosition++;
      if (currentStringPosition + 1 > currentString.length) {
        break;
      }
    }
    currentStringPosition++;
  }
  return currentStringPosition;
}
function backSpaceHtmlChars(isHTML, currentString, currentStringPosition) {
  if (!isHTML)
    return currentStringPosition;
  const currentCharacter = currentString.substring(currentStringPosition).charAt(0);
  if (currentCharacter === ">" || currentCharacter === ";") {
    let endTag = "";
    if (currentCharacter === ">") {
      endTag = "<";
    } else {
      endTag = "&";
    }
    while (currentString.substring(currentStringPosition - 1).charAt(0) !== endTag) {
      currentStringPosition--;
      if (currentStringPosition < 0) {
        break;
      }
    }
    currentStringPosition--;
  }
  return currentStringPosition;
}
function shuffleStringsIfNeeded(shuffle, strings) {
  if (!shuffle)
    return strings;
  return strings.sort(() => Math.random() - 0.5);
}
var _NgxTypedWriterComponent = class _NgxTypedWriterComponent {
  constructor(platformId, renderer2) {
    this.platformId = platformId;
    this.renderer2 = renderer2;
    this.strings = [];
    this.typeSpeed = 40;
    this.startDelay = 0;
    this.backSpeed = 40;
    this.smartBackspace = false;
    this.shuffle = false;
    this.backDelay = 1e3;
    this.isHTML = false;
    this.fadeOut = false;
    this.loop = true;
    this.showCursor = true;
    this.cursorChar = "|";
    this.fadeOutDelay = 500;
    this.currentStringIndex = 0;
    this.currentString = "";
    this.currentStringPosition = 0;
    this.isTypingPaused = false;
    this.stopNum = 0;
    this.destroy = new EventEmitter();
    this.initTyped = new EventEmitter();
    this.completeLoop = new EventEmitter();
  }
  ngOnInit() {
    isPlatformBrowser(this.platformId) && this.init();
  }
  ngOnDestroy() {
    clearTimeout(this.timeout);
    this.destroy.emit();
  }
  init() {
    this.strings = shuffleStringsIfNeeded(this.shuffle, this.strings);
    this.currentString = this.strings[this.currentStringIndex];
    this.timeout = setTimeout(() => {
      this.typeString();
      this.initTyped.emit();
    }, this.startDelay);
  }
  typeString() {
    if (this.isTypingPaused)
      return;
    if (this.fadeOut) {
      const typedElement = this.typedTextRef.nativeElement;
      this.renderer2.removeClass(typedElement, FADE_OUT_CLASS);
      if (this.showCursor) {
        const cursorElement = this.cursor?.nativeElement;
        this.renderer2.removeClass(cursorElement, FADE_OUT_CLASS);
      }
    }
    if (this.currentStringPosition < this.currentString.length) {
      this.typeCharacter();
    } else {
      this.isTypingPaused = true;
      this.timeout = setTimeout(() => {
        this.isTypingPaused = false;
        this.timeout = setTimeout(() => {
          this.backspaceString();
        }, this.backDelay);
      }, this.typeSpeed);
    }
  }
  typeCharacter() {
    this.timeout = setTimeout(() => {
      this.currentStringPosition = typeHtmlChars(this.isHTML, this.currentString, this.currentStringPosition);
      const nextString = this.currentString.substring(0, this.currentStringPosition + 1);
      const lastItem = this.strings.at(-1);
      this.typedTextRef.nativeElement.innerHTML = nextString;
      this.currentStringPosition++;
      if (nextString === lastItem && !this.loop) {
        this.completeLoop.emit();
        return;
      }
      this.typeString();
    }, this.typeSpeed);
  }
  backspaceString() {
    if (this.isTypingPaused)
      return;
    if (this.fadeOut) {
      this.initFadeOut();
      return;
    }
    if (this.currentStringPosition > this.stopNum) {
      this.backspaceCharacter();
    } else {
      this.isTypingPaused = true;
      this.timeout = setTimeout(() => {
        this.isTypingPaused = false;
        this.currentStringIndex++;
        if (this.currentStringIndex >= this.strings.length) {
          if (this.loop) {
            this.currentStringIndex = 0;
          } else {
            return;
          }
        }
        this.currentString = this.strings[this.currentStringIndex];
        this.timeout = setTimeout(() => {
          this.typeString();
        }, this.typeSpeed);
      }, this.typeSpeed);
    }
  }
  backspaceCharacter() {
    const currentString = this.typedTextRef.nativeElement.innerHTML;
    this.currentStringPosition = backSpaceHtmlChars(this.isHTML, this.currentString, this.currentStringPosition);
    const curStringAtPosition = currentString.substring(0, this.currentStringPosition);
    this.typedTextRef.nativeElement.innerHTML = curStringAtPosition;
    this.timeout = setTimeout(() => {
      if (this.smartBackspace) {
        const nextStringPartial = this.strings[this.currentStringIndex + 1];
        const compare = curStringAtPosition === nextStringPartial?.substring(0, this.currentStringPosition);
        if (nextStringPartial && compare) {
          this.stopNum = this.currentStringPosition - 1;
        } else {
          this.stopNum = 0;
        }
      }
      if (this.currentStringPosition > this.stopNum) {
        this.currentStringPosition--;
        this.backspaceString();
      } else if (this.currentStringPosition <= this.stopNum) {
        this.currentStringIndex++;
        if (this.currentStringIndex === this.strings.length) {
          this.currentStringIndex = 0;
        }
        this.typeString();
      }
    }, this.backSpeed);
  }
  initFadeOut() {
    const typedElement = this.typedTextRef.nativeElement;
    this.renderer2.addClass(typedElement, FADE_OUT_CLASS);
    if (this.showCursor) {
      const cursorElement = this.cursor.nativeElement;
      this.renderer2.addClass(cursorElement, FADE_OUT_CLASS);
    }
    this.timeout = setTimeout(() => {
      this.currentStringIndex++;
      typedElement.innerHTML = "";
      if (this.strings.length > this.currentStringIndex) {
        this.currentStringPosition = 0;
        this.currentString = this.strings[this.currentStringIndex];
        this.typeString();
      } else {
        this.currentStringPosition = 0;
        this.currentStringIndex = 0;
        this.currentString = this.strings[this.currentStringIndex];
        this.typeString();
      }
    }, this.fadeOutDelay);
  }
};
_NgxTypedWriterComponent.ɵfac = function NgxTypedWriterComponent_Factory(t) {
  return new (t || _NgxTypedWriterComponent)(ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(Renderer2));
};
_NgxTypedWriterComponent.ɵcmp = ɵɵdefineComponent({
  type: _NgxTypedWriterComponent,
  selectors: [["ngx-typed-writer"]],
  viewQuery: function NgxTypedWriterComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 7);
      ɵɵviewQuery(_c1, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.typedTextRef = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.cursor = _t.first);
    }
  },
  inputs: {
    strings: "strings",
    typeSpeed: "typeSpeed",
    startDelay: "startDelay",
    backSpeed: "backSpeed",
    smartBackspace: "smartBackspace",
    shuffle: "shuffle",
    backDelay: "backDelay",
    isHTML: "isHTML",
    fadeOut: "fadeOut",
    loop: "loop",
    showCursor: "showCursor",
    cursorChar: "cursorChar",
    fadeOutDelay: "fadeOutDelay"
  },
  outputs: {
    destroy: "destroy",
    initTyped: "initTyped",
    completeLoop: "completeLoop"
  },
  decls: 3,
  vars: 1,
  consts: [["typedText", ""], ["class", "typing-cursor", 4, "ngIf"], [1, "typing-cursor"], ["cursorRef", ""]],
  template: function NgxTypedWriterComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelement(0, "span", null, 0);
      ɵɵtemplate(2, NgxTypedWriterComponent_span_2_Template, 3, 1, "span", 1);
    }
    if (rf & 2) {
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.showCursor);
    }
  },
  dependencies: [NgIf],
  styles: [".typing-cursor[_ngcontent-%COMP%]{-webkit-animation:_ngcontent-%COMP%_blink .7s infinite;display:inline-block;opacity:1;animation:_ngcontent-%COMP%_blink .7s infinite}@keyframes _ngcontent-%COMP%_blink{0%{opacity:1}50%{opacity:0}to{opacity:1}}.typed-fade-out[_ngcontent-%COMP%]{opacity:0;transition:opacity .25s}"],
  changeDetection: 0
});
var NgxTypedWriterComponent = _NgxTypedWriterComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxTypedWriterComponent, [{
    type: Component,
    args: [{
      selector: "ngx-typed-writer",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <span #typedText> </span>
    <span #cursorRef class="typing-cursor" *ngIf="showCursor"
      >{{ cursorChar }}
    </span>
  `,
      styles: [".typing-cursor{-webkit-animation:blink .7s infinite;display:inline-block;opacity:1;animation:blink .7s infinite}@keyframes blink{0%{opacity:1}50%{opacity:0}to{opacity:1}}.typed-fade-out{opacity:0;transition:opacity .25s}\n"]
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }, {
    type: Renderer2
  }], {
    typedTextRef: [{
      type: ViewChild,
      args: ["typedText", {
        static: true
      }]
    }],
    cursor: [{
      type: ViewChild,
      args: ["cursorRef"]
    }],
    strings: [{
      type: Input
    }],
    typeSpeed: [{
      type: Input
    }],
    startDelay: [{
      type: Input
    }],
    backSpeed: [{
      type: Input
    }],
    smartBackspace: [{
      type: Input
    }],
    shuffle: [{
      type: Input
    }],
    backDelay: [{
      type: Input
    }],
    isHTML: [{
      type: Input
    }],
    fadeOut: [{
      type: Input
    }],
    loop: [{
      type: Input
    }],
    showCursor: [{
      type: Input
    }],
    cursorChar: [{
      type: Input
    }],
    fadeOutDelay: [{
      type: Input
    }],
    destroy: [{
      type: Output
    }],
    initTyped: [{
      type: Output
    }],
    completeLoop: [{
      type: Output
    }]
  });
})();
var _NgxTypedWriterModule = class _NgxTypedWriterModule {
};
_NgxTypedWriterModule.ɵfac = function NgxTypedWriterModule_Factory(t) {
  return new (t || _NgxTypedWriterModule)();
};
_NgxTypedWriterModule.ɵmod = ɵɵdefineNgModule({
  type: _NgxTypedWriterModule,
  declarations: [NgxTypedWriterComponent],
  imports: [CommonModule],
  exports: [NgxTypedWriterComponent]
});
_NgxTypedWriterModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule]
});
var NgxTypedWriterModule = _NgxTypedWriterModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxTypedWriterModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      declarations: [NgxTypedWriterComponent],
      exports: [NgxTypedWriterComponent]
    }]
  }], null, null);
})();
export {
  NgxTypedWriterComponent,
  NgxTypedWriterModule
};
//# sourceMappingURL=ngx-typed-writer.js.map
