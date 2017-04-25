console.log('plotlib!')
plotlib={about : 'this is plotlib v 0.0, a javascript library for plotting data in svg, inspired by matplotlib',
		 dimensions : 2//current number of dimensions we are focused on plotting
		 }

example='<svg><defs><marker id="markerCircle" markerWidth="8" markerHeight="8" refX="5" refY="5"><circle cx="5" cy="5" r="3" style="stroke: none; fill:#000000;"/></marker></defs><path d="M100,20 l50,0 10,50 l50,0" style="stroke: #0000cc; stroke-width: 1px; fill: none; marker-start: url(#markerCircle); marker-mid: url(#markerCircle); marker-end: url(#markerCircle)"/></svg>'

/*SVG origin is in the upper left corner. These functions convert a y axis value from that in a coordinate system with the origin in the lower left corner
to a corresponding value in the SVG coordinate system and vice versa*/
function YToSVGY(y,maxSVGy) {//Convert typical y axis value to SVG y axis (reflect about x axis)
	return maxSVGY-y
}
function SVGYToY(SVGy,mxSVGy) {//Convert SVG Y axis value to typical y value (reflect about x axis)
	return y-maxSVG
}
height=300
width=300
axes='<g id=axes fill="none" stroke="black" stroke-width="3" >'+
+'<line id=yaxis x1="0" y1="0" x2='+width+' y2='+height+' />'+'<line id=xaxis x1="0" y1="0" x2='+width+' y2='+height+' />'
 +'</g>'
xmlns='http://www.w3.org/2000/svg'
l=document.createElementNS(xmlns,'line')
p=document.createElement('p')
/*for (i in p) {
	if (!p.hasOwnProperty(i)) {
	console.log(i+'.'+p[i])
	}
}*/
/*for (i in l) {
	if (!l.hasAttributeNS(xmlns,i)) {
	console.log(i+'.'+l[i])
	}
}*/
pl=document.createElementNS(xmlns,'polyline')
for (i in l) {
	if (l.hasOwnProperty(i)) {
	console.log('l.hasOwnPropertyNS '+i+'.'+l[i])
	}
}

//console.log('l.attributes '+l.attributes)
//console.log('p.attributes '+p.attributes)

//Draw a vertical line so that it appears like a yaxis, first setting the svg element's style's border to 0px so as not to display it.

/*o=output//output div below this form
df=document.createDocumentFragment();
xmlns='http://www.w3.org/2000/svg'
s=document.createElementNS(xmlns,'svg')
s.setAttribute('width','150')
s.setAttribute('height','150')
s.setAttribute('style','border: 0px')
l=document.createElementNS(xmlns,'line')
l.setAttribute('x1','0')
l.setAttribute('y1','0')
l.setAttribute('x2','0')
l.setAttribute('y2','150')
l.setAttribute('stroke','red')
s.appendChild(l)
s.appendChild(p)
df.appendChild(s)
o.appendChild(df)*/

//Draw a verticle line like above using strings and innerHTML insted of createElement and setAttribute

/*o=output//output div below this form
xmlns='http://www.w3.org/2000/svg'
svgStartTag='<svg id=new xmlns='+xmlns+' width=150 height=150 style="border: 0px">'
svgEndTag='</svg>'
l='<line x1=0 y1=0 x2=0 y2=150 stroke=red></line>'
s=svgStartTag+l+svgEndTag
o.innerHTML=s
*/

//Two viewport experiment:
/*o=output//output div below this form
xmlns='http://www.w3.org/2000/svg'
svgStartTag0='<svg id=new xmlns='+xmlns+' width=200 height=200 style="border: 0px">'
svgEndTag0='</svg>'
svgStartTag='<svg id=new xmlns='+xmlns+' width=150 height=150 style="border: 0px">'
svgEndTag='</svg>'
l='<line x1=0 y1=0 x2=0 y2=150 stroke=red></line>'
l2='<line x1=0 y1=0 x2=0 y2=200 stroke=blue></line>'
s=svgStartTag0+l2+svgStartTag+l+svgEndTag+svgEndTag0
o.innerHTML=s*/


//Draw a vertical polyline
/*o=output//output div below this form
df=document.createDocumentFragment();
xmlns='http://www.w3.org/2000/svg'
s=document.createElementNS(xmlns,'svg')
s.setAttribute('width','150')
s.setAttribute('height','150')
p=document.createElementNS(xmlns,'polyline')
p.setAttribute('points','0,0 0,75 0,150')
p.setAttribute('stroke','black')
s.appendChild(p)
df.appendChild(s)
o.appendChild(df)*/

/*o=output//output div below this form
xmlns='http://www.w3.org/2000/svg'
s=document.createElementNS(xmlns,'svg')
//s.setAttributeNS(null,'width','150')
//s.setAttributeNS(null,'height','150')
s.setAttribute('width','150')
s.setAttribute('height','150')
s.innerHTML='<polyline points="10,0 10,75 10,150" stroke="blue"></polyline>'
//p=document.createElement('polyline')
p=document.createElementNS(xmlns,'polyline')
p.setAttributeNS(null,'stroke','green')
p.setAttributeNS(null,'points','20,0 20,75 20,150')
s.appendChild(p)
p2=document.createElementNS(xmlns,'polyline')
p2.setAttribute('points','30,0 30,75 30,150')
p2.setAttribute('stroke','yellow')
s.appendChild(p2)
p3=document.createElementNS(xmlns,'polyline')
p3.points='40,0 40,75 40,150'
p3.stroke='red'
s.appendChild(p3)
o.appendChild(s)
*/

class Point {
	constructor(x,y) {
		this.x=x;
		this.y=y;
	}
}

class SVGElement {
  constructor(tagname) {
  	this.tagname=tagname
  	this.attributes={};
  }	
  string() {
  	var s=''
    s+='<'+this.tagname+'>'
  	for (i in this.attributes) {
  		s+=' '+this.attributes[i]
  	}
  	s+=' /'+this.tagname+'>'
  	return s
  }
}

class Polyline extends SVGElement {
	constructor(points) {
		this.points=points
	}
}

class Circle {
	constructor(cx,cy,r,style) {
		this.cx=cx
		this.cy=cy
		this.r=r
		this.style=style
	}
}

class Marker {
	constructor(markerId,markerWidth,markerHeight) {
		this.markerId=markerId;
		this.markerWidth=markerWidth
		this.markerHeight=markerHeight
	}
}

/*class Def extends Marker {//some definitions of SVG objects
	toHTML() {
		return '<defs><marker id='+this.Id+' markerWidth'
	}*
}*/

class SVG {
	constructor(width,height) {
		this.width=width
		this.height=height
	}
}

class Path {
	constructor(d){
		this.d=d
	}
}

class Scatter extends Path {
	
}
