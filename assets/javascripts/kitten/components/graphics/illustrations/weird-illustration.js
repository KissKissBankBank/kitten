import React from 'react'
import PropTypes from 'prop-types'

export const WeirdIllustration = ({ title, ...props }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg"
      width="555"
      height="715"
      fill="none"
      viewBox="0 0 555 715"
      {...props}
    >
      {title && <title>{title}</title>}
      <path d="M553.206 616.949L508.673 447.313C508.893 431.739 507.085 416.202 503.294 401.095C498.292 381.074 489.839 362.079 478.317 344.959C478.048 344.578 477.776 344.19 477.502 343.796C475.301 340.502 472.89 337.354 470.284 334.37C479.064 323.417 483.021 308.05 484.794 297.048C485.957 289.907 486.545 282.684 486.553 275.448C486.623 274.007 486.68 272.551 486.714 271.092C486.753 269.572 486.772 268.048 486.772 266.531C486.772 260.894 486.512 255.289 485.993 249.716C482.569 213.48 468.2 179.145 444.795 151.271C421.39 123.397 390.057 103.305 354.96 93.6638C347.705 91.683 340.223 90.6572 332.703 90.6123L327.738 90.5799V76.666C327.738 74.5297 326.914 72.4756 325.437 70.9317C323.96 69.3879 321.945 68.4733 319.811 68.3785C319.715 66.2446 318.801 64.2296 317.258 62.7526C315.715 61.2757 313.662 60.4505 311.526 60.4489V55.89C311.539 54.7919 311.335 53.7019 310.924 52.6835C310.513 51.665 309.904 50.7382 309.132 49.9568C308.361 49.1755 307.441 48.5551 306.428 48.1317C305.415 47.7083 304.327 47.4902 303.229 47.4902C302.131 47.4902 301.044 47.7083 300.03 48.1317C299.017 48.5551 298.098 49.1755 297.326 49.9568C296.554 50.7382 295.945 51.665 295.535 52.6835C295.124 53.7019 294.919 54.7919 294.933 55.89V92.3816C294.739 92.3701 294.542 92.3638 294.344 92.3638C291.904 92.3663 289.565 93.3366 287.84 95.0618C286.114 96.787 285.144 99.1262 285.141 101.566V135.482C285.148 141.706 287.624 147.674 292.026 152.075C296.427 156.477 302.395 158.953 308.62 158.96C332.641 158.931 355.783 167.99 373.402 184.318C391.053 200.562 401.81 222.952 403.461 246.884C404.987 268.872 398.924 290.128 385.93 308.352L338.22 375.266H338.213L338.117 375.409L177.461 616.415L177.107 616.946H177.347V620.768C177.341 626.235 175.167 631.476 171.301 635.342C167.436 639.207 162.194 641.382 156.728 641.387H139.901C127.895 641.401 116.384 646.177 107.895 654.666C99.4049 663.156 94.6294 674.667 94.6157 686.673V713.166L222.737 712.244H222.878L244.15 690.975V713.163H282.896L265.737 616.949H311.73L395.68 491.269L401.459 526.288L399.527 528.175L371.976 556.084C370.536 557.545 369.655 559.464 369.486 561.508C369.317 563.551 369.871 565.589 371.051 567.266C372.231 568.943 373.962 570.153 375.943 570.684C377.923 571.215 380.027 571.034 381.888 570.172L367.259 584.993C366.241 586.023 365.551 587.332 365.275 588.754C364.999 590.176 365.15 591.648 365.709 592.985C366.267 594.321 367.209 595.463 368.414 596.266C369.62 597.069 371.036 597.497 372.485 597.497H372.533C373.709 597.493 374.867 597.204 375.908 596.655C375.338 597.774 375.065 599.022 375.114 600.277C375.164 601.532 375.534 602.754 376.191 603.825C376.847 604.897 377.767 605.782 378.862 606.396C379.958 607.011 381.193 607.334 382.45 607.335C382.465 607.335 382.481 607.335 382.5 607.335C383.676 607.331 384.833 607.041 385.872 606.491C385.077 608.053 384.866 609.848 385.278 611.552C385.69 613.256 386.697 614.756 388.118 615.782C389.54 616.808 391.281 617.293 393.028 617.147C394.775 617.002 396.412 616.237 397.644 614.991L402.794 609.778C402.547 610.628 402.501 611.525 402.66 612.396C402.819 613.267 403.178 614.09 403.71 614.798C404.241 615.506 404.931 616.081 405.723 616.477C406.515 616.873 407.389 617.079 408.275 617.079H408.311C409.061 617.077 409.803 616.926 410.494 616.634C411.185 616.343 411.811 615.917 412.336 615.381L415.616 612.054L416.364 616.606H415.898V620.77C415.893 626.237 413.719 631.478 409.853 635.344C405.987 639.209 400.746 641.384 395.279 641.389H378.451C366.445 641.403 354.935 646.179 346.446 654.669C337.956 663.158 333.181 674.669 333.168 686.675V713.168L461.288 712.246H461.43L482.701 690.977V713.164H521.447L504.287 616.949H553.206Z" fill="url(#paint0_linear_7653_39152)"/>
      <path d="M425.665 303.951C433.53 303.951 439.907 297.574 439.907 289.709C439.907 281.843 433.53 275.467 425.665 275.467C417.799 275.467 411.423 281.843 411.423 289.709C411.423 297.574 417.799 303.951 425.665 303.951Z" stroke="#040405" strokeWidth="3" strokeMiterlimit="10"/>
      <path d="M422.202 319.675V303.52" stroke="#040405" strokeWidth="3" strokeMiterlimit="10"/>
      <path d="M432.213 302.354L436.048 319.676" stroke="#040405" strokeWidth="3" strokeMiterlimit="10"/>
      <path d="M541.141 261.037C541.141 264.174 540.042 267.212 538.035 269.624C536.028 272.035 533.239 273.667 530.154 274.235C527.068 274.804 523.881 274.274 521.146 272.737C518.411 271.2 516.301 268.753 515.183 265.822C513.867 268.105 512.027 270.043 509.817 271.476C507.606 272.91 505.087 273.799 502.466 274.07C499.845 274.341 497.197 273.986 494.739 273.035C492.282 272.083 490.086 270.562 488.33 268.597C486.94 271.335 484.818 273.633 482.201 275.238C479.583 276.843 476.572 277.691 473.502 277.688C470.581 277.696 467.711 276.926 465.187 275.456C464.413 279.198 462.461 282.594 459.617 285.146C456.773 287.698 453.187 289.273 449.383 289.639C445.579 290.005 441.758 289.144 438.48 287.181C435.201 285.218 432.637 282.257 431.163 278.732C429.689 275.206 429.383 271.301 430.289 267.589C431.196 263.877 433.267 260.552 436.199 258.102C439.132 255.652 442.772 254.206 446.586 253.975C450.401 253.743 454.189 254.74 457.396 256.817C458.158 253.905 459.696 251.254 461.846 249.147C463.996 247.04 466.677 245.555 469.604 244.852C472.531 244.148 475.594 244.252 478.467 245.152C481.34 246.051 483.915 247.713 485.918 249.961C487.446 246.961 489.847 244.495 492.805 242.888C495.764 241.28 499.139 240.607 502.488 240.956C505.836 241.305 509 242.661 511.562 244.845C514.125 247.029 515.965 249.937 516.841 253.188C518.5 250.884 520.847 249.167 523.544 248.282C526.242 247.397 529.15 247.39 531.851 248.263C534.552 249.136 536.907 250.843 538.576 253.139C540.246 255.435 541.143 258.201 541.141 261.04" fill="#040405"/>
      <path d="M439.917 289.986C439.923 292.93 439.01 295.802 437.307 298.203L415.216 280.318C417.16 278.214 419.694 276.744 422.486 276.102C425.278 275.461 428.199 275.676 430.867 276.72C433.535 277.764 435.826 279.589 437.441 281.956C439.055 284.323 439.918 287.121 439.917 289.986" fill="#040405"/>
      <path d="M412.846 375.608H338.444L177.797 616.606H311.598L395.924 490.359L401.875 526.41" stroke="#040405" strokeWidth="3" strokeMiterlimit="10"/>
      <path d="M508.374 447.338V447.343L552.812 616.604H416.764L415.894 611.335" stroke="#040405" strokeWidth="3" strokeMiterlimit="10"/>
      <path d="M395.923 490.358L389.324 450.862C389.324 450.862 387.262 430.761 372.315 427.668" stroke="#040405" strokeWidth="3" strokeMiterlimit="10"/>
      <path d="M469.882 334.386C487.042 313.265 486.261 275.443 486.261 275.443C486.407 272.49 486.48 269.519 486.48 266.531C486.48 184.121 430.748 114.732 354.919 93.9943C347.693 92.0206 340.24 90.9982 332.749 90.9529L327.444 90.9186L319.524 90.8709L311.232 90.8181" stroke="#040405" strokeWidth="3" strokeMiterlimit="10"/>
      <path d="M400.297 360.383C405.08 365.045 409.422 370.139 413.266 375.6H402.807L400.297 360.383Z" fill="#040405"/>
      <path d="M265.377 616.605L282.536 712.818H244.54V690.143L222.784 711.899L95.0074 712.818V686.672C95.0074 674.752 99.7424 663.321 108.171 654.892C116.599 646.464 128.031 641.729 139.95 641.729H156.779C162.338 641.729 167.67 639.52 171.601 635.589C175.532 631.658 177.74 626.326 177.74 620.767V616.603" stroke="#040405" strokeWidth="3" strokeMiterlimit="10"/>
      <path d="M177.958 616.997C177.909 616.989 177.866 616.962 177.836 616.923C177.806 616.883 177.792 616.834 177.796 616.785C177.8 616.736 177.823 616.69 177.859 616.657C177.896 616.624 177.943 616.605 177.993 616.605H263.423C263.998 616.584 264.574 616.612 265.144 616.688L268.031 632.562" fill="#040405"/>
      <path d="M503.927 616.605L521.087 712.82H483.091V690.145L461.335 711.901L333.558 712.82V686.674C333.558 674.754 338.293 663.323 346.721 654.894C355.15 646.466 366.581 641.731 378.501 641.731H395.329C400.888 641.731 406.22 639.522 410.151 635.591C414.082 631.66 416.291 626.328 416.291 620.769V616.605" stroke="#040405" strokeWidth="3" strokeMiterlimit="10"/>
      <path d="M416.51 616.997C416.461 616.989 416.418 616.962 416.388 616.923C416.358 616.883 416.344 616.834 416.348 616.785C416.353 616.736 416.375 616.69 416.412 616.657C416.448 616.624 416.496 616.605 416.545 616.605H501.974C502.549 616.584 503.125 616.612 503.695 616.688L506.582 632.562L416.51 616.997Z" fill="#040405"/>
      <path d="M338.444 375.608L386.256 308.553C399.153 290.678 405.378 268.85 403.849 246.862C400.393 197.059 358.588 158.615 308.665 158.615C302.529 158.615 296.644 156.177 292.305 151.838C287.966 147.499 285.529 141.615 285.529 135.478V101.564C285.529 99.2133 286.463 96.9593 288.124 95.2974C289.786 93.6355 292.04 92.7019 294.39 92.7019C296.741 92.7019 298.995 93.6355 300.657 95.2974C302.318 96.9593 303.252 99.2133 303.252 101.564V125.061" stroke="#040405" strokeWidth="3" strokeMiterlimit="10"/>
      <path d="M412.839 375.6C430.246 396.415 439.231 422.991 438.026 450.098C436.82 477.206 425.512 502.88 406.325 522.067L399.819 528.415L372.268 556.324C370.707 557.913 369.841 560.056 369.858 562.283C369.876 564.51 370.776 566.639 372.36 568.203C373.945 569.768 376.086 570.64 378.313 570.628C380.54 570.617 382.671 569.723 384.24 568.142L403.426 548.707" stroke="#040405" strokeWidth="3" strokeMiterlimit="10"/>
      <path d="M383.522 569.056L367.551 585.235C366.898 585.888 366.381 586.663 366.029 587.517C365.677 588.37 365.497 589.285 365.5 590.209C365.503 591.132 365.689 592.045 366.046 592.897C366.404 593.748 366.926 594.52 367.583 595.169C368.24 595.818 369.019 596.33 369.875 596.676C370.731 597.023 371.647 597.197 372.57 597.188C373.493 597.179 374.406 596.987 375.255 596.624C376.104 596.261 376.872 595.734 377.517 595.073L398.256 574.065" stroke="#040405" strokeWidth="3" strokeMiterlimit="10"/>
      <path d="M393.488 578.895L377.517 595.073C376.864 595.726 376.347 596.501 375.995 597.355C375.643 598.209 375.463 599.123 375.466 600.047C375.469 600.97 375.655 601.884 376.012 602.735C376.37 603.586 376.892 604.358 377.549 605.007C378.206 605.656 378.985 606.168 379.841 606.515C380.697 606.861 381.613 607.035 382.536 607.026C383.459 607.017 384.372 606.825 385.221 606.462C386.07 606.099 386.838 605.572 387.483 604.911L408.222 583.903" stroke="#040405" strokeWidth="3" strokeMiterlimit="10"/>
      <path d="M403.454 588.733L387.483 604.912C386.178 606.234 385.452 608.019 385.464 609.876C385.476 611.733 386.225 613.51 387.547 614.814C388.869 616.119 390.654 616.845 392.511 616.833C394.368 616.821 396.145 616.072 397.449 614.75L418.185 593.741" stroke="#040405" strokeWidth="3" strokeMiterlimit="10"/>
      <path d="M416.743 595.203L404.505 607.6C403.506 608.613 402.949 609.981 402.959 611.404C402.968 612.827 403.542 614.188 404.555 615.188C405.567 616.187 406.936 616.743 408.358 616.734C409.781 616.725 411.142 616.151 412.142 615.138L445.175 581.621L449.548 577.439C451.739 575.454 453.891 573.404 456.006 571.291C517.494 509.803 524.853 414.688 478.085 345.15C470.352 334.125 461.365 319.676 431.08 319.676H414.333" stroke="#040405" strokeWidth="3" strokeMiterlimit="10"/>
      <path d="M311.231 60.8004C311.342 60.7934 311.454 60.7915 311.568 60.7915C313.672 60.7915 315.691 61.6251 317.181 63.1098C318.672 64.5946 319.514 66.6095 319.523 68.7135V90.8722" stroke="#040405" strokeWidth="3" strokeMiterlimit="10"/>
      <path d="M319.522 68.7117C321.626 68.7207 323.64 69.5628 325.124 71.0536C326.609 72.5443 327.442 74.5624 327.442 76.6661V90.9162" stroke="#040405" strokeWidth="3" strokeMiterlimit="10"/>
      <path d="M295.321 92.7515V55.8899C295.321 53.7803 296.159 51.7571 297.651 50.2653C299.143 48.7736 301.166 47.9355 303.276 47.9355C305.385 47.9355 307.408 48.7736 308.9 50.2653C310.392 51.7571 311.23 53.7803 311.23 55.8899V90.8182H311.534" stroke="#040405" strokeWidth="3" strokeMiterlimit="10"/>
      <path d="M2.18976 616.949L46.7203 447.313C46.4999 431.739 48.3078 416.202 52.0986 401.095C57.1014 381.074 65.5536 362.079 77.0763 344.959C77.3454 344.578 77.6169 344.19 77.8907 343.796C80.0917 340.504 82.5025 337.358 85.1082 334.376C76.3274 323.423 72.3705 308.057 70.5974 297.055C69.434 289.913 68.8457 282.69 68.8383 275.455C68.7678 274.013 68.7112 272.557 68.6762 271.099C68.6374 269.579 68.6196 268.055 68.6196 266.537C68.6196 260.9 68.879 255.295 69.3978 249.722C72.8212 213.485 87.1906 179.147 110.597 151.272C134.002 123.397 165.337 103.304 200.436 93.6638C207.69 91.6831 215.173 90.6572 222.693 90.6123L227.658 90.5799V76.666C227.658 74.5297 228.482 72.4756 229.959 70.9317C231.435 69.3879 233.451 68.4733 235.585 68.3785C235.68 66.2446 236.595 64.2296 238.138 62.7526C239.681 61.2757 241.734 60.4505 243.87 60.4489V55.89C243.856 54.7919 244.061 53.7019 244.472 52.6835C244.883 51.665 245.492 50.7382 246.263 49.9568C247.035 49.1755 247.954 48.5551 248.968 48.1317C249.981 47.7083 251.068 47.4902 252.166 47.4902C253.265 47.4902 254.352 47.7083 255.365 48.1317C256.379 48.5551 257.298 49.1755 258.07 49.9568C258.841 50.7382 259.45 51.665 259.861 52.6835C260.272 53.7019 260.476 54.7919 260.463 55.89V92.3816C260.657 92.3701 260.853 92.3638 261.052 92.3638C263.491 92.3663 265.831 93.3366 267.556 95.0618C269.281 96.787 270.252 99.1262 270.255 101.566V135.482C270.247 141.706 267.772 147.674 263.37 152.075C258.968 156.477 253.001 158.953 246.776 158.96C222.755 158.931 199.612 167.99 181.994 184.318C164.342 200.562 153.586 222.952 151.935 246.884C150.41 268.872 156.472 290.128 169.467 308.352L217.175 375.266H217.182L217.278 375.409L377.93 616.415L378.283 616.946H378.044V620.768C378.05 626.235 380.224 631.476 384.089 635.342C387.955 639.207 393.196 641.382 398.663 641.387H415.492C427.498 641.401 439.009 646.176 447.499 654.666C455.989 663.156 460.765 674.667 460.779 686.673V713.166L332.658 712.247H332.516L311.244 690.978V713.165H272.499L289.658 616.949H243.663L159.716 491.269L153.935 526.288L155.868 528.175L183.419 556.084C184.859 557.545 185.74 559.464 185.909 561.508C186.078 563.551 185.524 565.589 184.344 567.266C183.164 568.943 181.433 570.153 179.452 570.684C177.472 571.215 175.368 571.034 173.507 570.172L188.136 584.993C189.154 586.023 189.844 587.332 190.12 588.754C190.396 590.176 190.245 591.648 189.686 592.985C189.128 594.321 188.186 595.463 186.981 596.266C185.775 597.069 184.359 597.497 182.91 597.497H182.862C181.686 597.493 180.528 597.204 179.487 596.655C180.057 597.774 180.33 599.022 180.281 600.277C180.231 601.532 179.861 602.754 179.204 603.825C178.548 604.897 177.628 605.782 176.533 606.396C175.437 607.011 174.202 607.334 172.945 607.335C172.93 607.335 172.914 607.335 172.895 607.335C171.719 607.331 170.562 607.041 169.523 606.491C170.318 608.053 170.529 609.848 170.117 611.552C169.705 613.256 168.698 614.756 167.277 615.782C165.855 616.808 164.114 617.293 162.367 617.147C160.62 617.002 158.983 616.237 157.751 614.991L152.601 609.778C152.848 610.628 152.894 611.525 152.735 612.396C152.576 613.267 152.217 614.09 151.685 614.798C151.153 615.506 150.464 616.081 149.672 616.477C148.88 616.873 148.006 617.079 147.12 617.079H147.084C146.334 617.077 145.592 616.926 144.901 616.634C144.21 616.343 143.584 615.917 143.059 615.381L139.78 612.054L139.032 616.606H139.497V620.77C139.503 626.237 141.677 631.478 145.543 635.344C149.408 639.209 154.649 641.384 160.116 641.389H176.945C188.951 641.403 200.461 646.179 208.951 654.669C217.44 663.158 222.215 674.669 222.228 686.675V713.168L94.1084 712.246H93.9673L72.696 690.977V713.164H33.9489L51.1069 616.949H2.18976Z" fill="url(#paint1_linear_7653_39152)"/>
      <path d="M144.459 289.709C144.46 291.58 144.092 293.432 143.377 295.16C142.662 296.889 141.613 298.459 140.29 299.782C138.968 301.104 137.397 302.153 135.669 302.869C133.941 303.584 132.088 303.951 130.218 303.95C127.534 303.95 124.905 303.192 122.633 301.763C120.362 300.334 118.54 298.292 117.379 295.873C116.217 293.453 115.763 290.755 116.069 288.089C116.374 285.422 117.427 282.897 119.105 280.803C119.759 279.987 120.499 279.246 121.314 278.592C123.838 276.564 126.98 275.461 130.217 275.466V275.466C133.995 275.466 137.617 276.967 140.288 279.638C142.958 282.31 144.459 285.932 144.459 289.709V289.709Z" stroke="#040405" strokeWidth="3" strokeMiterlimit="10"/>
      <path d="M129.758 303.748L136.119 319.676" stroke="#040405" strokeWidth="3" strokeMiterlimit="10"/>
      <path d="M119.377 319.676L123.211 302.354" stroke="#040405" strokeWidth="3" strokeMiterlimit="10"/>
      <path d="M153.549 526.409L159.5 490.358L243.826 616.606H377.627L216.98 375.608H142.578" stroke="#040405" strokeWidth="3" strokeMiterlimit="10"/>
      <path d="M139.532 611.335L138.662 616.604H2.6138L47.0521 447.343V447.338" stroke="#040405" strokeWidth="3" strokeMiterlimit="10"/>
      <path d="M159.503 490.358L166.102 450.862C166.102 450.862 168.163 430.761 183.11 427.668" stroke="#040405" strokeWidth="3" strokeMiterlimit="10"/>
      <path d="M152.614 375.6H142.158C146.002 370.138 150.343 365.044 155.127 360.383L152.614 375.6Z" fill="#040405"/>
      <path d="M290.047 616.605L272.888 712.818H310.884V690.143L332.64 711.899L460.417 712.818V686.672C460.417 674.752 455.682 663.321 447.253 654.892C438.825 646.464 427.393 641.729 415.474 641.729H398.645C393.086 641.729 387.754 639.52 383.823 635.589C379.892 631.658 377.684 626.326 377.683 620.767V616.603" stroke="#040405" strokeWidth="3" strokeMiterlimit="10"/>
      <path d="M377.465 616.997C377.513 616.989 377.557 616.962 377.587 616.923C377.617 616.883 377.631 616.834 377.626 616.785C377.622 616.736 377.599 616.69 377.563 616.657C377.527 616.624 377.479 616.605 377.43 616.605H292.001C291.426 616.584 290.85 616.612 290.28 616.688L287.392 632.562" fill="#040405"/>
      <path d="M51.4947 616.605L34.3373 712.818H72.333V690.143L94.0887 711.899L221.866 712.818V686.672C221.866 674.752 217.131 663.321 208.702 654.892C200.274 646.464 188.842 641.729 176.923 641.729H160.095C154.535 641.729 149.204 639.52 145.273 635.589C141.342 631.658 139.133 626.326 139.133 620.767V616.603" stroke="#040405" strokeWidth="3" strokeMiterlimit="10"/>
      <path d="M138.914 616.997C138.963 616.989 139.006 616.962 139.036 616.923C139.066 616.883 139.08 616.834 139.076 616.785C139.071 616.736 139.049 616.69 139.012 616.657C138.976 616.624 138.929 616.605 138.879 616.605H53.4502C52.8752 616.584 52.2995 616.612 51.7293 616.688L48.8417 632.562L138.914 616.997Z" fill="#040405"/>
      <path d="M142.585 375.6C125.178 396.415 116.193 422.991 117.398 450.098C118.604 477.206 129.913 502.88 149.099 522.067L155.606 528.415L183.157 556.324C184.717 557.913 185.583 560.056 185.566 562.283C185.548 564.51 184.649 566.639 183.064 568.203C181.479 569.768 179.338 570.64 177.112 570.628C174.885 570.617 172.753 569.723 171.184 568.142L151.998 548.707" stroke="#040405" strokeWidth="3" strokeMiterlimit="10"/>
      <path d="M171.902 569.056L187.873 585.235C189.163 586.559 189.878 588.34 189.86 590.189C189.842 592.039 189.093 593.805 187.777 595.105C186.461 596.404 184.685 597.13 182.835 597.124C180.986 597.118 179.214 596.38 177.907 595.073L157.168 574.065" stroke="#040405" strokeWidth="3" strokeMiterlimit="10"/>
      <path d="M161.937 578.895L177.908 595.073C178.561 595.726 179.078 596.501 179.43 597.355C179.782 598.209 179.962 599.123 179.959 600.047C179.956 600.97 179.77 601.884 179.413 602.735C179.055 603.586 178.533 604.358 177.876 605.007C177.219 605.656 176.44 606.168 175.584 606.515C174.728 606.861 173.812 607.035 172.889 607.026C171.966 607.017 171.053 606.825 170.204 606.462C169.355 606.099 168.587 605.572 167.942 604.911L147.203 583.903" stroke="#040405" strokeWidth="3" strokeMiterlimit="10"/>
      <path d="M151.97 588.733L167.942 604.912C169.232 606.236 169.946 608.017 169.929 609.867C169.911 611.716 169.162 613.483 167.846 614.782C166.53 616.081 164.753 616.807 162.904 616.801C161.055 616.795 159.283 616.058 157.976 614.75L137.236 593.742" stroke="#040405" strokeWidth="3" strokeMiterlimit="10"/>
      <path d="M141.091 319.676H124.342C94.0595 319.676 85.0695 334.125 77.3369 345.15C30.5693 414.688 37.9286 509.803 99.4162 571.291C101.53 573.404 103.682 575.454 105.873 577.439L110.246 581.621L143.279 615.138C144.279 616.151 145.64 616.725 147.063 616.734C148.486 616.743 149.854 616.187 150.866 615.188C151.879 614.188 152.453 612.827 152.462 611.404C152.472 609.981 151.915 608.613 150.916 607.6L138.678 595.203" stroke="#040405" strokeWidth="3" strokeMiterlimit="10"/>
      <path d="M244.194 90.8181L235.902 90.8709L227.981 90.9186L222.676 90.9529C215.184 90.9978 207.73 92.0202 200.503 93.9943C124.677 114.732 68.9445 184.123 68.9445 266.531C68.9445 269.52 69.0176 272.491 69.1639 275.444C69.1639 275.444 68.3825 313.265 85.5418 334.386" stroke="#040405" strokeWidth="3" strokeMiterlimit="10"/>
      <path d="M216.98 375.608L169.167 308.553C156.27 290.678 150.044 268.85 151.574 246.862C155.03 197.059 196.835 158.615 246.757 158.615C252.893 158.615 258.778 156.177 263.117 151.838C267.456 147.499 269.893 141.615 269.893 135.478V101.564C269.893 99.2133 268.96 96.9593 267.298 95.2974C265.636 93.6355 263.382 92.7019 261.032 92.7019C258.682 92.7019 256.428 93.6355 254.766 95.2974C253.104 96.9593 252.17 99.2133 252.17 101.564V125.061" stroke="#040405" strokeWidth="3" strokeMiterlimit="10"/>
      <path d="M235.902 90.871V68.7135C235.911 66.6098 236.753 64.5954 238.244 63.1111C239.735 61.6268 241.753 60.7934 243.857 60.7935C243.971 60.7935 244.083 60.7935 244.194 60.8024" stroke="#040405" strokeWidth="3" strokeMiterlimit="10"/>
      <path d="M227.981 90.9162V76.6661C227.981 74.5624 228.814 72.5443 230.299 71.0536C231.783 69.5628 233.797 68.7207 235.901 68.7117" stroke="#040405" strokeWidth="3" strokeMiterlimit="10"/>
      <path d="M243.89 90.8206H244.194V55.8898C244.194 53.78 245.032 51.7567 246.524 50.2649C248.015 48.7731 250.039 47.9351 252.148 47.9351C254.258 47.9351 256.281 48.7731 257.773 50.2649C259.265 51.7567 260.103 53.78 260.103 55.8898V92.7507" stroke="#040405" strokeWidth="3" strokeMiterlimit="10"/>
      <path d="M129.761 275.466V341.202H115.52V289.707C115.514 286.467 116.618 283.324 118.649 280.8L120.857 278.589C123.381 276.562 126.524 275.458 129.761 275.463L129.761 275.466Z" fill="#040405"/>
      <path d="M280.597 42.9952V0" stroke="#040405" strokeWidth="3" strokeMiterlimit="10"/>
      <path d="M266.475 43.2382L251.226 3.03833" stroke="#040405" strokeWidth="3" strokeMiterlimit="10"/>
      <path d="M294.719 43.2382L309.969 3.03833" stroke="#040405" strokeWidth="3" strokeMiterlimit="10"/>
      <defs>
        <linearGradient id="paint0_linear_7653_39152" x1="323.911" y1="238.54" x2="323.911" y2="693.197" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFB8CB"/>
          <stop offset="1" stopColor="#1F93FF"/>
          </linearGradient>
          <linearGradient id="paint1_linear_7653_39152" x1="231.484" y1="261.173" x2="216.997" y2="742.228" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFB8CB"/>
          <stop offset="1" stopColor="#1F93FF"/>
        </linearGradient>
      </defs>
    </svg>
  
  )
}

WeirdIllustration.propTypes = {
  title: PropTypes.string,
}

WeirdIllustration.defaultProps = {
  title: null,
}
