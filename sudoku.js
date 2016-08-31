var Sudoku=[[5,7,8,1,3,2,4,9,6],
            [3,9,2,4,6,8,7,1,5],
            [1,4,6,9,5,7,8,3,2],
            [4,1,7,2,9,5,3,6,8],
            [6,2,3,8,4,1,9,5,7],
            [8,5,9,3,7,6,1,2,4],
            [2,3,4,5,8,9,6,7,1],
            [9,6,1,7,2,4,5,8,3],
            [7,8,5,6,1,3,2,4,9]];
var divArray = [];
for(var i = 0; i < 9; i++)
    divArray.push([]);
function gridToArray()
{
    var i,j;
    for(i = 0; i < 9; i++)
    {
        for(j = 0; j < 9; j++)
        {
            divArray[i].push(document.getElementById(i.toString() + "_" + j.toString()));
        }
    }
}

function fillGrid()
{
    var c,i,j;
    for(c = 0; c < 20; c++) //fills elements at random position
    {
        i = Math.floor(Math.random()*9);
        j = Math.floor(Math.random()*9);
        divArray[i][j].innerHTML="&nbsp&nbsp" + Sudoku[i][j];
    }
}
   
var i,j;
var Trans=[];
for(i=0;i<9;i++)
{
    Trans.push([]);
}
var random1, random2;
function shuffle()
{
    for(i=0;i<9;i+=3) 
    {
        random1=Math.floor(Math.random()*3)+i;
        random2=Math.floor(Math.random()*3)+i;
        //console.log(random1,random2);
        swap(Sudoku[random1],Sudoku[random2]);    
    }
}
function swap(x,y)
{
    var temp =[];
    temp=Sudoku[x];
    Sudoku[x]=Sudoku[y];
    Sudoku[y]=temp;
}
function transpose()
{
    for(i=0;i<9;i++)
    {
        for(j = 0; j<9 ; j++)
        {
            Trans[i][j] = Sudoku[j][i];
        }
    }
    Sudoku = Trans;
}
function start()
{
    gridToArray();
    /*for(i=0;i<9;i++)
    {
        for(j=0;j<9;j++)
            console.log(Sudoku[i][j]);
        console.log("     ");
    }*/
    shuffle();
    transpose();
    shuffle();
    /*for(i=0;i<9;i++)
    {
    for(j=0;j<9;j++)
        console.log(Sudoku[i][j]);
    console.log("     ");
    }*/
    fillGrid();
    // solutionCheck();
    /*var num=Math.floor(Math.random());
    if(num==1)
        transpose();*/
}
function solutionCheck()
{
    var i,j,flag=0,score=0;
    for(i=0;i<9;i++)
    {
        for(j=0;j<9;j++)
        {
            if(document.getElementById(i.toString()+'_'+j.toString())!=Sudoku[i][j])
                flag=1;
            else
                score++;
        }
    }
    if(flag==1)
    {
        alert("YOU LOSE. YOU SCORED  "+score);
    }
    else
    {
        for(i=0;i<9;i++)
        {
            for(j=0;j<9;j++)
            {
                document.getElementById(i.toString()+'_'+j.toString()).innerHTML=Sudoku[i][j];
            }
        }
        alert("SCORE"+score);
    }
}