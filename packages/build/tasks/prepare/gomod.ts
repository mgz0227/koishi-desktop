import { series } from 'gulp'
import { dir } from '../../utils/path'
import { exec } from '../../utils/spawn'

export const buildPrepareGoMod = (pkg: string) => async () => {
  await exec('go', ['mod', 'download'], dir('root', `packages/${pkg}`))
}

/**
 * Prepare go modules.
 *
 * Use series instead of parallel to maximize caches.
 */
export const prepareGoMod = series(
  buildPrepareGoMod('app'),
  buildPrepareGoMod('core'),
  buildPrepareGoMod('sdk')
)
