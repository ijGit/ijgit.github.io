// @flow strict
const ICONS = {
  SUN: {
    path: 'M12.7488 5.67224C13.1057 5.67298 13.3958 5.38416 13.3965 5.0271C13.3973 4.67005 13.1084 4.37989 12.7515 4.37915C12.3943 4.37842 12.1043 4.66724 12.1035 5.02442C12.1028 5.38135 12.3916 5.67151 12.7488 5.67224ZM9.39535 6.57153C9.70504 6.39355 9.81173 5.99841 9.63388 5.68884C9.45602 5.37914 9.06076 5.27245 8.75119 5.45031C8.44162 5.62817 8.3348 6.02343 8.51266 6.333C8.69064 6.64257 9.08578 6.74926 9.39535 6.57153ZM6.94091 9.02688C6.76171 9.33571 6.3662 9.44094 6.05736 9.26174C5.74852 9.08254 5.6433 8.68691 5.8225 8.37807C6.0017 8.06923 6.39733 7.96413 6.70617 8.14333C7.015 8.32253 7.12011 8.71804 6.94091 9.02688ZM6.04309 12.3806C6.04383 12.0234 5.75501 11.7334 5.39795 11.7327C5.0409 11.7319 4.75074 12.0208 4.75 12.3779C4.74927 12.7349 5.03809 13.0249 5.39527 13.0256C5.7522 13.0265 6.04236 12.7376 6.04309 12.3806ZM5.82116 16.3781C5.6433 16.0684 5.74999 15.6734 6.05968 15.4954C6.36925 15.3176 6.7644 15.4244 6.94237 15.734C7.12023 16.0435 7.01342 16.4388 6.70385 16.6165C6.39428 16.7945 5.99902 16.6877 5.82116 16.3781ZM9.39773 18.1882C9.08889 18.0091 8.69338 18.1142 8.51418 18.423C8.33498 18.7319 8.44008 19.1275 8.74892 19.3067C9.05776 19.4858 9.45339 19.3808 9.63259 19.072C9.81179 18.7631 9.70656 18.3674 9.39773 18.1882ZM12.1035 19.7313C12.1043 19.3743 12.3943 19.0855 12.7515 19.0862C13.1084 19.0869 13.3973 19.377 13.3965 19.7341C13.3958 20.0911 13.1057 20.3799 12.7488 20.3792C12.3916 20.3784 12.1028 20.0884 12.1035 19.7313ZM16.1047 18.1869C15.7951 18.3647 15.6883 18.7599 15.8662 19.0695C16.0442 19.3791 16.4392 19.4859 16.7489 19.308C17.0584 19.1302 17.1652 18.735 16.9873 18.4255C16.8095 18.1158 16.4143 18.009 16.1047 18.1869ZM18.559 15.7315C18.7382 15.4227 19.134 15.3177 19.4428 15.4969C19.7516 15.676 19.8566 16.0716 19.6775 16.3804C19.4983 16.6893 19.1027 16.7945 18.7939 16.6153C18.485 16.4361 18.3799 16.0403 18.559 15.7315ZM20.105 11.7327C19.7478 11.7319 19.4578 12.0208 19.457 12.3779C19.4563 12.7349 19.7451 13.0249 20.1022 13.0256C20.4592 13.0265 20.7493 12.7376 20.75 12.3806C20.7507 12.0234 20.4619 11.7334 20.105 11.7327ZM19.679 8.38046C19.8569 8.69003 19.75 9.08529 19.4405 9.26315C19.1309 9.44101 18.7356 9.33432 18.5579 9.02462C18.3799 8.71505 18.4867 8.31991 18.7964 8.14193C19.106 7.96408 19.5011 8.07089 19.679 8.38046ZM16.1022 6.57006C16.4111 6.74926 16.8068 6.64415 16.986 6.33532C17.1652 6.02648 17.06 5.63085 16.7512 5.45165C16.4423 5.27245 16.0467 5.37767 15.8676 5.68651C15.6884 5.99535 15.7934 6.39086 16.1022 6.57006ZM8.26319 12.3795C8.26319 9.90466 10.2761 7.8916 12.75 7.8916C15.2249 7.8916 17.2379 9.90466 17.2379 12.3795C17.2379 14.8534 15.2249 16.8663 12.75 16.8663C10.2761 16.8663 8.26319 14.8534 8.26319 12.3795ZM9.5553 12.3795C9.5553 14.141 10.9885 15.5741 12.75 15.5741C14.5115 15.5741 15.9458 14.141 15.9458 12.3795C15.9458 10.618 14.5115 9.18372 12.75 9.18372C10.9885 9.18372 9.5553 10.618 9.5553 12.3795Z',
    viewBox: '0 0 24 24',
  },
  MOON: {
    path: 'M12.7488 5.67224C13.1057 5.67298 13.3958 5.38416 13.3965 5.0271C13.3973 4.67005 13.1084 4.37989 12.7515 4.37915C12.3943 4.37842 12.1043 4.66724 12.1035 5.02442C12.1028 5.38135 12.3916 5.67151 12.7488 5.67224ZM9.39535 6.57153C9.70504 6.39355 9.81173 5.99841 9.63388 5.68884C9.45602 5.37914 9.06076 5.27245 8.75119 5.45031C8.44162 5.62817 8.3348 6.02343 8.51266 6.333C8.69064 6.64257 9.08578 6.74926 9.39535 6.57153ZM6.94091 9.02688C6.76171 9.33571 6.3662 9.44094 6.05736 9.26174C5.74852 9.08254 5.6433 8.68691 5.8225 8.37807C6.0017 8.06923 6.39733 7.96413 6.70617 8.14333C7.015 8.32253 7.12011 8.71804 6.94091 9.02688ZM6.04309 12.3806C6.04383 12.0234 5.75501 11.7334 5.39795 11.7327C5.0409 11.7319 4.75074 12.0208 4.75 12.3779C4.74927 12.7349 5.03809 13.0249 5.39527 13.0256C5.7522 13.0265 6.04236 12.7376 6.04309 12.3806ZM5.82116 16.3781C5.6433 16.0684 5.74999 15.6734 6.05968 15.4954C6.36925 15.3176 6.7644 15.4244 6.94237 15.734C7.12023 16.0435 7.01342 16.4388 6.70385 16.6165C6.39428 16.7945 5.99902 16.6877 5.82116 16.3781ZM9.39773 18.1882C9.08889 18.0091 8.69338 18.1142 8.51418 18.423C8.33498 18.7319 8.44008 19.1275 8.74892 19.3067C9.05776 19.4858 9.45339 19.3808 9.63259 19.072C9.81179 18.7631 9.70656 18.3674 9.39773 18.1882ZM12.1035 19.7313C12.1043 19.3743 12.3943 19.0855 12.7515 19.0862C13.1084 19.0869 13.3973 19.377 13.3965 19.7341C13.3958 20.0911 13.1057 20.3799 12.7488 20.3792C12.3916 20.3784 12.1028 20.0884 12.1035 19.7313ZM16.1047 18.1869C15.7951 18.3647 15.6883 18.7599 15.8662 19.0695C16.0442 19.3791 16.4392 19.4859 16.7489 19.308C17.0584 19.1302 17.1652 18.735 16.9873 18.4255C16.8095 18.1158 16.4143 18.009 16.1047 18.1869ZM18.559 15.7315C18.7382 15.4227 19.134 15.3177 19.4428 15.4969C19.7516 15.676 19.8566 16.0716 19.6775 16.3804C19.4983 16.6893 19.1027 16.7945 18.7939 16.6153C18.485 16.4361 18.3799 16.0403 18.559 15.7315ZM20.105 11.7327C19.7478 11.7319 19.4578 12.0208 19.457 12.3779C19.4563 12.7349 19.7451 13.0249 20.1022 13.0256C20.4592 13.0265 20.7493 12.7376 20.75 12.3806C20.7507 12.0234 20.4619 11.7334 20.105 11.7327ZM19.679 8.38046C19.8569 8.69003 19.75 9.08529 19.4405 9.26315C19.1309 9.44101 18.7356 9.33432 18.5579 9.02462C18.3799 8.71505 18.4867 8.31991 18.7964 8.14193C19.106 7.96408 19.5011 8.07089 19.679 8.38046ZM16.1022 6.57006C16.4111 6.74926 16.8068 6.64415 16.986 6.33532C17.1652 6.02648 17.06 5.63085 16.7512 5.45165C16.4423 5.27245 16.0467 5.37767 15.8676 5.68651C15.6884 5.99535 15.7934 6.39086 16.1022 6.57006ZM8.26319 12.3795C8.26319 9.90466 10.2761 7.8916 12.75 7.8916C15.2249 7.8916 17.2379 9.90466 17.2379 12.3795C17.2379 14.8534 15.2249 16.8663 12.75 16.8663C10.2761 16.8663 8.26319 14.8534 8.26319 12.3795ZM9.5553 12.3795C9.5553 14.141 10.9885 15.5741 12.75 15.5741C14.5115 15.5741 15.9458 14.141 15.9458 12.3795C15.9458 10.618 14.5115 9.18372 12.75 9.18372C10.9885 9.18372 9.5553 10.618 9.5553 12.3795Z',
    viewBox: '0 0 24 24',
  },
  TWITTER: {
    path:
      'M25.312 6.375c-0.688 1-1.547 1.891-2.531 2.609 0.016 0.219 0.016 0.438 0.016 0.656 0 6.672-5.078 14.359-14.359 14.359-2.859 0-5.516-0.828-7.75-2.266 0.406 0.047 0.797 0.063 1.219 0.063 2.359 0 4.531-0.797 6.266-2.156-2.219-0.047-4.078-1.5-4.719-3.5 0.313 0.047 0.625 0.078 0.953 0.078 0.453 0 0.906-0.063 1.328-0.172-2.312-0.469-4.047-2.5-4.047-4.953v-0.063c0.672 0.375 1.453 0.609 2.281 0.641-1.359-0.906-2.25-2.453-2.25-4.203 0-0.938 0.25-1.797 0.688-2.547 2.484 3.062 6.219 5.063 10.406 5.281-0.078-0.375-0.125-0.766-0.125-1.156 0-2.781 2.25-5.047 5.047-5.047 1.453 0 2.766 0.609 3.687 1.594 1.141-0.219 2.234-0.641 3.203-1.219-0.375 1.172-1.172 2.156-2.219 2.781 1.016-0.109 2-0.391 2.906-0.781z',
    viewBox: '0 0 26 28',
  },
  FACEBOOK: {
    path:
      'M14.984 0.187v4.125h-2.453c-1.922 0-2.281 0.922-2.281 2.25v2.953h4.578l-0.609 4.625h-3.969v11.859h-4.781v-11.859h-3.984v-4.625h3.984v-3.406c0-3.953 2.422-6.109 5.953-6.109 1.687 0 3.141 0.125 3.563 0.187z',
    viewBox: '0 0 16 28',
  },
  GITHUB: {
    path:
      'M10 19c0 1.141-0.594 3-2 3s-2-1.859-2-3 0.594-3 2-3 2 1.859 2 3zM20 19c0 1.141-0.594 3-2 3s-2-1.859-2-3 0.594-3 2-3 2 1.859 2 3zM22.5 19c0-2.391-1.453-4.5-4-4.5-1.031 0-2.016 0.187-3.047 0.328-0.812 0.125-1.625 0.172-2.453 0.172s-1.641-0.047-2.453-0.172c-1.016-0.141-2.016-0.328-3.047-0.328-2.547 0-4 2.109-4 4.5 0 4.781 4.375 5.516 8.188 5.516h2.625c3.813 0 8.188-0.734 8.188-5.516zM26 16.25c0 1.734-0.172 3.578-0.953 5.172-2.063 4.172-7.734 4.578-11.797 4.578-4.125 0-10.141-0.359-12.281-4.578-0.797-1.578-0.969-3.437-0.969-5.172 0-2.281 0.625-4.438 2.125-6.188-0.281-0.859-0.422-1.766-0.422-2.656 0-1.172 0.266-2.344 0.797-3.406 2.469 0 4.047 1.078 5.922 2.547 1.578-0.375 3.203-0.547 4.828-0.547 1.469 0 2.953 0.156 4.375 0.5 1.859-1.453 3.437-2.5 5.875-2.5 0.531 1.062 0.797 2.234 0.797 3.406 0 0.891-0.141 1.781-0.422 2.625 1.5 1.766 2.125 3.938 2.125 6.219z',
    viewBox: '0 0 26 28',
  },
  EMAIL: {
    path:
      'M26 23.5v-12c-0.328 0.375-0.688 0.719-1.078 1.031-2.234 1.719-4.484 3.469-6.656 5.281-1.172 0.984-2.625 2.188-4.25 2.188h-0.031c-1.625 0-3.078-1.203-4.25-2.188-2.172-1.813-4.422-3.563-6.656-5.281-0.391-0.313-0.75-0.656-1.078-1.031v12c0 0.266 0.234 0.5 0.5 0.5h23c0.266 0 0.5-0.234 0.5-0.5zM26 7.078c0-0.391 0.094-1.078-0.5-1.078h-23c-0.266 0-0.5 0.234-0.5 0.5 0 1.781 0.891 3.328 2.297 4.438 2.094 1.641 4.188 3.297 6.266 4.953 0.828 0.672 2.328 2.109 3.422 2.109h0.031c1.094 0 2.594-1.437 3.422-2.109 2.078-1.656 4.172-3.313 6.266-4.953 1.016-0.797 2.297-2.531 2.297-3.859zM28 6.5v17c0 1.375-1.125 2.5-2.5 2.5h-23c-1.375 0-2.5-1.125-2.5-2.5v-17c0-1.375 1.125-2.5 2.5-2.5h23c1.375 0 2.5 1.125 2.5 2.5z',
    viewBox: '0 0 28 28',
  },
  RSS: {
    path:
      'M6 21c0 1.656-1.344 3-3 3s-3-1.344-3-3 1.344-3 3-3 3 1.344 3 3zM14 22.922c0.016 0.281-0.078 0.547-0.266 0.75-0.187 0.219-0.453 0.328-0.734 0.328h-2.109c-0.516 0-0.938-0.391-0.984-0.906-0.453-4.766-4.234-8.547-9-9-0.516-0.047-0.906-0.469-0.906-0.984v-2.109c0-0.281 0.109-0.547 0.328-0.734 0.172-0.172 0.422-0.266 0.672-0.266h0.078c3.328 0.266 6.469 1.719 8.828 4.094 2.375 2.359 3.828 5.5 4.094 8.828zM22 22.953c0.016 0.266-0.078 0.531-0.281 0.734-0.187 0.203-0.438 0.313-0.719 0.313h-2.234c-0.531 0-0.969-0.406-1-0.938-0.516-9.078-7.75-16.312-16.828-16.844-0.531-0.031-0.938-0.469-0.938-0.984v-2.234c0-0.281 0.109-0.531 0.313-0.719 0.187-0.187 0.438-0.281 0.688-0.281h0.047c5.469 0.281 10.609 2.578 14.484 6.469 3.891 3.875 6.188 9.016 6.469 14.484z',
    viewBox: '0 0 22 28',
  },
  LINKEDIN: {
    path:
      'M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z',
    viewBox: '0 0 24 24',
  },
  YOUTUBE: {
    path:
      'M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z',
    viewBox: '0 0 24 24',
  },
};

export default ICONS;