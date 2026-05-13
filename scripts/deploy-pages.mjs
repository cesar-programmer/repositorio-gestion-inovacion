import { cpSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, resolve } from 'node:path'
import { execFileSync } from 'node:child_process'

const projectRoot = process.cwd()
const distDir = resolve(projectRoot, 'dist')
const tempDir = mkdtempSync(join(tmpdir(), 'repo-pages-'))

function run(command, args, cwd = projectRoot) {
  execFileSync(command, args, {
    cwd,
    stdio: 'inherit',
  })
}

try {
  const remoteUrl = execFileSync('git', ['remote', 'get-url', 'origin'], {
    cwd: projectRoot,
    encoding: 'utf8',
  }).trim()

  cpSync(distDir, tempDir, { recursive: true })
  writeFileSync(join(tempDir, '.nojekyll'), '')

  run('git', ['init'], tempDir)
  run('git', ['checkout', '-b', 'gh-pages'], tempDir)
  run('git', ['add', '.'], tempDir)
  run('git', ['commit', '-m', 'deploy github pages'], tempDir)
  run('git', ['remote', 'add', 'origin', remoteUrl], tempDir)
  run('git', ['push', '--force', 'origin', 'gh-pages'], tempDir)
} finally {
  rmSync(tempDir, { recursive: true, force: true })
}
