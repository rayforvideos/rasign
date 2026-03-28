# Rasign

Multi-brand, multi-framework design system monorepo.

React, Vue 3, Angular 17+ 를 지원하며, Style Dictionary v4 기반의 디자인 토큰으로 브랜드별 테마를 관리합니다.

## Packages

| Package | Description | Version |
|---------|-------------|---------|
| [`@rayforvideos/tokens`](./packages/tokens) | W3C DTCG 디자인 토큰 (CSS, SCSS, JS) | 0.1.0 |
| [`@rayforvideos/styles`](./packages/styles) | 프레임워크 공용 SCSS (CSS Modules) | 0.1.0 |
| [`@rayforvideos/react`](./packages/react) | React 18/19 컴포넌트 | 0.1.0 |
| [`@rayforvideos/vue`](./packages/vue) | Vue 3 컴포넌트 | 0.1.0 |
| [`@rayforvideos/angular`](./packages/angular) | Angular 17+ Standalone 컴포넌트 | 0.1.0 |
| [`@rayforvideos/storybook`](./packages/storybook) | Storybook 문서 & 데모 (비공개) | - |

## Components

Typography, Button, Input, Checkbox, Switch, Avatar, Badge, Icon, Surface, Row, Column, Spinner, Divider

## Architecture

```
tokens (Style Dictionary)
  ↓  CSS / SCSS / JS 생성
styles (공용 SCSS Modules)
  ↓
react / vue / angular (각 프레임워크 네이티브 구현)
  ↓
storybook (문서 & 시각화)
```

### Multi-Brand & Theme

- **Brand**: `data-brand` 속성 (`service-a`, `service-b`)
- **Theme**: `data-theme` 속성 (`light`, `dark`)
- 토큰 prefix: `--ds-*`

### Framework Integration

| | React | Vue | Angular |
|---|---|---|---|
| 초기화 | `<DesignSystemProvider>` | `app.use(createDesignSystem())` | `provideDesignSystem()` |
| 테마 접근 | `useDesignSystem()` | `useDesignSystem()` | `inject(DesignSystemService)` |
| 다형성 | `as` prop | `as` prop | `as` input |

## Getting Started

```bash
# 의존성 설치
pnpm install

# 토큰 빌드
pnpm build:tokens

# 전체 빌드
pnpm build

# Storybook 실행
pnpm storybook

# 개발 모드
pnpm dev
```

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm build:tokens` | 디자인 토큰 빌드 (모든 브랜드 × 테마) |
| `pnpm build` | 전체 패키지 빌드 |
| `pnpm dev` | 개발 모드 |
| `pnpm storybook` | Storybook 실행 (port 6006) |
| `pnpm test` | 테스트 실행 |
| `pnpm typecheck` | 타입 체크 |
| `pnpm lint` | ESLint |
| `pnpm format` | Prettier 포맷팅 |
| `pnpm validate:tokens` | 토큰 유효성 검사 |

## Tech Stack

- **Monorepo**: pnpm workspace + Turborepo v2
- **Tokens**: Style Dictionary v4 (W3C DTCG)
- **Build**: Vite (React/Vue), ng-packagr (Angular)
- **Test**: Vitest + Testing Library
- **Lint**: ESLint 10 + Prettier
- **Docs**: Storybook 8
