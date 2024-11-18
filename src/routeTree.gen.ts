/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as DashboardLayoutImport } from './routes/dashboard/layout'
import { Route as IndexImport } from './routes/index'
import { Route as ProfileIndexImport } from './routes/profile/index'
import { Route as DashboardIndexImport } from './routes/dashboard/index'
import { Route as AuthIndexImport } from './routes/auth/index'
import { Route as AuthSignupImport } from './routes/auth/signup'
import { Route as DashboardTeamsIndexImport } from './routes/dashboard/teams/index'
import { Route as DashboardProjectsIndexImport } from './routes/dashboard/projects/index'
import { Route as DashboardOsProjectsIndexImport } from './routes/dashboard/os-projects/index'
import { Route as DashboardMembersIndexImport } from './routes/dashboard/members/index'
import { Route as DashboardLeaderboardsIndexImport } from './routes/dashboard/leaderboards/index'
import { Route as DashboardInboxIndexImport } from './routes/dashboard/inbox/index'
import { Route as DashboardHackathonsIndexImport } from './routes/dashboard/hackathons/index'
import { Route as DashboardChallengesIndexImport } from './routes/dashboard/challenges/index'

// Create/Update Routes

const DashboardLayoutRoute = DashboardLayoutImport.update({
  id: '/dashboard',
  path: '/dashboard',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const ProfileIndexRoute = ProfileIndexImport.update({
  id: '/profile/',
  path: '/profile/',
  getParentRoute: () => rootRoute,
} as any)

const DashboardIndexRoute = DashboardIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => DashboardLayoutRoute,
} as any)

const AuthIndexRoute = AuthIndexImport.update({
  id: '/auth/',
  path: '/auth/',
  getParentRoute: () => rootRoute,
} as any)

const AuthSignupRoute = AuthSignupImport.update({
  id: '/auth/signup',
  path: '/auth/signup',
  getParentRoute: () => rootRoute,
} as any)

const DashboardTeamsIndexRoute = DashboardTeamsIndexImport.update({
  id: '/teams/',
  path: '/teams/',
  getParentRoute: () => DashboardLayoutRoute,
} as any)

const DashboardProjectsIndexRoute = DashboardProjectsIndexImport.update({
  id: '/projects/',
  path: '/projects/',
  getParentRoute: () => DashboardLayoutRoute,
} as any)

const DashboardOsProjectsIndexRoute = DashboardOsProjectsIndexImport.update({
  id: '/os-projects/',
  path: '/os-projects/',
  getParentRoute: () => DashboardLayoutRoute,
} as any)

const DashboardMembersIndexRoute = DashboardMembersIndexImport.update({
  id: '/members/',
  path: '/members/',
  getParentRoute: () => DashboardLayoutRoute,
} as any)

const DashboardLeaderboardsIndexRoute = DashboardLeaderboardsIndexImport.update(
  {
    id: '/leaderboards/',
    path: '/leaderboards/',
    getParentRoute: () => DashboardLayoutRoute,
  } as any,
)

const DashboardInboxIndexRoute = DashboardInboxIndexImport.update({
  id: '/inbox/',
  path: '/inbox/',
  getParentRoute: () => DashboardLayoutRoute,
} as any)

const DashboardHackathonsIndexRoute = DashboardHackathonsIndexImport.update({
  id: '/hackathons/',
  path: '/hackathons/',
  getParentRoute: () => DashboardLayoutRoute,
} as any)

const DashboardChallengesIndexRoute = DashboardChallengesIndexImport.update({
  id: '/challenges/',
  path: '/challenges/',
  getParentRoute: () => DashboardLayoutRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/dashboard': {
      id: '/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof DashboardLayoutImport
      parentRoute: typeof rootRoute
    }
    '/auth/signup': {
      id: '/auth/signup'
      path: '/auth/signup'
      fullPath: '/auth/signup'
      preLoaderRoute: typeof AuthSignupImport
      parentRoute: typeof rootRoute
    }
    '/auth/': {
      id: '/auth/'
      path: '/auth'
      fullPath: '/auth'
      preLoaderRoute: typeof AuthIndexImport
      parentRoute: typeof rootRoute
    }
    '/dashboard/': {
      id: '/dashboard/'
      path: '/'
      fullPath: '/dashboard/'
      preLoaderRoute: typeof DashboardIndexImport
      parentRoute: typeof DashboardLayoutImport
    }
    '/profile/': {
      id: '/profile/'
      path: '/profile'
      fullPath: '/profile'
      preLoaderRoute: typeof ProfileIndexImport
      parentRoute: typeof rootRoute
    }
    '/dashboard/challenges/': {
      id: '/dashboard/challenges/'
      path: '/challenges'
      fullPath: '/dashboard/challenges'
      preLoaderRoute: typeof DashboardChallengesIndexImport
      parentRoute: typeof DashboardLayoutImport
    }
    '/dashboard/hackathons/': {
      id: '/dashboard/hackathons/'
      path: '/hackathons'
      fullPath: '/dashboard/hackathons'
      preLoaderRoute: typeof DashboardHackathonsIndexImport
      parentRoute: typeof DashboardLayoutImport
    }
    '/dashboard/inbox/': {
      id: '/dashboard/inbox/'
      path: '/inbox'
      fullPath: '/dashboard/inbox'
      preLoaderRoute: typeof DashboardInboxIndexImport
      parentRoute: typeof DashboardLayoutImport
    }
    '/dashboard/leaderboards/': {
      id: '/dashboard/leaderboards/'
      path: '/leaderboards'
      fullPath: '/dashboard/leaderboards'
      preLoaderRoute: typeof DashboardLeaderboardsIndexImport
      parentRoute: typeof DashboardLayoutImport
    }
    '/dashboard/members/': {
      id: '/dashboard/members/'
      path: '/members'
      fullPath: '/dashboard/members'
      preLoaderRoute: typeof DashboardMembersIndexImport
      parentRoute: typeof DashboardLayoutImport
    }
    '/dashboard/os-projects/': {
      id: '/dashboard/os-projects/'
      path: '/os-projects'
      fullPath: '/dashboard/os-projects'
      preLoaderRoute: typeof DashboardOsProjectsIndexImport
      parentRoute: typeof DashboardLayoutImport
    }
    '/dashboard/projects/': {
      id: '/dashboard/projects/'
      path: '/projects'
      fullPath: '/dashboard/projects'
      preLoaderRoute: typeof DashboardProjectsIndexImport
      parentRoute: typeof DashboardLayoutImport
    }
    '/dashboard/teams/': {
      id: '/dashboard/teams/'
      path: '/teams'
      fullPath: '/dashboard/teams'
      preLoaderRoute: typeof DashboardTeamsIndexImport
      parentRoute: typeof DashboardLayoutImport
    }
  }
}

// Create and export the route tree

interface DashboardLayoutRouteChildren {
  DashboardIndexRoute: typeof DashboardIndexRoute
  DashboardChallengesIndexRoute: typeof DashboardChallengesIndexRoute
  DashboardHackathonsIndexRoute: typeof DashboardHackathonsIndexRoute
  DashboardInboxIndexRoute: typeof DashboardInboxIndexRoute
  DashboardLeaderboardsIndexRoute: typeof DashboardLeaderboardsIndexRoute
  DashboardMembersIndexRoute: typeof DashboardMembersIndexRoute
  DashboardOsProjectsIndexRoute: typeof DashboardOsProjectsIndexRoute
  DashboardProjectsIndexRoute: typeof DashboardProjectsIndexRoute
  DashboardTeamsIndexRoute: typeof DashboardTeamsIndexRoute
}

const DashboardLayoutRouteChildren: DashboardLayoutRouteChildren = {
  DashboardIndexRoute: DashboardIndexRoute,
  DashboardChallengesIndexRoute: DashboardChallengesIndexRoute,
  DashboardHackathonsIndexRoute: DashboardHackathonsIndexRoute,
  DashboardInboxIndexRoute: DashboardInboxIndexRoute,
  DashboardLeaderboardsIndexRoute: DashboardLeaderboardsIndexRoute,
  DashboardMembersIndexRoute: DashboardMembersIndexRoute,
  DashboardOsProjectsIndexRoute: DashboardOsProjectsIndexRoute,
  DashboardProjectsIndexRoute: DashboardProjectsIndexRoute,
  DashboardTeamsIndexRoute: DashboardTeamsIndexRoute,
}

const DashboardLayoutRouteWithChildren = DashboardLayoutRoute._addFileChildren(
  DashboardLayoutRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/dashboard': typeof DashboardLayoutRouteWithChildren
  '/auth/signup': typeof AuthSignupRoute
  '/auth': typeof AuthIndexRoute
  '/dashboard/': typeof DashboardIndexRoute
  '/profile': typeof ProfileIndexRoute
  '/dashboard/challenges': typeof DashboardChallengesIndexRoute
  '/dashboard/hackathons': typeof DashboardHackathonsIndexRoute
  '/dashboard/inbox': typeof DashboardInboxIndexRoute
  '/dashboard/leaderboards': typeof DashboardLeaderboardsIndexRoute
  '/dashboard/members': typeof DashboardMembersIndexRoute
  '/dashboard/os-projects': typeof DashboardOsProjectsIndexRoute
  '/dashboard/projects': typeof DashboardProjectsIndexRoute
  '/dashboard/teams': typeof DashboardTeamsIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/auth/signup': typeof AuthSignupRoute
  '/auth': typeof AuthIndexRoute
  '/dashboard': typeof DashboardIndexRoute
  '/profile': typeof ProfileIndexRoute
  '/dashboard/challenges': typeof DashboardChallengesIndexRoute
  '/dashboard/hackathons': typeof DashboardHackathonsIndexRoute
  '/dashboard/inbox': typeof DashboardInboxIndexRoute
  '/dashboard/leaderboards': typeof DashboardLeaderboardsIndexRoute
  '/dashboard/members': typeof DashboardMembersIndexRoute
  '/dashboard/os-projects': typeof DashboardOsProjectsIndexRoute
  '/dashboard/projects': typeof DashboardProjectsIndexRoute
  '/dashboard/teams': typeof DashboardTeamsIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/dashboard': typeof DashboardLayoutRouteWithChildren
  '/auth/signup': typeof AuthSignupRoute
  '/auth/': typeof AuthIndexRoute
  '/dashboard/': typeof DashboardIndexRoute
  '/profile/': typeof ProfileIndexRoute
  '/dashboard/challenges/': typeof DashboardChallengesIndexRoute
  '/dashboard/hackathons/': typeof DashboardHackathonsIndexRoute
  '/dashboard/inbox/': typeof DashboardInboxIndexRoute
  '/dashboard/leaderboards/': typeof DashboardLeaderboardsIndexRoute
  '/dashboard/members/': typeof DashboardMembersIndexRoute
  '/dashboard/os-projects/': typeof DashboardOsProjectsIndexRoute
  '/dashboard/projects/': typeof DashboardProjectsIndexRoute
  '/dashboard/teams/': typeof DashboardTeamsIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/dashboard'
    | '/auth/signup'
    | '/auth'
    | '/dashboard/'
    | '/profile'
    | '/dashboard/challenges'
    | '/dashboard/hackathons'
    | '/dashboard/inbox'
    | '/dashboard/leaderboards'
    | '/dashboard/members'
    | '/dashboard/os-projects'
    | '/dashboard/projects'
    | '/dashboard/teams'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/auth/signup'
    | '/auth'
    | '/dashboard'
    | '/profile'
    | '/dashboard/challenges'
    | '/dashboard/hackathons'
    | '/dashboard/inbox'
    | '/dashboard/leaderboards'
    | '/dashboard/members'
    | '/dashboard/os-projects'
    | '/dashboard/projects'
    | '/dashboard/teams'
  id:
    | '__root__'
    | '/'
    | '/dashboard'
    | '/auth/signup'
    | '/auth/'
    | '/dashboard/'
    | '/profile/'
    | '/dashboard/challenges/'
    | '/dashboard/hackathons/'
    | '/dashboard/inbox/'
    | '/dashboard/leaderboards/'
    | '/dashboard/members/'
    | '/dashboard/os-projects/'
    | '/dashboard/projects/'
    | '/dashboard/teams/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  DashboardLayoutRoute: typeof DashboardLayoutRouteWithChildren
  AuthSignupRoute: typeof AuthSignupRoute
  AuthIndexRoute: typeof AuthIndexRoute
  ProfileIndexRoute: typeof ProfileIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  DashboardLayoutRoute: DashboardLayoutRouteWithChildren,
  AuthSignupRoute: AuthSignupRoute,
  AuthIndexRoute: AuthIndexRoute,
  ProfileIndexRoute: ProfileIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/dashboard",
        "/auth/signup",
        "/auth/",
        "/profile/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/dashboard": {
      "filePath": "dashboard/layout.tsx",
      "children": [
        "/dashboard/",
        "/dashboard/challenges/",
        "/dashboard/hackathons/",
        "/dashboard/inbox/",
        "/dashboard/leaderboards/",
        "/dashboard/members/",
        "/dashboard/os-projects/",
        "/dashboard/projects/",
        "/dashboard/teams/"
      ]
    },
    "/auth/signup": {
      "filePath": "auth/signup.tsx"
    },
    "/auth/": {
      "filePath": "auth/index.tsx"
    },
    "/dashboard/": {
      "filePath": "dashboard/index.tsx",
      "parent": "/dashboard"
    },
    "/profile/": {
      "filePath": "profile/index.tsx"
    },
    "/dashboard/challenges/": {
      "filePath": "dashboard/challenges/index.tsx",
      "parent": "/dashboard"
    },
    "/dashboard/hackathons/": {
      "filePath": "dashboard/hackathons/index.tsx",
      "parent": "/dashboard"
    },
    "/dashboard/inbox/": {
      "filePath": "dashboard/inbox/index.tsx",
      "parent": "/dashboard"
    },
    "/dashboard/leaderboards/": {
      "filePath": "dashboard/leaderboards/index.tsx",
      "parent": "/dashboard"
    },
    "/dashboard/members/": {
      "filePath": "dashboard/members/index.tsx",
      "parent": "/dashboard"
    },
    "/dashboard/os-projects/": {
      "filePath": "dashboard/os-projects/index.tsx",
      "parent": "/dashboard"
    },
    "/dashboard/projects/": {
      "filePath": "dashboard/projects/index.tsx",
      "parent": "/dashboard"
    },
    "/dashboard/teams/": {
      "filePath": "dashboard/teams/index.tsx",
      "parent": "/dashboard"
    }
  }
}
ROUTE_MANIFEST_END */
