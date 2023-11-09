import * as sentry from '@sentry/node'
import * as logger from './logger'

interface Options {
  sentry?: string
}

export function init(opts: Options = {}): void {
  opts?.sentry && sentry.init({ dsn: opts.sentry })

  process.on('unhandledRejection', (error) => {
    error && logger.error(error as any)

    if (opts?.sentry) {
      sentry.withScope(() => {
        sentry.captureException(error)
      })
    }
  })
}

export function errorHandler(error: Error): void {
  sentry.captureException(error)
}
