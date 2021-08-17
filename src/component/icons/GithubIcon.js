const GithubIcon = (props) => {
  return (
    <svg
      width="46"
      height="46"
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_dd)">
        <path
          d="M41 3H5C3.89543 3 3 3.89543 3 5V41C3 42.1046 3.89543 43 5 43H41C42.1046 43 43 42.1046 43 41V5C43 3.89543 42.1046 3 41 3Z"
          fill="white"
        />
      </g>
      <g clipPath="url(#clip0)">
        <path
          d="M23.4211 10.3684C16.2138 10.3684 10.3684 16.2127 10.3684 23.421C10.3684 29.1881 14.108 34.0807 19.2953 35.8069C19.9469 35.9276 20.1579 35.523 20.1579 35.1793V32.7493C16.5271 33.539 15.7711 31.2091 15.7711 31.2091C15.1772 29.7004 14.3212 29.2991 14.3212 29.2991C13.1367 28.4887 14.4115 28.5061 14.4115 28.5061C15.7222 28.5975 16.4118 29.8516 16.4118 29.8516C17.5757 31.8465 19.465 31.27 20.2101 30.9361C20.3265 30.0931 20.6648 29.5166 21.039 29.1914C18.1402 28.8596 15.0924 27.7404 15.0924 22.7401C15.0924 21.3141 15.6025 20.1503 16.4368 19.2366C16.3019 18.907 15.8549 17.5789 16.5641 15.782C16.5641 15.782 17.6605 15.4317 20.1546 17.1199C21.1956 16.8305 22.3116 16.6859 23.4211 16.6804C24.5305 16.6859 25.6476 16.8305 26.6907 17.1199C29.1827 15.4317 30.2769 15.782 30.2769 15.782C30.9872 17.58 30.5402 18.9081 30.4053 19.2366C31.2428 20.1503 31.7486 21.3152 31.7486 22.7401C31.7486 27.7534 28.6954 28.8575 25.789 29.1805C26.2567 29.5851 26.6842 30.3792 26.6842 31.5974V35.1793C26.6842 35.5263 26.8931 35.9342 27.5555 35.8058C32.7385 34.0774 36.4737 29.186 36.4737 23.421C36.4737 16.2127 30.6294 10.3684 23.4211 10.3684Z"
          fill="black"
        />
      </g>
      <defs>
        <filter
          id="filter0_dd"
          x="2"
          y="2"
          width="42"
          height="43"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="0.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.168 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="0.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.084 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow"
            result="effect2_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow"
            result="shape"
          />
        </filter>
        <clipPath id="clip0">
          <rect
            width="26.1053"
            height="26.1053"
            fill="white"
            transform="translate(10.3684 10.3684)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default GithubIcon;
