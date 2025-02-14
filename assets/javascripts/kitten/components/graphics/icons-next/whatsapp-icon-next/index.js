import React from 'react'
import PropTypes from 'prop-types'

export const WhatsappIconNext = ({ color, title, ...props }) => (
  <svg
    width="27"
    height="27"
    fill="none"
    viewBox="0 0 27 27"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {title && <title>{title}</title>}
    <path
      d="M13.373.583C6.26.583.47 6.368.469 13.48a12.87 12.87 0 0 0 1.723 6.448L.44 26.417l6.758-1.597a12.893 12.893 0 0 0 6.166 1.569h.005c7.11 0 12.898-5.786 12.902-12.897a12.816 12.816 0 0 0-3.774-9.127A12.817 12.817 0 0 0 13.373.583Zm-.003 2.584a10.27 10.27 0 0 1 7.301 3.024 10.241 10.241 0 0 1 3.017 7.299c-.002 5.688-4.63 10.315-10.32 10.315a10.332 10.332 0 0 1-4.93-1.253l-.87-.475-.961.227-2.543.6.62-2.305.28-1.034-.535-.929a10.307 10.307 0 0 1-1.377-5.156C3.055 7.794 7.683 3.167 13.37 3.167ZM8.806 7.526c-.215 0-.564.08-.86.404-.296.321-1.13 1.1-1.13 2.686 0 1.587 1.155 3.12 1.317 3.335.16.215 2.23 3.573 5.507 4.864 2.723 1.074 3.276.862 3.868.808.591-.053 1.908-.779 2.177-1.532.268-.753.269-1.4.189-1.534-.08-.134-.295-.214-.618-.375-.322-.162-1.907-.94-2.203-1.047-.295-.107-.512-.162-.726.161-.215.323-.83 1.047-1.02 1.262-.188.215-.375.244-.698.083-.323-.163-1.361-.504-2.594-1.602-.958-.854-1.605-1.907-1.793-2.23-.188-.322-.018-.499.144-.659.144-.144.32-.376.481-.565.16-.189.216-.323.323-.537.107-.215.053-.404-.027-.565-.08-.162-.708-1.754-.994-2.392-.242-.536-.497-.548-.727-.557-.187-.008-.401-.008-.616-.008Z"
      fill={color}
    />
  </svg>
)

WhatsappIconNext.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
}

WhatsappIconNext.defaultProps = {
  color: '#fff',
  title: null,
}
