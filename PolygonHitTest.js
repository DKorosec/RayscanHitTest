/* 
  Returns true if hitPoint is inside polygon (connected points)
  points array and hitPoint must contain object property .x and .y
*/
function PolygonRayscanHitTest(points,hitPoint){
	function DOWN_RAY(A, B, pt) 
	{
		var x = pt.x,
			y = pt.y;		
		if (A.x > B.x) {
			[A,B] = [B,A];
		}
		if (x <= A.x || x > B.x || y >= A.y && y >= B.y) {
			return false; 
		} else if (y < A.y && y < B.y) {
			return true; 
		} else {  
			return (x - A.x) / (y - A.y) > (B.x - A.x) / (B.y - A.y);
		}
	}

	var count = 0;
	for (var i = 0; i < points.length; i++) 
	{
		var v1 = points[i];
		var v2 = points[(i + 1) % points.length];
		if (DOWN_RAY(v1, v2, hitPoint))
		{
			++count;
		}
	}
	return count % 2 != 0;
}