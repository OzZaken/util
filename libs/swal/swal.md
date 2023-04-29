# SweetAlert2

SweetAlert2 is a JavaScript library for creating beautiful and highly customizable pop-up **Promise** modals.
It provides various options for customizing the look and behavior of the modal, such as buttons, animations, and more.

 **Usage**

To use SweetAlert2 in your project, you need to import the library either by downloading the source files or using a package manager such as npm or yarn.

Importing

To import SweetAlert2 using npm, run the following command in your terminal:
`npm install sweetalert2`

After importing the library, include the CSS and JavaScript files in your HTML file:

`<link rel="stylesheet" href="node_modules/sweetalert2/dist/sweetalert2.min.css">`
`<script src="node_modules/sweetalert2/dist/sweetalert2.min.js"></script>`



To create a basic SweetAlert2 modal, you can use the following code:
`Swal.fire({
  title: 'Your title',
  text: 'Your message',
  icon: 'success',
  showCancelButton: true,
  confirmButtonText: 'Yes, I am!',
  cancelButtonText: 'No, cancel!',
  reverseButtons: true
})`

| Option         | Type    | Description                                                                                |
|----------------|---------|--------------------------------------------------------------------------------------------|
| `title`          | string  | The title of the modal                                                                    |
| `text`           | string  | The message displayed in the modal                                                        |
| `icon`           | string  | The type of icon displayed in the modal (e.g. 'success', 'error', 'warning', 'info')     |
| `showCancelButton` | boolean | Whether to display a cancel button in the modal                                           |
| `confirmButtonText` | string  | The text displayed on the confirm button                                                  |
| `cancelButtonText` | string  | The text displayed on the cancel button                                                   |
| `reverseButtons`  | boolean | Whether to reverse the order of the confirm and cancel buttons                             |
