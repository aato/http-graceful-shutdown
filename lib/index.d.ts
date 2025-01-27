// Type definitions for http-graceful-shutdown 3.1
// Project: https://github.com/sebhildebrandt/http-graceful-shutdown
// Definitions by: sebhildebrandt <https://github.com/sebhildebrandt>

/// <reference types="node" />

type ManualShutdown = Promise<void>;

declare function GracefulShutdown(
  server: any,
  options?: GracefulShutdown.Options
): () => Promise<ManualShutdown>

declare namespace GracefulShutdown {
  interface Options {
    signals?: string;
    timeout?: number;
    development?: boolean;
    forceExit?: boolean;
    preShutdown?: (signal?: string) => Promise<void>;
    onShutdown?: (signal?: string) => Promise<void>;
    finally?: () => void;
  }
}

export = GracefulShutdown;
