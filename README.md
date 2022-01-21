# Color the Grid

This is my second, fully responsive web project that I created to use for my own work, not to show off. The idea is very simple. You will color the cells to draw anything as you like, then hit the **download** button at the top right corner. Boom! :boom:

## Features

- mobile-first design
- made with [Bootstrap](https://getbootstrap.com/docs/5.1/getting-started/introduction/) and [jQuery](https://code.jquery.com/)
- can be downloaded as a `.png` image

## How I got this idea

Whenever I think of playing minecraft, one question always holds me off.
> What would be the design of the thing that I'm going to build?

I used to draw the designs in graph papers, but later I realized that it's just a waste of paper. So where else can I draw them? I searched for several apps like this in playstore. But none of them had the feature I wanted. Then I thought, why not make my own? After all, I am incredible :heart_on_fire:
And thus, it came to reality. It took me only 5 days to completely build this project. So yeah, it's way more better than my first project from all angles (I think :thinking:).

## Resources

- A *download* icon from [Font Awesome](https://fontawesome.com/)
- A script named [html2canvas](https://html2canvas.hertzen.com/) for converting the grid into an image.
To use it in your code, put this script tag before adding your js file in `index.html` like this:
```html
<script src="https://html2canvas.hertzen.com/dist/html2canvas.min.js"></script>
<!-- Your js file's script tag -->
```

## How to use this

- Resize the grid with as much as columns and rows you want. By default, the grid size is 10x10 and default color is black. New columns are added on the right and rows are added at the bottom of the grid.
- Select a color which you want to apply to a cell and click `Change` to save the changes. Without it, neither you can apply a different color, nor you can have more or less columns and rows. So don't forget to click that.
- To reset the color of every cell at once, click `Reset`. FYI, it won't reset the size of the grid.
- When you are finished, click the **download** button at the top right corner to save your drawing as an image on your device.