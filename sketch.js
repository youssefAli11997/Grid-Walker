var n, grid = [], waysArr = [], tmp = [], ways = 0, idx = 0;
function setup() {
	createCanvas(2000,800);
	frameRate(5);
	n = width / 100;
	for(var i = 0; i < n; i++){
		grid.push([]);
		for(var j = 0; j < n; j++)
			grid[i].push(0);
	}
	backtrack(0,0);
}

function draw() {
	background(0);
	if(idx < ways){
		printGrid(waysArr[idx++]);
		fill(255);
		textSize(48);
		text("Way #" + idx, 200, 700);
	}else{
		fill(255);
		textSize(48);
		textAlign(CENTER);
		text("There are " + ways + " ways", 300, 400);
	}
}

function backtrack(i, j){
	if(i >= n || j >= n){
		return;
	}
	if(i == n-1 && j == n-1){
		ways++;
		grid[i][j] = 1;
		addSolution(); // cache it
		return;
	}
	tmp.push([i,j]);
	backtrack(i + 1, j);
	backtrack(i, j + 1);
	tmp.pop();
}

function printGrid(way){
	stroke(255);
	for(var i=0; i < n; i++) for(var j=0; j < n; j++){
		if(way[i][j] == 0)
			fill(0);
		else if (way[i][j] == 1)
			fill(0,0,255);
		rect(i * 100, j * 100, 100, 100);
	}
	fill(255,0,0);
	rect(0, 0, 100, 100);
	fill(0,255,0);
	rect((n-1) * 100, (n-1) * 100, 100, 100);
}

function addSolution(){
	var way = [];
	for(var i=0; i<n; i++){
		way.push([]);
		for(var j=0; j<n; j++)
			way[i].push(0);
	}

	for(var i=0; i<tmp.length; i++)
		way[tmp[i][0]][tmp[i][1]] = 1;
	
	waysArr.push(way);
}
