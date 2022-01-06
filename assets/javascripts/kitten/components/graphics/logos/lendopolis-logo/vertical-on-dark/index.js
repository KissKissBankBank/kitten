import React from 'react'
import PropTypes from 'prop-types'
import { computeFromRatio } from '../../../../../helpers/utils/ratio'

export const LendopolisLogoVerticalOnDark = ({ width, height, ...props }) => {
  const DEFAULT_WIDTH = 633
  const DEFAULT_HEIGHT = 282
  const computed = computeFromRatio({
    defaultWidth: DEFAULT_WIDTH,
    defaultHeight: DEFAULT_HEIGHT,
    width,
    height,
  })

  const viewBox = {
    x: DEFAULT_WIDTH,
    y: DEFAULT_HEIGHT,
  }

  return (
    <svg
      role="img"
      aria-label="Lendopolis"
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${viewBox.x} ${viewBox.y}`}
      width={computed.width}
      height={computed.height}
      {...props}
    >
      <title>Lendopolis</title>
      <path
        fill="#fff"
        d="M299.72 179.4a31.28 31.28 0 0 0-31.01 31.13 31.28 31.28 0 0 0 31.13 31.13c8.12 0 15.92-3.17 21.73-8.84a30.61 30.61 0 0 0 9.48-22.23 31.39 31.39 0 0 0-31.24-31.19h-.09Zm11.32 49.27a20.79 20.79 0 0 1-11.27 3.33 21.61 21.61 0 0 1-21.28-21.5c0-4.7 1.53-9.27 4.37-13.01a21.01 21.01 0 0 1 16.91-8.43c11.7.1 21.27 9.77 21.27 21.47 0 7.36-3.78 14.22-10 18.15v-.01Zm73.52-44.95c-4.46-3.1-9.7-3.32-15.11-3.32h-11.19v60.25h10.09V216h2.67c4.45 0 10.09-.48 14.59-4.19.35-.31.61-.57.92-.83l.13-.13a17.93 17.93 0 0 0 5.06-12.67 17.24 17.24 0 0 0-7.16-14.46Zm-8.17 21.89c-1.85.51-3.76.75-5.68.7h-2.31V190h.43c8.52 0 12.89 1.22 12.89 8-.04 4.07-1.7 6.47-5.33 7.61Zm70.55-26.21c-17.03.07-31 14.1-31 31.13a31.28 31.28 0 0 0 31.13 31.13c7.95 0 15.6-3.04 21.37-8.49 6.31-5.8 9.9-14 9.87-22.58a31.45 31.45 0 0 0-31.37-31.19Zm11.27 49.27a20.74 20.74 0 0 1-11.27 3.33 21.61 21.61 0 0 1-21.27-21.5c0-4.7 1.53-9.27 4.37-13.01a21.01 21.01 0 0 1 16.9-8.43c11.7.1 21.27 9.77 21.27 21.47 0 7.36-3.78 14.22-10 18.15v-.01Zm57.41 2.36v-50.67h-10.1v60.28h25.65v-9.61h-15.55Zm40.62-50.67h10.1v60.28h-10.1zm61.99 24.29-3.72-1.65c-4.37-2-7.69-3.76-7.69-7.13a6.5 6.5 0 0 1 .39-2.09 7.34 7.34 0 0 1 7.08-4.76c3.67 0 5.94 1.44 8.08 5.19l1 1.71 8.17-5.24-1.74-3a18.08 18.08 0 0 0-15.38-8.3 18.92 18.92 0 0 0-12.8 4.85 15.34 15.34 0 0 0-4.89 11.4c0 9.31 6.59 13.11 13.41 16.17l3.49 1.48.26.13c5.6 2.58 9 4.37 9 9.4a9.15 9.15 0 0 1-5.94 8.38c-1.2.49-2.5.74-3.8.75-4.37 0-7.95-3-9.18-7.56 0-.22-.57-3.45-.57-3.45l-9.83 2.75.31 2.05c2.1 9.66 9.7 15.86 19.4 15.86a19.8 19.8 0 0 0 13.41-5.16c4-3.63 6.25-8.8 6.2-14.19.02-10.3-7.58-14.45-14.66-17.59ZM10.09 231.03v-50.67H0v60.28h25.64v-9.61H10.09Zm40.45-50.67v60.28h33.12v-9.61H60.63v-18.39h22.33v-9.65H60.63v-12.98h23.03v-9.65H50.54Zm106.9.04v38.84l-44-39.84v61.37h10.07v-39.4l44 40.23v-61.2h-10.07Zm76.36 7.25c-7.07-6-14.41-7.29-23.28-7.29h-12.54v60.28h12.36c9.26 0 16.47-1.26 23.59-7.6.61-.52 1.14-1.09 1.66-1.62a29.44 29.44 0 0 0 8.22-20.83c0-9.35-3.45-17.3-10.01-22.94Zm-6.51 38.05a38.4 38.4 0 0 1-3.62 2.67h-.05c-3.32 1.84-7 2.62-12.84 2.62h-2.66V190h2.66c6.38 0 11.58.83 16.29 5a20.53 20.53 0 0 1 6.69 15.51 20.8 20.8 0 0 1-6.47 15.19ZM0 253.6h2.59v20.82H0zm10.91 9.63a4.4 4.4 0 0 1 3.89-2.12c3.65 0 4.59 2.45 4.59 5.6v7.71H16.9V267c0-2.21-.3-3.7-2.84-3.7-3.2 0-3.2 2.81-3.2 5.16v5.94H8.37v-12.91h2.49l.05 1.74Zm18.6 6.33 3.73-8.07h2.79l-6.52 13.37-6.49-13.37h2.79l3.7 8.07Zm11.55-1.19v.22a4.08 4.08 0 0 0 3.89 4.06c1.91 0 2.93-1 3.87-2.51l2.09 1.19a6.73 6.73 0 0 1-6 3.53c-3.95 0-6.35-3-6.35-6.79 0-4 2.13-7 6.3-7s6 3 6 6.87v.39l-9.8.04Zm7.37-1.88a3.5 3.5 0 0 0-3.56-3.23 3.71 3.71 0 0 0-3.68 3.23h7.24Zm12.01-2.04a1.9 1.9 0 0 0-1.66-1.13c-.71 0-1.31.56-1.35 1.27 0 1.13 1.49 1.63 3 2.32s3 1.63 3 3.67a4.35 4.35 0 0 1-4.33 4.28h-.11a4.78 4.78 0 0 1-4.48-2.86l2.13-1a2.56 2.56 0 0 0 2.49 1.67c1 0 1.84-.82 1.86-1.83 0-.6-.36-1.16-.92-1.41l-2.43-1.3c-1.43-.77-2.48-1.49-2.48-3.26 0-2.06 1.7-3.75 3.76-3.75h.05a3.86 3.86 0 0 1 3.54 2.26l-2.07 1.07Zm10.46 9.97h-2.48v-10.61h-1.36v-2.32h1.36v-4.94h2.48v4.94h2.43v2.32H70.9v10.61Zm9.5-18.84c0 .94-.77 1.71-1.71 1.71s-1.71-.77-1.71-1.71.77-1.71 1.71-1.71 1.71.77 1.71 1.71Zm-.47 18.84h-2.48v-12.93h2.48v12.93Zm11.38-9.97c-.3-.66-.94-1.1-1.66-1.13-.71 0-1.31.56-1.35 1.27 0 1.13 1.49 1.63 3 2.32s3 1.63 3 3.67a4.36 4.36 0 0 1-4.34 4.28h-.11a4.78 4.78 0 0 1-4.47-2.9l2.13-1a2.56 2.56 0 0 0 2.49 1.67c1 0 1.84-.82 1.85-1.83 0-.6-.36-1.16-.91-1.41l-2.43-1.3c-1.43-.77-2.48-1.49-2.48-3.26 0-2.06 1.7-3.75 3.76-3.75h.05c1.52-.01 2.9.88 3.53 2.26l-2.06 1.11Zm12.81 0c-.3-.66-.94-1.1-1.66-1.13-.71 0-1.31.56-1.35 1.27 0 1.13 1.49 1.63 3 2.32s3 1.63 3 3.67a4.36 4.36 0 0 1-4.34 4.28h-.11a4.78 4.78 0 0 1-4.47-2.9l2.13-1a2.56 2.56 0 0 0 2.48 1.67c1 0 1.84-.82 1.86-1.83a1.58 1.58 0 0 0-.92-1.41l-2.43-1.3c-1.43-.77-2.48-1.49-2.48-3.26 0-2.06 1.7-3.75 3.76-3.75h.05a3.87 3.87 0 0 1 3.54 2.26l-2.06 1.11Zm9.11 3.92v.21a4.09 4.09 0 0 0 3.89 4.07c1.91 0 2.93-1 3.87-2.51l2.1 1.19a6.75 6.75 0 0 1-6 3.53c-4 0-6.36-3-6.36-6.79 0-4 2.13-7 6.3-7s6.05 3 6.05 6.87v.39l-9.85.04Zm7.37-1.88a3.5 3.5 0 0 0-3.56-3.23 3.7 3.7 0 0 0-3.67 3.23h7.23Zm9.22-3.37h.06a4.21 4.21 0 0 1 3.42-2 4.12 4.12 0 0 1 3.73 2.29 4.68 4.68 0 0 1 4-2.29c3.39 0 4.28 2.65 4.28 5.58v7.73h-2.49v-7.33c0-1.66-.22-3.78-2.4-3.78-2.65 0-2.84 2.76-2.84 4.75v6.35h-2.49v-6.85c0-1.69-.08-4.25-2.37-4.25-2.66 0-2.88 2.73-2.88 4.75v6.35h-2.48v-12.93h2.48l-.02 1.63Zm22.48 5.25v.21a4.09 4.09 0 0 0 3.89 4.07c1.91 0 2.93-1 3.87-2.51l2.1 1.19a6.75 6.75 0 0 1-6 3.53c-3.94 0-6.35-3-6.35-6.79 0-4 2.13-7 6.3-7s6 3 6 6.87v.39l-9.81.04Zm7.37-1.88a3.5 3.5 0 0 0-3.56-3.23 3.7 3.7 0 0 0-3.67 3.23h7.23Zm9.31-3.26a4.4 4.4 0 0 1 3.89-2.12c3.65 0 4.59 2.45 4.59 5.6v7.71h-2.49V267c0-2.21-.3-3.7-2.84-3.7-3.2 0-3.2 2.81-3.2 5.16v5.94h-2.42v-12.91H169l-.02 1.74Zm17 11.19h-2.47v-10.61h-1.36v-2.32h1.36v-4.94h2.48v4.94h2.43v2.32h-2.43l-.01 10.61Zm25.82-2.02h-.05a5.34 5.34 0 0 1-4.4 2.46c-4 0-6.18-3.29-6.18-7 0-3.53 2.34-6.76 6.07-6.76a5.3 5.3 0 0 1 4.51 2.54h.05v-13.2h2.49v24h-2.49v-2.04Zm.14-4.44c0-2.52-1.52-4.64-4.2-4.64s-4.09 2.23-4.09 4.64c0 2.41 1.47 4.69 4.09 4.69s4.2-2.15 4.2-4.65v-.04Zm19.91 6.46h-2.49v-2h-.05a5.3 5.3 0 0 1-4.4 2.46c-3.94 0-6.18-3.29-6.18-7 0-3.53 2.35-6.76 6.1-6.76a5.3 5.3 0 0 1 4.48 2.54h.05v-2.16h2.49v12.92Zm-2.34-6.42c0-2.52-1.52-4.64-4.2-4.64s-4.09 2.23-4.09 4.64c0 2.41 1.47 4.69 4.09 4.69s4.2-2.19 4.2-4.69Zm10.26-4.77h.05a4.42 4.42 0 0 1 3.9-2.12c3.64 0 4.58 2.45 4.58 5.6v7.71h-2.48V267c0-2.21-.31-3.7-2.85-3.7-3.2 0-3.2 2.81-3.2 5.16v5.94h-2.49v-12.91h2.49v1.74Zm19.35 1.22a1.9 1.9 0 0 0-1.65-1.13 1.35 1.35 0 0 0-1.36 1.27c0 1.13 1.5 1.63 3 2.32s3 1.63 3 3.67a4.36 4.36 0 0 1-4.34 4.28h-.11a4.77 4.77 0 0 1-4.47-2.9l2.12-1a2.57 2.57 0 0 0 2.5 1.67c1 0 1.84-.82 1.85-1.83 0-.6-.36-1.16-.91-1.41l-2.43-1.3c-1.44-.77-2.49-1.49-2.49-3.26a3.79 3.79 0 0 1 3.77-3.75h.05c1.52-.01 2.9.88 3.53 2.26l-2.06 1.11Zm17.9-14.03h2.49v24h-2.49zm9.74 17.95v.21a4.09 4.09 0 0 0 3.89 4.07c1.91 0 2.93-1 3.87-2.51l2.1 1.19a6.74 6.74 0 0 1-6 3.53c-3.95 0-6.36-3-6.36-6.79 0-4 2.13-7 6.3-7s6.05 3 6.05 6.87v.39l-9.85.04Zm7.37-1.88a3.5 3.5 0 0 0-3.56-3.23 3.7 3.7 0 0 0-3.67 3.23h7.23Zm12.01-2.04a1.9 1.9 0 0 0-1.65-1.13 1.35 1.35 0 0 0-1.36 1.27c0 1.13 1.5 1.63 3 2.32s3 1.63 3 3.67a4.36 4.36 0 0 1-4.34 4.28h-.11a4.77 4.77 0 0 1-4.47-2.9l2.12-1a2.57 2.57 0 0 0 2.5 1.67c1 0 1.84-.82 1.85-1.83 0-.6-.36-1.16-.91-1.41l-2.43-1.3c-1.44-.77-2.49-1.49-2.49-3.26a3.79 3.79 0 0 1 3.77-3.75h.05c1.52-.01 2.9.88 3.53 2.26l-2.06 1.11Zm19.3 3.92v.21a4.09 4.09 0 0 0 3.9 4.07c1.9 0 2.92-1 3.86-2.51l2.1 1.19a6.74 6.74 0 0 1-6 3.53c-3.95 0-6.35-3-6.35-6.79 0-4 2.12-7 6.29-7s6.05 3 6.05 6.87v.39l-9.85.04Zm7.38-1.88a3.52 3.52 0 0 0-3.57-3.23 3.71 3.71 0 0 0-3.67 3.23h7.24Zm.14-11.13-4.53 4.12-1.22-.75 3.45-4.58 2.3 1.21Zm9.16 7.87h.05a4.42 4.42 0 0 1 3.9-2.12c3.64 0 4.58 2.45 4.58 5.6v7.71h-2.48V267c0-2.21-.31-3.7-2.85-3.7-3.2 0-3.2 2.81-3.2 5.16v5.94h-2.49v-12.91h2.49v1.74Zm15.65 5.14v.21a4.09 4.09 0 0 0 3.9 4.07c1.9 0 2.93-1 3.87-2.51l2.09 1.19a6.74 6.74 0 0 1-6 3.53c-3.95 0-6.35-3-6.35-6.79 0-4 2.13-7 6.3-7s6 3 6 6.87v.39l-9.81.04Zm7.38-1.88a3.5 3.5 0 0 0-3.56-3.23 3.71 3.71 0 0 0-3.68 3.23h7.24Zm9.47-2.9h.08a3.73 3.73 0 0 1 3.54-2.48c.71.02 1.4.24 2 .63l-1.09 2.26a2.16 2.16 0 0 0-1.52-.53c-2.68 0-3 2.49-3 4.59v6.35h-2.49v-12.92h2.49l-.01 2.1Zm21.34 10.58c0 4.45-1.27 7.65-6.29 7.65-3.59 0-6.19-2.21-6.25-5.85h2.49c0 2.32 1.6 3.64 3.87 3.64 3.06 0 3.7-2.1 3.7-4.75v-2.46h-.06a5.32 5.32 0 0 1-4.39 2.46c-4 0-6.19-3.29-6.19-7 0-3.53 2.35-6.76 6.08-6.76 1.85 0 3.57 1 4.5 2.59h.09v-2.21h2.48l-.03 12.69Zm-2.34-6.17c0-2.52-1.52-4.64-4.2-4.64s-4.09 2.23-4.09 4.64c0 2.41 1.46 4.69 4.09 4.69s4.2-2.19 4.2-4.69Zm11.29-12.42a1.73 1.73 0 0 1-3.44-.13 1.73 1.73 0 1 1 3.44.13Zm-.47 18.84h-2.49v-12.93h2.49v12.93Zm7.67-6.05v.21a4.09 4.09 0 0 0 3.9 4.07c1.9 0 2.92-1 3.86-2.51l2.1 1.19a6.74 6.74 0 0 1-6 3.53c-4 0-6.35-3-6.35-6.79 0-4 2.12-7 6.29-7s6.05 3 6.05 6.87v.39l-9.85.04Zm7.38-1.88a3.52 3.52 0 0 0-3.57-3.23 3.7 3.7 0 0 0-3.67 3.23h7.24Zm12.02-2.04c-.3-.66-.94-1.1-1.66-1.13-.71 0-1.31.56-1.35 1.27 0 1.13 1.49 1.63 3 2.32s3 1.63 3 3.67a4.36 4.36 0 0 1-4.34 4.28h-.11a4.77 4.77 0 0 1-4.47-2.9l2.13-1a2.55 2.55 0 0 0 2.49 1.67c1 0 1.84-.82 1.85-1.83 0-.6-.36-1.16-.91-1.41l-2.43-1.3c-1.43-.77-2.48-1.49-2.48-3.26 0-2.06 1.7-3.75 3.76-3.75h.05c1.52-.01 2.9.88 3.53 2.26l-2.06 1.11Zm20.44-.86h.09a3.7 3.7 0 0 1 5.58-1.85l-1.11 2.26a2.14 2.14 0 0 0-1.51-.53c-2.68 0-3 2.49-3 4.59v6.35h-2.49v-12.92h2.48l-.04 2.1Zm10.75 4.78v.22a4.08 4.08 0 0 0 3.89 4.06c1.9 0 2.93-1 3.87-2.51l2.09 1.19a6.73 6.73 0 0 1-6 3.53c-3.95 0-6.35-3-6.35-6.79 0-4 2.13-7 6.3-7s6 3 6 6.87v.39l-9.8.04Zm7.37-1.88a3.5 3.5 0 0 0-3.56-3.23 3.71 3.71 0 0 0-3.68 3.23h7.24Zm9.3-3.26h.06a4.4 4.4 0 0 1 3.89-2.12c3.65 0 4.59 2.45 4.59 5.6v7.71h-2.49V267c0-2.21-.3-3.7-2.85-3.7-3.2 0-3.2 2.81-3.2 5.16v5.94h-2.48v-12.91h2.48v1.74Zm26.81 4.77v.03c0 3.79-3.12 6.9-6.9 6.9a6.93 6.93 0 0 1-6.9-6.9c0-3.78 3.12-6.9 6.9-6.9h.11a6.82 6.82 0 0 1 6.79 6.79v.08Zm-11.32 0a4.44 4.44 0 0 0 4.42 4.34c2.42 0 4.42-2 4.42-4.42s-2-4.42-4.42-4.42a4.51 4.51 0 0 0-4.42 4.5Zm18.17-6.51v7.16c0 2.07.52 3.89 3 3.89s3-1.82 3-3.89v-7.16h2.48v7.43c0 3.54-1.66 5.94-5.47 5.94-3.81 0-5.47-2.4-5.47-5.94v-7.43h2.46Zm18.39 8.07 3.73-8.07h2.79l-6.52 13.37-6.49-13.37h2.79l3.7 8.07Zm11.57-1.19v.22a4.08 4.08 0 0 0 3.89 4.06c1.91 0 2.93-1 3.87-2.51l2.1 1.19a6.75 6.75 0 0 1-6 3.53c-4 0-6.35-3-6.35-6.79 0-4 2.13-7 6.3-7s6.05 3 6.05 6.87v.39l-9.86.04Zm7.37-1.88a3.5 3.5 0 0 0-3.56-3.23 3.71 3.71 0 0 0-3.68 3.23h7.24Zm6.93-16.07h2.48v24h-2.48zm20.35 24h-2.49v-2a5.3 5.3 0 0 1-4.39 2.46c-4 0-6.19-3.29-6.19-7 0-3.53 2.35-6.76 6.1-6.76a5.3 5.3 0 0 1 4.48 2.54v-2.16h2.49v12.92Zm-2.35-6.42c0-2.52-1.52-4.64-4.2-4.64s-4.08 2.23-4.08 4.64c0 2.41 1.46 4.69 4.08 4.69s4.2-2.19 4.2-4.69Zm7.59-17.55h2.49v13.2a5.32 5.32 0 0 1 4.51-2.54c3.72 0 6.07 3.23 6.07 6.76 0 3.7-2.21 7-6.18 7a5.34 5.34 0 0 1-4.4-2.46v2h-2.49v-23.96ZM593.51 268c0-2.52-1.52-4.64-4.2-4.64s-4.09 2.23-4.09 4.64c0 2.41 1.46 4.69 4.09 4.69s4.2-2.19 4.2-4.69Zm7.24-17.58h2.48v24h-2.48zm9.76 17.95v.22a4.08 4.08 0 0 0 3.89 4.06c1.91 0 2.93-1 3.87-2.51l2.1 1.19a6.75 6.75 0 0 1-6 3.53c-4 0-6.35-3-6.35-6.79 0-4 2.13-7 6.3-7s6.05 3 6.05 6.87v.39l-9.86.04Zm7.37-1.88a3.5 3.5 0 0 0-3.56-3.23 3.71 3.71 0 0 0-3.68 3.23h7.24Zm11.97-2.04a1.9 1.9 0 0 0-1.66-1.13c-.71 0-1.31.56-1.35 1.27 0 1.13 1.49 1.63 3 2.32s3 1.63 3 3.67a4.35 4.35 0 0 1-4.33 4.28h-.11a4.78 4.78 0 0 1-4.48-2.9l2.13-1a2.56 2.56 0 0 0 2.5 1.67c1 0 1.84-.82 1.85-1.83 0-.6-.36-1.16-.91-1.41l-2.44-1.3c-1.43-.77-2.48-1.49-2.48-3.26 0-2.06 1.7-3.75 3.76-3.75h.05a3.85 3.85 0 0 1 3.54 2.26l-2.07 1.11ZM316.51 0c-39.95.04-72.8 32.9-72.84 72.85a72.15 72.15 0 0 0 8 33.09 72.75 72.75 0 0 0 108.82 24.89 72.79 72.79 0 0 0 28.85-58.04C389.34 32.86 356.48 0 316.55 0h-.04Zm59.39 98.24h-16.5a3 3 0 0 0-3 3v22.35a39.5 39.5 0 0 1-2.71 2V79.14a3 3 0 0 0-3-3h-6.83a3 3 0 0 0-3 3l.08 53.46s-1.69.7-2.76 1.07V60.75a3 3 0 0 0-3-3h-6.84a3 3 0 0 0-3 3v76.05c-.86.13-1.77.25-2.67.33V44.86a3 3 0 0 0-3-3H313a3 3 0 0 0-3 3v92.27c-.91-.08-1.85-.2-2.76-.33V60.75a3 3 0 0 0-3-3h-6.73a3 3 0 0 0-3 3v72.84c-1.12-.41-3-1.15-3-1.15v-53.3a3 3 0 0 0-3-3h-6.83a3 3 0 0 0-3 3v46.18c-1-.7-2-1.44-2.92-2.22v-21.86a3 3 0 0 0-3-3H257c-4.11-10-5.23-16.42-5.23-25.44.44-35.14 29.47-63.82 64.61-63.82 35.15 0 64.18 28.68 64.62 63.82a62.11 62.11 0 0 1-5.14 25.44h.04Z"
      />
      <path
        fill="#fff"
        d="m346.63 73.53 23-37.48A64.9 64.9 0 0 0 337 11.62l-5.49 43.84h5.86a3.69 3.69 0 0 1 3.67 3.67v14.4h5.59Zm-60.51 0-23-37.48a64.9 64.9 0 0 1 32.63-24.43l5.47 43.84h-5.87c-2 0-3.66 1.65-3.66 3.66v14.41h-5.57Z"
      />
    </svg>
  )
}

LendopolisLogoVerticalOnDark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

LendopolisLogoVerticalOnDark.defaultProps = {
  width: null,
  height: null,
}
