import React from "react"

export const Dev = () => {
  return (
<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
  <image width="22" height="22" href="data:img/png;base64,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ARgAAIASBGAAAABKEIABAAAoQQAGAACgBAEYAACAEgRgAAAAShCAAQAAKEEABgAAoAQBGAAAgBIEYAAAAEoQgAEAAChBAAYAAKAEARgAAIASBGAAAABKEIABAAAoQQAGAACgBAEYAACAEgRgAAAAShCAAQAAKEEABgAAoAQBGAAAgBIEYAAAAEoQgAEAAChBAAYAAKAEARgAAIASBGAAAABKEIABAAAoQQAGAACgBAEYAACAEgRgAAAAShCAAQAAKEEABgAAoAQBGAAAgBIEYAAAAEoQgAEAAChBAAYAAKAEARgAAIASBGAAAABKEIABAAAoQQAGAACgBAEYAACAEgRgAAAAShCAAQAAKEEABgAAoAQBGAAAgBIEYAAAAEoQgAEAAChBAAYAAKAEARgAAIASBGAAAABKEIABAAAoQQAGAACgBAEYAACAEgRgAAAAShCAAQAAKEEABgAAoAQBGAAAgBIEYAAAAEoQgAEAAChBAAYAAKAEARgAAIASBGAAAABKEIABAAAoQQAGAACgBAEYAACAEgRgAAAAShCAAQAAKEEABgAAoAQBGAAAgBIEYAAAAEoQgAEAAChBAAYAAKAEARgAAIASBGAAAABKEIABAAAoQQAGAACgBAEYAACAEgRgAAAAShCAAQAAKEEABgAAoAQBGAAAgBIEYAAAAEoQgAEAAChBAAYAAKAEARgAAIASBGAAAABKEIABAAAoQQAGAACgBAEYAACAEgRgAAAAShCAAQAAKEEABgAAoAQBGAAAgBIEYAAAAEoQgAEAAChBAAYAAKAEARgAAIASBGAAAABKEIABAAAoQQAGAACgBAEYAACAEgRgAAAAShCAAQAAKEEABgAAoAQBGAAAgBIEYAAAAEoQgAEAAChBAAYAAKAEARgAAIASBGAAAABKEIABAAAoQQAGAACgBAEYAACAEgRgAAAAShCAAQAAKEEABgAAoAQBGAAAgBIEYAAAAEoQgAEAAChBAAYAAKAEARgAAIASBGAAAABKEIABAAAoQQAGAACgBAEYAACAEgRgAAAAShCAAQAAKEEABgAAoAQBGAAAgBIEYAAAAEoQgAEAAChBAAYAAKAEARgAAIASBGAAAABKEIABAAAoQQAGAACgBAEYAACAEgRgAAAAShCAAQAAKEEABgAAoAQBGAAAgBIEYAAAAEoQgAEAAChBAAYAAKAEARgAAIASBGAAAABKEIABAAAoQQAGAACgBAEYAACAEgRgAAAAShCAAQAAKEEABgAAoAQBGAAAgBIEYAAAAEoQgAEAAChBAAYAAKAEARgAAIASBGAAAABKEIABAAAoQQAGAACgBAEYAACAEgRgAAAAShCAAQAAKEEABgAAoAQBGAAAgBIEYAAAAEoQgAEAAChBAAYAAKAEARgAAIASBGAAAABKEIABAAAoQQAGAACgBAEYAACAEgRgAAAAShCAAQAAKEEABgAAoAQBGAAAgBIEYAAAAEoQgAEAAChBAAYAAKAEARgAAIASBGAAAABKEIABAAAoQQAGAACgBAEYAACAEgRgAAAAShCAAQAAKEEABgAAoAQBGAAAgBIEYAAAAEoQgAEAAChBAAYAAKAEARgAAIASBGAAAABKEIABAAAoQQAGAACgBAEYAACAEgRgAAAAShCAAQAAKEEABgAAoAQBGAAAgBIEYAAAAEoQgAEAAChBAAYAAKAEARgAAIASBGAAAABKEIABAAAoQQAGAACgBAEYAACAEgRgAAAAShCAAQAAKEEABgAAoAQBGAAAgBIEYAAAAEoQgAEAAChBAAYAAKAEARgAAIASBGAAAABKEIABAAAoQQAGAACgBAEYAACAEgRgAAAAShCAAQAAKEEABgAAoAQBGAAAgBIEYAAAAEoQgAEAAChBAAYAAKAEARgAAIASBGAAAABKEIABAAAoQQAGAACgBAEYAACAEgRgAAAAShCAAQAAKEEABgAAoAQBGAAAgBIEYAAAAEoQgAEAAChBAAYAAKAEARgAAIASBGAAAABKEIABAAAoQQAGAACgBAEYAACAEgRgAAAAShCAAQAAKEEABgAAoAQBGAAAgBIEYAAAAEoQgAEAAChBAAYAAKAEARgAAIASBGAAAABKEIABAAAoQQAGAACgBAEYAACAEgRgAAAAShCAAQAAKEEABgAAoAQBGAAAgBIEYAAAAEoQgAEAAChBAAYAAKAEARgAAIASBGAAAABKEIABAAAoQQAGAACgBAEYAACAEgRgAAAAShCAAQAAKEEABgAAoAQBGAAAgBIEYAAAAEoQgAEAAChBAAYAAKAEARgAAIASBGAAAABKEIABAAAoQQAGAACgBAEYAACAEgRgAAAAShCAAQAAKEEABgAAoAQBGAAAgBIEYAAAAEoQgAEAAChBAAYAAKAE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"/>
</svg>
  )
}