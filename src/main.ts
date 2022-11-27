import './style.scss'
import { getReleases, ReleasePlatform } from './releases'

const releases = await getReleases()
console.log(releases)

function updateReleaseLink(platform: ReleasePlatform) {
  const link = document.querySelector<HTMLAnchorElement>(
    '#download-' + platform.toLowerCase()
  )
  if (link != null) {
    const latestRelease = releases
      .reverse()
      .find((r) => r.platform === platform)
    if (latestRelease != null) {
      link.href = latestRelease.link
    }
  }
}

updateReleaseLink(ReleasePlatform.macOS)
updateReleaseLink(ReleasePlatform.windows)
updateReleaseLink(ReleasePlatform.linux)
