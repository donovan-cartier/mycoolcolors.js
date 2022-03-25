# mycoolcolors.js

### Documentation

This is a JQuery plug-in.

Use `$("container").colors({})` to start.

**Parameters**

- `shape` - Which shape will fill the container between `stripe, diamond` and `circle`. 

default value: `"stripe"`

- `quantity` - How many shapes per column. 

default value: `2`

- `columns` - How many columns to fill the container with. Ignored if `autofill: true`. 

default value: `4`

- `autofill` - If set to `true`, the number of columns required to fill the parent container will be automatically calculated based on its width. 

default value: `true`

- `color` - Accepts any HEX value. Use `random` to randomize every color.

- `useShade` - If `true`, will generate shades based on `color` and `shadeAmount`.

default value: `true`

- `shadeAmount` - Accepts any integer value, including negative numbers. Negative numbers darken the color, positive number lighten it.

default value: `10`
