export enum ReleasePlatform {
  macOS = 'MacOS',
  windows = 'Windows',
  linux = 'Linux',
}

export type Release = {
  link: string
  version: string
  versionNumber: number
  platform: ReleasePlatform
}

const releasesBaseUrl = 'https://hology-releases.s3.eu-north-1.amazonaws.com/'

export async function getReleases(): Promise<Release[]> {
  // Get XML
  const text = await (await fetch(releasesBaseUrl, {})).text()
  const parser = new DOMParser()
  const xmlDoc = parser.parseFromString(text, 'text/xml')

  // Get files
  const files = Array.from(xmlDoc.getElementsByTagName('Contents')).map(
    (c) => c.getElementsByTagName('Key')[0]?.textContent ?? ''
  )

  const releases = files.map((fileName) => {
    const versionMatch = fileName.match(/(\d+\.\d+\.\d+)/g)
    if (versionMatch == null) {
      return null
    }
    const platform = getPlatformFromFileName(fileName)
    if (platform == null) {
      return null
    }

    const version = versionMatch[0]
    const versionNumber = version
      ?.split('.')
      ?.map((n) => parseInt(n))
      ?.reverse()
      ?.reduce((n, a, i) => n + a * Math.pow(10000, i))

    return <Release>{
      link: releasesBaseUrl + fileName,
      platform,
      version,
      versionNumber,
    }
  })

  return nonNull(releases).sort((a, b) => a.versionNumber - b.versionNumber)
}

function nonNull<T>(arr: Array<T | null>): Array<T> {
  return arr.filter((a) => a != null) as Array<T>
}

function getPlatformFromFileName(fileName: string): ReleasePlatform | null {
  if (/\d+.dmg$/.test(fileName)) {
    return ReleasePlatform.macOS
  }
  if (/\d+.AppImage$/.test(fileName)) {
    return ReleasePlatform.linux
  }
  if (/\d+.exe$/.test(fileName)) {
    return ReleasePlatform.windows
  }
  return null
}
