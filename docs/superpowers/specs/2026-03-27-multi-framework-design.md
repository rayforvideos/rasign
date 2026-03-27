# Rasign Multi-Framework Support — Spec

## Overview

기존 React 전용 디자인 시스템을 Vue 3, Angular 17+까지 확장한다. SCSS 스타일을 공유 패키지로 분리하고, 각 프레임워크에 네이티브 패키지를 제공한다.

## New Packages

### @rasign/styles

모든 컴포넌트의 SCSS 소스를 소유하는 공유 패키지. 빌드 없이 소스를 그대로 배포한다.

```
packages/styles/
├── src/
│   ├── components/
│   │   ├── typography.module.scss
│   │   ├── row.module.scss
│   │   ├── column.module.scss
│   │   ├── surface.module.scss
│   │   ├── button.module.scss
│   │   ├── avatar.module.scss
│   │   ├── badge.module.scss
│   │   ├── icon.module.scss
│   │   ├── input.module.scss
│   │   ├── checkbox.module.scss
│   │   ├── switch.module.scss
│   │   ├── spinner.module.scss
│   │   └── divider.module.scss
│   └── reset.css
└── package.json
```

**파일명 컨벤션:** 기존 React의 PascalCase(`Button.module.scss`)를 lowercase(`button.module.scss`)로 통일하여 이동한다. CSS Modules의 생성 클래스명은 SCSS 내부 클래스 정의에 의존하므로 파일명 변경은 영향 없다.

**package.json:**
```json
{
  "name": "@rasign/styles",
  "version": "0.1.0",
  "exports": {
    "./components/*": "./src/components/*",
    "./reset.css": "./src/reset.css"
  },
  "files": ["src"],
  "peerDependencies": {
    "@rasign/tokens": ">=0.1.0"
  }
}
```

`@rasign/tokens`를 peerDependency로 선언한다. SCSS가 빌드 시 토큰을 참조하지는 않지만, 런타임에 CSS Custom Properties가 존재해야 스타일이 동작하므로 이 의존성을 문서화한다.

**reset.css 소유권:** `reset.css`는 `@rasign/styles`가 소유한다. 각 프레임워크 패키지는 reset을 번들하지 않는다. 소비 앱에서 직접 import한다:
```typescript
import '@rasign/styles/reset.css';
```

`@rasign/react`의 기존 `"./styles.css"` export는 제거한다.

### @rasign/vue

Vue 3 Composition API 기반 네이티브 컴포넌트 패키지.

```
packages/vue/
├── src/
│   ├── components/
│   │   ├── DsTypography.vue
│   │   ├── DsRow.vue
│   │   ├── DsColumn.vue
│   │   ├── DsSurface.vue
│   │   ├── DsButton.vue
│   │   ├── DsAvatar.vue
│   │   ├── DsBadge.vue
│   │   ├── DsIcon.vue
│   │   ├── DsInput.vue
│   │   ├── DsCheckbox.vue
│   │   ├── DsSwitch.vue
│   │   ├── DsSpinner.vue
│   │   └── DsDivider.vue
│   ├── composables/
│   │   └── useDesignSystem.ts
│   ├── plugin.ts
│   └── index.ts
├── package.json
├── vite.config.ts
└── tsconfig.json
```

**Vue 관용적 패턴:**

- `DesignSystemProvider` → Vue Plugin (`app.use(createDesignSystem({ brand, defaultTheme }))`)
- 다형성: `as` prop (React와 동일. Vue의 `:is`는 동적 컴포넌트 전환 목적이므로 HTML 요소 다형성에는 `as`가 더 명확하다.)
- 폼 컴포넌트: `v-model` 지원 (`modelValue` + `update:modelValue` emit)
- 컴포넌트 접두사: `Ds` (전역 등록 시 충돌 방지)
- 테마/브랜드 접근: `useDesignSystem()` composable (`provide`/`inject` 기반)

**SCSS 소비:** SFC `<style module>` 블록에서 공유 SCSS를 import한다.
```vue
<style module lang="scss">
@use '@rasign/styles/components/button.module.scss' as *;
</style>
```
또는 `<script>`에서 CSS Modules import:
```typescript
import styles from '@rasign/styles/components/button.module.scss';
```

**빌드 설정:** Vite 라이브러리 모드, ESM 단일 출력. `.vue` SFC는 컴파일하여 JS로 배포한다.

```json
{
  "name": "@rasign/vue",
  "version": "0.1.0",
  "type": "module",
  "module": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/index.js"
    }
  },
  "files": ["dist"],
  "peerDependencies": {
    "vue": "^3.4"
  },
  "devDependencies": {
    "@rasign/styles": "workspace:*",
    "@rasign/tokens": "workspace:*"
  }
}
```

**소비 예시:**

```typescript
// main.ts
import { createApp } from 'vue';
import { createDesignSystem } from '@rasign/vue';
import '@rasign/tokens/service-a/css/light.css';
import '@rasign/tokens/service-a/css/dark.css';
import '@rasign/styles/reset.css';

const app = createApp(App);
app.use(createDesignSystem({ brand: 'service-a', defaultTheme: 'light' }));
```

```vue
<template>
  <DsButton variant="primary" @click="handleClick">확인</DsButton>
  <DsInput v-model="name" placeholder="이름" />
  <DsCheckbox v-model="agreed" label="동의합니다" />
  <DsSwitch v-model="darkMode" label="다크 모드" />
  <DsTypography as="h1" variant="heading-xl">제목</DsTypography>
  <DsRow as="nav" gap="4" align="center">...</DsRow>
</template>
```

### @rasign/angular

Angular 17+ Standalone Components 기반 네이티브 컴포넌트 패키지.

```
packages/angular/
├── src/
│   ├── components/
│   │   ├── typography/
│   │   │   └── typography.component.ts   # 인라인 템플릿 + styleUrl
│   │   ├── row/
│   │   │   └── row.component.ts
│   │   ├── column/
│   │   │   └── column.component.ts
│   │   ├── surface/
│   │   │   └── surface.component.ts
│   │   ├── button/
│   │   │   └── button.component.ts
│   │   ├── avatar/
│   │   │   └── avatar.component.ts
│   │   ├── badge/
│   │   │   └── badge.component.ts
│   │   ├── icon/
│   │   │   └── icon.component.ts
│   │   ├── input/
│   │   │   └── input.component.ts
│   │   ├── checkbox/
│   │   │   └── checkbox.component.ts
│   │   ├── switch/
│   │   │   └── switch.component.ts
│   │   ├── spinner/
│   │   │   └── spinner.component.ts
│   │   └── divider/
│   │       └── divider.component.ts
│   ├── providers/
│   │   └── design-system.service.ts
│   └── index.ts
├── ng-package.json
├── package.json
└── tsconfig.json
```

**Angular 관용적 패턴:**

- `DesignSystemProvider` → `provideDesignSystem()` 함수 (Angular Provider 패턴)
- Standalone Components (NgModule 불필요)
- 폼 컴포넌트: `ControlValueAccessor` 구현 → Reactive Forms + `ngModel` 모두 지원
- 컴포넌트 셀렉터 접두사: `ds-`
- 다형성: `as` input → 내부에서 동적 요소 생성
- 빌드: `ng-packagr`로 Angular Package Format (APF) 출력

**Angular의 SCSS 소비 방식:**

Angular는 CSS Modules를 사용하지 않는다. 대신 `ViewEncapsulation`으로 스타일을 스코핑한다. `@rasign/styles`의 `.module.scss` 파일을 일반 SCSS로 소비한다:

```typescript
@Component({
  selector: 'ds-button',
  standalone: true,
  template: `<button [class]="classes" [disabled]="disabled"><ng-content /></button>`,
  styleUrl: '../../../node_modules/@rasign/styles/src/components/button.module.scss',
  encapsulation: ViewEncapsulation.Emulated,
})
```

**클래스명 처리:** CSS Modules(React/Vue)는 해시된 클래스명을 생성하지만, Angular의 ViewEncapsulation은 `_nghost`/`_ngcontent` 속성으로 스코핑한다. 둘 다 스타일 격리를 달성하지만 메커니즘이 다르다. SCSS 파일의 클래스명(`.button`, `.primary` 등)은 동일하게 사용되며, 스코핑 방식만 프레임워크별로 다르다. 이는 의도된 차이이며 시각적 결과는 동일하다.

**소비 예시:**

```typescript
// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { provideDesignSystem } from '@rasign/angular';

bootstrapApplication(AppComponent, {
  providers: [
    provideDesignSystem({ brand: 'service-a', defaultTheme: 'light' }),
  ],
});
```

```html
<ds-button variant="primary" (click)="handleClick()">확인</ds-button>
<ds-input formControlName="name" placeholder="이름" />
<ds-checkbox formControlName="agreed" label="동의합니다" />
<ds-switch formControlName="darkMode" label="다크 모드" />
<ds-typography as="h1" variant="heading-xl">제목</ds-typography>
<ds-row as="nav" gap="4" align="center">...</ds-row>
```

**peerDependencies:** `@angular/core: ^17`, `@angular/forms: ^17`

## Refactoring: @rasign/react

기존 `@rasign/react` 패키지에서 SCSS 파일을 `@rasign/styles`로 이동한다. 컴포넌트의 import 경로만 변경하며, 로직은 그대로 유지한다.

**변경 전:**
```typescript
import styles from './Button.module.scss';
```

**변경 후:**
```typescript
import styles from '@rasign/styles/components/button.module.scss';
```

각 컴포넌트 디렉토리에서 `.module.scss` 파일이 제거되고, `@rasign/styles`를 devDependency로 추가한다. `"./styles.css"` export는 제거한다 (reset.css는 `@rasign/styles`가 소유). 기존 55개 테스트가 그대로 통과해야 한다.

## Cross-Framework API Mapping

| 개념 | React | Vue | Angular |
|------|-------|-----|---------|
| 초기화 | `<DesignSystemProvider>` | `app.use(createDesignSystem())` | `provideDesignSystem()` |
| 테마 접근 | `useDesignSystem()` hook | `useDesignSystem()` composable | `inject(DesignSystemService)` |
| 다형성 | `as` prop | `as` prop | `as` input |
| 폼 바인딩 | `value` + `onChange` | `v-model` | `ControlValueAccessor` |
| 이벤트 | `onClick` | `@click` | `(click)` |
| 컴포넌트 이름 | `Button` | `DsButton` | `ds-button` |
| 스타일 스코핑 | CSS Modules (해시 클래스) | CSS Modules (해시 클래스) | ViewEncapsulation (속성 스코핑) |

**통일하는 것:**
- prop 이름: `variant`, `size`, `gap`, `align`, `justify`, `elevation`, `rounded`, `as` 등
- prop 값: `primary`, `secondary`, `ghost`, `sm`, `md`, `lg` 등
- CSS 클래스 구조: 동일한 SCSS 참조
- 접근성: `role`, `aria-label`, `aria-checked` 등 ARIA 속성은 모든 프레임워크에서 동일하게 적용

**프레임워크별로 달라지는 것:**
- 초기화 패턴
- 이벤트 핸들링
- 양방향 바인딩 (폼 컴포넌트)
- 컴포넌트 네이밍 컨벤션
- 스타일 스코핑 메커니즘

## Testing Strategy

각 프레임워크 패키지는 자체 테스트 환경을 가진다:

| 패키지 | 테스트 도구 | 환경 |
|--------|-----------|------|
| `@rasign/react` | Vitest + Testing Library | jsdom |
| `@rasign/vue` | Vitest + Vue Test Utils | jsdom |
| `@rasign/angular` | Jest + Angular Testing (TestBed) | jsdom |

모든 프레임워크에서 동일한 테스트 시나리오를 검증한다:
- 렌더링 확인
- prop/variant 적용
- 다형성 (`as` prop)
- 폼 바인딩 (v-model / ControlValueAccessor)
- 접근성 속성 (role, aria-*)
- disabled 상태

## Token Propagation Flow

```
tokens/ JSON 수정
  ↓ pnpm build:tokens
@rasign/tokens — CSS Custom Properties 재빌드
  ↓
@rasign/styles — SCSS가 var(--ds-*) 참조 → 자동 반영
  ↓
@rasign/react, @rasign/vue, @rasign/angular — 전부 반영
```

토큰만 수정하면 코드 변경 없이 모든 프레임워크, 모든 브랜드/테마에 일괄 적용된다.

## Build Pipeline

```
tokens (build:tokens)
  ↓
styles (빌드 없음 — SCSS 소스 배포)
  ↓
react / vue / angular (각자 build) ← tokens + styles 의존
  ↓
storybook ← react 의존 (기존 유지)
```

`@rasign/styles`는 빌드 태스크 없음. 각 프레임워크 패키지가 devDependency로 styles를 참조하고 자체 빌드에서 SCSS를 컴파일한다.

Storybook은 기존대로 `@rasign/react` 기반 유지. Vue/Angular 컴포넌트의 문서화는 향후 각 프레임워크의 Storybook renderer 추가로 확장 가능하나, 이 스펙의 범위에는 포함하지 않는다.

## Package Dependencies

```
@rasign/tokens   ← 모든 패키지의 CSS 토큰 소스
@rasign/styles   ← react, vue, angular의 SCSS 소스 | peerDeps: tokens
@rasign/react    ← devDeps: tokens, styles | peerDeps: react
@rasign/vue      ← devDeps: tokens, styles | peerDeps: vue
@rasign/angular  ← devDeps: tokens, styles | peerDeps: @angular/core, @angular/forms
```

## Distribution

- 5개 패키지 모두 npm 프라이빗 레지스트리 (GitHub Packages) 배포
- Lockstep 버저닝: 스타일 변경이 모든 프레임워크에 영향을 주므로 동일 버전으로 함께 배포. 프레임워크별 독립 패치는 허용하지 않는다.
- `@rasign/storybook`은 배포하지 않음

## Component List

모든 프레임워크에서 동일한 13개 Atomic 컴포넌트를 제공한다:

**Layout:** Row, Column, Surface (다형성 지원)
**Typography:** Typography (다형성 지원)
**Interaction:** Button
**Data Display:** Avatar, Badge, Icon
**Form:** Input, Checkbox, Switch
**Feedback:** Spinner, Divider
