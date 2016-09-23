function PT(x,y)
{
	return {x,y}
}

var poly = [PT(0,0),PT(1,0),PT(0.5,0.5),PT(1,1),PT(0,1)];

var hitTest1 = PT(0.1,0.1);
var hitTest2 = PT(1,0.5)
console.log(PolygonRayscanHitTest(poly,hitTest1)); //true
console.log(PolygonRayscanHitTest(poly,hitTest2)); //false