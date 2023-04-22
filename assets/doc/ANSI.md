# American National Standards Institute ANSI (ANSI)
ANSI color codes are sequences of characters used to control the color and formatting of text on terminals and other output devices. They are often used in command-line interfaces to provide more visually appealing and informative output.

## Basics

The basic syntax of an ANSI color code is as follows:

```powershell
\033[<code>m
```
The `\033` is the `escape character` used to indicate the start of the ANSI code.

where `<code>` is a sequence of semicolon-separated values that represent the desired text attributes.



## Text Attributes

There are several text attributes that can be controlled with ANSI color codes:

### Color
 ```powershell
 \033[<foreground_code>m
 ```

 The <foreground_code> value determines the color of the text. The following table lists the available values:

Foreground Code Table
| Foreground Code | Color   |
| --------------- | ------- |
| `30`            | Black   |
| `31`            | Red     |
| `32`            | Green   |
| `33`            | Yellow  |
| `34`            | Blue    |
| `35`            | Magenta |
| `36`            | Cyan    |
| `37`            | White   |

For example, to print text in red, you would use the following code:

```powershell
\033[31mHello, world!\033[0m
```

## Background Color
```powershell
\033[<background_code>m
```
The <background_code> value determines the color of the text background. The available values are the same as for the foreground color.

For example, to print text with a red background and white foreground, you would use the following code:
```powershell
\033[41;37mHello, world!\033[0m
```
### Style
```powershell
\033[<style_code>m
```
 Style Code Table

| Style Code | Style Name |
| ---------- | ---------- |
| `0`        | Reset      |
| `1`        | Bold       |
| `2`        | Dim        |
| `3`        | Italic     |
| `4`        | Underlined |
| `5`        | Blink      |
| `6`        | Reverse    |
| `7`        | Hidden     |

## Combining Attributes

Multiple attributes can be combined by separating them with semicolons:

```powershell
\033[<style_code>;<foreground_code>;<background_code>m
```

For example, to print bold yellow text on a blue background, you would use the following code:

```powershell
\033[1;33;44mHello, world!\033[0m
```

## Resetting Attributes
To reset all text attributes back to their default values, use the following code:

```powershell
\033[0m
```
This is useful to ensure that subsequent text is not affected by previous attributes.

## Conclusion
ANSI color codes provide a simple and flexible way to control the appearance of text in terminal applications. By combining different attributes, you can create a wide range of effects to make your output more informative and visually appealing.