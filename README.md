# interactiveSVG
Interactive SVG writing and display in the browser, inspired by ipython and ipython Notebooks.

<h2>Motivation</h2>
<p>
Writing SVG directly or via javascript seems like it might be a good way to plot data for a scientific journal article. d3 is used for plotting data, but I thought I could use a simpler library than d3 after reading a post by Jerome Cukier and about querySelection in HTML/JS. plotly is also useful, but it requires a subscription for some features. I also realized there is a lot I don't know about plotting after reading Scott Murray's discussion of scales, and I thought it might be a good exercise to plot something from scratch instead of relying on python's matplotlib or other software like Matlab. The problem I have then is how to learn SVG (and JS/HTML for writing and displaying it).</p>

<h2>Description</h2>
<p>interactiveSVG.html is a simple client-side web app inspired by ipython. I happen to be using this project to learn CSS as well as HTML/JS (and ultimately SVG). The html file is really just an SVG element followed by forms for appending SVG to it, setting the SVG to a new value, evaluating javascript (which can alter the SVG), and for adding CSS, e.g. to style the svg. I figured this website might be useful for writing svg and quickly seeing the results, which might make learning the graphics format and how to make presentable SVG plots easier. </p>
