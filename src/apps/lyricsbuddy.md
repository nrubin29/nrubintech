---
tags: app
permalink: false
order: 1
name: LyricsBuddy
icon: /assets/icons/lyricsbuddy.png
tagline: Live lyrics for Spotify and Apple Music.
summary: Synced lyrics, translations, romanization, annotations, and floating PiP for Spotify and Apple Music.
description: LyricsBuddy shows live synced lyrics for whatever is playing on Spotify or Apple Music — with on-device translations, romanization, Genius annotations, rich track info, and floating Picture in Picture.
appStoreUrl: "https://apps.apple.com/us/app/lyricsbuddy/id6762755070"
colors:
  primary: "#E0306A"
  light:
    primaryLight: "#FFF0F3"
    primaryMid: "#FFD6DF"
  dark:
    primaryLight: "rgba(255, 94, 126, 0.14)"
    primaryMid: "rgba(255, 94, 126, 0.28)"
hero:
  sub: Follow along line by line, translate and romanize on-device, explore annotations and credits, and float lyrics over any app.
  screenshots:
    - src: /assets/apps/lyricsbuddy/1-chorus.png
      alt: LyricsBuddy showing synced lyrics with pinyin romanization and English translation
    - src: /assets/apps/lyricsbuddy/2-menu.png
      alt: LyricsBuddy translation menu with Simplified Chinese, Traditional Chinese, and pinyin toggles
    - src: /assets/apps/lyricsbuddy/3-trackInfo.png
      alt: LyricsBuddy Track Info sheet showing song release year, length, listener stats, and bio
    - src: /assets/apps/lyricsbuddy/4-annotation.png
      alt: LyricsBuddy showing a Genius lyric annotation for the selected line
    - src: /assets/apps/lyricsbuddy/5-lyricCard.png
      alt: LyricsBuddy Share Lyrics composer creating a lyric card image with romanization and translation
    - src: /assets/apps/lyricsbuddy/6-pip.png
      alt: LyricsBuddy floating Picture in Picture lyrics window over the iOS Home Screen
    - src: /assets/apps/lyricsbuddy/7-welcome.png
      alt: LyricsBuddy welcome screen with Spotify and Apple Music connection options
featuresTitle: Everything you want while listening.
features:
  - icon: 🎵
    title: Synced Lyrics
    desc: Lyrics scroll in time with Spotify or Apple Music, with tap-to-seek and artwork-tinted backgrounds.
  - icon: 🌐
    title: Translations & Romanization
    desc: Translate lyrics on-device into your language and view pinyin, rōmaji, or Korean romanization right above each line.
  - icon: 💬
    title: Annotations & Song Details
    desc: Read Genius lyric annotations inline, plus songwriting credits, album history, Wikipedia articles, and setlist stats.
  - icon: 🪟
    title: Floating Lyrics (PiP)
    desc: Keep live lyrics floating over other apps automatically when you switch away, with built-in playback controls.
callout:
  icon: 🔒
  title: Private by design.
  desc: LyricsBuddy connects directly to Spotify or Apple Music on your device, translates and romanizes lyrics locally, and never creates accounts, tracks your listening, or collects analytics.
privacyPolicy:
  lastUpdated: November 13, 2026
  sections:
    - title: 1. Information We Access
      content: |
        **Music Playback & Library.** When you connect Spotify (via the Spotify iOS SDK) or Apple Music (via Apple's MusicKit framework), the App accesses your currently playing track metadata, playback position, and playback controls on your device so it can display synced lyrics and let you play, pause, or seek.

        **Lyrics & Track Metadata Lookups.** To fetch synced lyrics, annotations, and song, album, and artist details, the App sends only the currently playing track's title, artist, album, and duration/ISRC to third-party services including LRCLIB, Genius, MusicBrainz, Wikipedia, Last.fm, and setlist.fm. No personal account information or user identifiers are transmitted by us.
    - title: 2. On-Device Processing
      content: |
        Language detection, romanization, Simplified/Traditional Chinese conversion, lyric card image rendering, and lyric translations (powered by Apple's Translation framework) are performed entirely on your device.
    - title: 3. Information We Do Not Collect
      content: |
        - We do not operate backend servers or collect, transmit, or store any personal data.
        - We do not create or require LyricsBuddy user accounts.
        - We do not use analytics, advertising SDKs, or crash-reporting services.
        - We do not track your listening history or usage of the App.
        - We do not sell, share, or otherwise disclose your information to third parties.
    - title: 4. Data Storage
      content: |
        App preferences (such as romanization, script, and floating lyrics settings) and cached lyrics are stored locally on your device. You can clear cached data or remove the App at any time.
    - title: 5. Children's Privacy
      content: |
        LyricsBuddy does not knowingly collect any personal information from children under the age of 13.
    - title: 6. Third-Party Services
      content: |
        Connecting Spotify or Apple Music is subject to Spotify's and Apple's respective terms and privacy policies. Lyrics and metadata lookups are subject to the privacy policies of LRCLIB, Genius, MusicBrainz, Wikipedia, Last.fm, and setlist.fm.
    - title: 7. Changes to This Policy
      content: |
        We may update this Privacy Policy from time to time. If we make changes, we will update the "Last updated" date at the top of this page. Continued use of the App after any changes constitutes your acceptance of the updated policy.
termsOfService:
  lastUpdated: November 13, 2026
  customSections:
    - title: Music Service Connections
      content: |
        LyricsBuddy integrates with Spotify and Apple Music on your device to read currently playing track information and control playback. Use of those services may require an active account or subscription and is governed by Spotify's and Apple's respective terms. You may disconnect either service at any time in the App's Settings or your device's system Settings.
    - title: Third-Party Lyrics & Metadata
      content: |
        Synced lyrics, annotations, and song, album, and artist information are retrieved from third-party sources (including LRCLIB, Genius, MusicBrainz, Wikipedia, Last.fm, and setlist.fm) for personal, non-commercial use. All lyrics and third-party content remain the property of their respective copyright owners and contributors.
---
