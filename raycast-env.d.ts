/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** API URL - Cleyo API server URL */
  "apiUrl": string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `add-task` command */
  export type AddTask = ExtensionPreferences & {}
  /** Preferences accessible in the `today` command */
  export type Today = ExtensionPreferences & {}
  /** Preferences accessible in the `my-tasks` command */
  export type MyTasks = ExtensionPreferences & {}
  /** Preferences accessible in the `support` command */
  export type Support = ExtensionPreferences & {}
  /** Preferences accessible in the `sign-out` command */
  export type SignOut = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `add-task` command */
  export type AddTask = {}
  /** Arguments passed to the `today` command */
  export type Today = {}
  /** Arguments passed to the `my-tasks` command */
  export type MyTasks = {}
  /** Arguments passed to the `support` command */
  export type Support = {}
  /** Arguments passed to the `sign-out` command */
  export type SignOut = {}
}

