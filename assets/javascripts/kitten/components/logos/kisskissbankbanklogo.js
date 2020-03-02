import React from 'react'
import PropTypes from 'prop-types'

export const KissKissBankBankLogo = ({
  color,
  width,
  height,
  tiny,
  ...props
}) => {
  const DEFAULT_WIDTH = 134
  const DEFAULT_HEIGHT = 30
  const TINY_WIDTH = 32
  const viewBox = {
    x: tiny ? TINY_WIDTH : DEFAULT_WIDTH,
    y: DEFAULT_HEIGHT,
  }

  return (
    <svg
      role="img"
      aria-label="KissKissBankBank"
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${viewBox.x} ${viewBox.y}`}
      width={width}
      height={tiny ? width : height}
      fill={color}
      {...props}
    >
      <title>KissKissBankBank</title>

      {!tiny && (
        <path d="M94.276 26.763h-2.94v-3.236h2.94c1.105 0 1.973.414 1.973 1.658 0 1.164-.81 1.578-1.975 1.578zm-2.836-8.306h2.84c.77 0 1.5.336 1.5 1.36 0 1.007-.867 1.342-1.5 1.342h-2.84v-2.704zm6.052 3.53c1.104-.55 1.854-1.577 1.854-2.84 0-2.94-2.664-3.57-5.09-3.532h-6.59v14.088h6.767c3.02 0 5.485-1.026 5.485-4.38 0-1.598-.927-2.9-2.426-3.335zm-40.966 5.915c-.747 0-1.397-.335-1.397-1.16 0-.807.63-1.122 1.375-1.3.728-.196 1.594-.255 2.065-.55.08 2.104-.45 3.01-2.044 3.01zm5.27-5.31c0-2.892-2.34-3.422-4.76-3.422-1.158 0-2.34.197-3.243.708-.904.53-1.535 1.396-1.593 2.733h3.127c.157-.862.747-1.277 1.67-1.277.69 0 1.614.296 1.614 1.064 0 .628-.313.825-.883.942-2.32.472-5.94.216-5.94 3.54 0 2.105 1.534 3.087 3.48 3.087 1.22 0 2.5-.354 3.365-1.26.04.336.08.65.197.966h3.362c-.393-.807-.393-1.75-.393-2.616v-4.464zM69.4 19.17c-1.217 0-2.593.65-3.203 1.69h-.04v-1.395H62.91v10.207h3.345v-5.567c0-1.12.55-2.182 1.81-2.182 1.828 0 1.67 1.415 1.67 2.812v4.937h3.344v-6.55c0-1.474-.278-3.952-3.68-3.952zm-23.81 7.593h-2.94v-3.236h2.94c1.107 0 1.975.414 1.975 1.658 0 1.164-.81 1.578-1.974 1.578zm-2.94-8.306h2.843c.77 0 1.5.336 1.5 1.36 0 1.007-.87 1.342-1.5 1.342h-2.84v-2.704zm6.158 3.53c1.104-.55 1.854-1.577 1.854-2.84 0-2.94-2.662-3.57-5.09-3.532h-6.59v14.088h6.768c3.02 0 5.485-1.026 5.485-4.38 0-1.598-.927-2.9-2.426-3.335zm35.653-2.522h-3.753l-3.168 3.27V15.63h-3.345v14.04h3.344v-5.238l3.47 5.238h3.923l-4.21-6.352 3.738-3.855zm33.628-.295c-1.22 0-2.596.65-3.206 1.69h-.038v-1.395H111.6v10.207h3.342v-5.567c0-1.12.55-2.182 1.81-2.182 1.828 0 1.67 1.415 1.67 2.812v4.937h3.344v-6.55c0-1.474-.276-3.952-3.677-3.952zm15.057.295h-3.752l-3.17 3.27V15.63h-3.343v14.04h3.342v-5.238l3.47 5.238h3.925l-4.21-6.352 3.737-3.855zm-27.933 8.437c-.746 0-1.395-.335-1.395-1.16 0-.807.63-1.122 1.377-1.3.727-.196 1.592-.255 2.064-.55.08 2.104-.452 3.01-2.045 3.01zm5.27-5.31c0-2.892-2.338-3.422-4.757-3.422-1.16 0-2.34.197-3.245.708-.905.53-1.534 1.396-1.593 2.733h3.126c.16-.862.75-1.277 1.674-1.277.688 0 1.612.296 1.612 1.064 0 .628-.316.825-.886.942-2.32.472-5.938.216-5.938 3.54 0 2.105 1.534 3.087 3.48 3.087 1.22 0 2.498-.354 3.363-1.26.04.336.08.65.196.966h3.363c-.395-.807-.395-1.75-.395-2.616v-4.464zM94.03 2.72h3.34V0h-3.34v2.72zm0 11.32h3.34V3.836h-3.34V14.04zM83.842 6.164l5.405 7.878h4.41L87.8 5.502 92.963 0h-4.327l-4.793 5.107V0h-3.657v14.04h3.657V6.164zm29.724 6.01c-.472 0-.924-.118-1.24-.354-.333-.256-.55-.63-.55-1.14h-3.185c.1 2.85 2.577 3.656 4.995 3.656 2.3 0 4.898-.904 4.898-3.638 0-.845-.53-2.34-2.597-2.753-1.533-.334-3.775-.51-3.775-1.475 0-.708.886-.767 1.436-.767.414 0 .787.08 1.062.255.275.178.432.453.432.885h3.087c-.118-2.654-2.46-3.302-4.7-3.302-2.006 0-4.662.67-4.662 3.127 0 2.753 2.636 2.813 4.74 3.344.59.14 1.632.296 1.632 1.083 0 .806-.924 1.08-1.573 1.08zm-10.476 0c-.47 0-.923-.118-1.238-.354-.335-.256-.55-.63-.55-1.14h-3.186c.097 2.85 2.575 3.656 4.995 3.656 2.3 0 4.898-.904 4.898-3.638 0-.845-.53-2.34-2.596-2.753-1.533-.334-3.774-.51-3.774-1.475 0-.708.884-.767 1.435-.767.414 0 .788.08 1.064.255.274.178.432.453.432.885h3.086c-.118-2.654-2.458-3.302-4.7-3.302-2.006 0-4.66.67-4.66 3.127 0 2.753 2.634 2.813 4.74 3.344.59.14 1.63.296 1.63 1.083 0 .806-.923 1.08-1.572 1.08zM52.825 2.72h3.342V0h-3.342v2.72zm0 11.32h3.342V3.836h-3.342V14.04zM42.638 6.164l5.404 7.878h4.41l-5.857-8.538L51.758 0H47.43l-4.792 5.107V0H38.98v14.04h3.658V6.164zm29.723 6.01c-.47 0-.922-.118-1.236-.354-.335-.256-.55-.63-.55-1.14h-3.187c.1 2.85 2.576 3.656 4.995 3.656 2.302 0 4.898-.904 4.898-3.638 0-.845-.53-2.34-2.596-2.753-1.533-.334-3.775-.51-3.775-1.475 0-.708.883-.767 1.434-.767.413 0 .787.08 1.063.255.274.178.432.453.432.885h3.086c-.117-2.654-2.458-3.302-4.7-3.302-2.006 0-4.66.67-4.66 3.127 0 2.753 2.634 2.813 4.74 3.344.59.14 1.63.296 1.63 1.083 0 .806-.924 1.08-1.573 1.08zm-10.633 0c-.472 0-.924-.118-1.238-.354-.336-.256-.553-.63-.553-1.14H56.75c.1 2.85 2.577 3.656 4.996 3.656 2.3 0 4.897-.904 4.897-3.638 0-.845-.53-2.34-2.597-2.753-1.533-.334-3.775-.51-3.775-1.475 0-.708.887-.767 1.437-.767.414 0 .787.08 1.063.255.275.178.43.453.43.885h3.09c-.12-2.654-2.46-3.302-4.7-3.302-2.007 0-4.662.67-4.662 3.127 0 2.753 2.635 2.813 4.74 3.344.59.14 1.632.296 1.632 1.083 0 .806-.924 1.08-1.574 1.08z" />
      )}

      <path d="M31.118 10.948c-.004-2.185-1.778-3.954-3.962-3.95-1.055 0-2.012.415-2.72 1.087l-6.76 6.778 6.59 6.57c.726.785 1.762 1.274 2.913 1.27 2.184 0 3.95-1.773 3.95-3.96-.004-1.953-1.42-3.573-3.283-3.894 1.86-.327 3.274-1.95 3.27-3.903z" />
      <path d="M20.276 6.696A11.695 11.695 0 0 0 11.732 3C5.252 3 0 8.252 0 14.732c0 6.48 5.252 11.734 11.732 11.734a11.7 11.7 0 0 0 8.403-3.547l-8.041-8.04 8.182-8.183z" />
    </svg>
  )
}

KissKissBankBankLogo.propTypes = {
  color: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  tiny: PropTypes.bool,
}

KissKissBankBankLogo.defaultProps = {
  color: '#000',
  width: 134,
  height: 30,
  tiny: false,
}
